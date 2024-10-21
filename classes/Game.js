import { Level } from "./Level.js";
import { Input } from "./Input.js";
import { AudioHandler } from "./AudioHandler.js";
import { EnemyHandler } from "./EnemyHandler.js";
import { TowerHandler } from "./TowerHandler.js";
import { EffectHandler } from "./EffectHandler.js";
import { GameTextHandler } from "./GameTextHandler.js";
import { ProjectileHandler } from "./ProjectileHandler.js";

import { GAME_WIDTH, GAME_HEIGHT } from "../index.js";

export const GAME_STATES = {
    PLAYING: 'PLAYING',
    PAUSED: 'PAUSED',
    MENU: 'MENU',
    LOADING: 'LOADING',
    GAMEOVER: 'GAMEOVER',
    DEBUG: 'DEBUG',
    RESTART: 'RESTART'
};

export class Game {
    constructor(){
        this.level = new Level();
        this.audioHandler = new AudioHandler();
        this.gameTextHandler = new GameTextHandler();
        this.effectHandler = new EffectHandler();
        this.enemyHandler = new EnemyHandler(this);
        this.projectileHandler = new ProjectileHandler(this);
        this.towerHandler = new TowerHandler(this);
        this.input = new Input(this);
        
        this.currentGameState = GAME_STATES.PLAYING;

        this.hearts = 1;
        this.coins = 100;
        this.exp = 0;
        this.waves = 1;
        this.timer = 0;
        
        this.secondsTimer = 0;
        this.secondsInterval = 1000;
        
        this.eventUpdate = false;
        this.eventTimer = 0;
        this.eventInterval = 60;

        this.frames = 0;
        this.startTime = performance.now();
        this.FPSNormal = 0;
    }

    gameHandler(ctx, deltaTime, animate){
        requestAnimationFrame(animate);

        switch(this.currentGameState){
            case GAME_STATES.PLAYING: 
                this.renderGame(ctx, deltaTime);
                break
            case GAME_STATES.PAUSED:
                this.drawScreenText(ctx, GAME_STATES.PAUSED); 
                break
            case GAME_STATES.MENU: 
                break
            case GAME_STATES.LOADING: 
                break
            case GAME_STATES.GAMEOVER:
                this.drawScreenText(ctx, GAME_STATES.GAMEOVER);
                break
            case GAME_STATES.DEBUG: 
                this.renderGame(ctx, deltaTime);
                this.renderDebugInfo(ctx);
                break
            case GAME_STATES.RESTART: 
                this.restartGame();
                break
        }
    }
    
    renderGame(ctx, deltaTime){
        this.gameTimer(deltaTime);
        this.level.renderLevel(ctx);
        this.towerHandler.renderTowers(ctx, this.eventUpdate);
        this.enemyHandler.renderEnemies(ctx, this.eventUpdate);
        this.effectHandler.renderEffects(ctx, this.eventUpdate);
        this.gameTextHandler.renderGameTexts(ctx);
        this.renderGUI(ctx);
        if(this.hearts <= 0) this.currentGameState = GAME_STATES.GAMEOVER;
    }

    restartGame(){
        this.hearts = 1;
        this.coins = 100;
        this.exp = 0;
        this.waves = 1;
        this.timer = 0;

        this.enemyHandler.allEnemiesActive = false;
        this.enemyHandler.maxEnemies = 10;
        this.enemyHandler.enemyCounter = 0;    
        this.enemyHandler.enemySpawnTimer = 0;

        this.enemyHandler.enemies = [];
        this.towerHandler.towers = [];
        this.effectHandler.effects = [];
        this.gameTextHandler.gameTexts = [];
        this.currentGameState = GAME_STATES.PLAYING;
    }

    gameTimer(deltaTime){
        if (this.eventTimer < this.eventInterval){
            this.eventTimer += deltaTime;
            this.eventUpdate = false;
        } else {
            this.eventTimer = 0;
            this.eventUpdate = true; 
        }
        
        if (this.secondsTimer < this.secondsInterval){
            this.secondsTimer += deltaTime;
        } else {
            this.secondsTimer = 0;
            this.timer++; 
        }
    }

    calculateFPSNormal(){
        let t = performance.now();
        let dt = t - this.startTime;

        if(dt > 1000) {
            this.FPSNormal = this.frames * 1000 / dt;
            this.frames = 0;
            this.startTime = t
        }
        this.frames++;
    }

    renderDebugInfo(ctx){
        this.calculateFPSNormal();
        this.input.drawLevelDebug(ctx);
        this.input.drawTowerDebug(ctx);
        this.input.drawEnemyDebug(ctx);
        this.input.drawPerformanceDebug(ctx);
    }
    
    renderGUI(ctx){
        this.drawGUIText(ctx, this.hearts, 65, 52, 20,'left');
        this.drawGUIText(ctx, this.coins, 225, 52, 20,'left');
        this.drawGUIText(ctx, this.exp, 515, 52, 20,'left');
        this.drawGUIText(ctx, this.waves, 805, 52, 20,'left');
        this.drawGUIText(ctx, this.timer, 1155, 52, 20,'left');
    }
    
    drawGUIText(ctx, text, x, y, textSize, align){
        ctx.fillStyle = 'white';
        ctx.font = 'bold ' + textSize + 'px canterbury';
        ctx.textAlign = align;
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x + 5, y - 3);
    }
    
    drawScreenText(ctx, text){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        this.drawGUIText(ctx, text, GAME_WIDTH / 2, GAME_HEIGHT / 2, 100, 'center'); 
    }
}