import { Level } from "./Level.js";
import { Input } from "./Input.js";
import { EnemyHandler } from "./EnemyHandler.js";
import { TowerHandler } from "./TowerHandler.js";
import { GameTextHandler } from "./GameTextHandler.js";

import { GAME_WIDTH, GAME_HEIGHT } from "../index.js";

export const GAME_STATES = {
    PLAYING: 'PLAYING',
    PAUSED: 'PAUSED',
    MENU: 'MENU',
    LOADING: 'LOADING',
    GAMEOVER: 'GAMEOVER'
};

export class Game {
    constructor(){
        this.level = new Level();
        this.gameTextHandler = new GameTextHandler();
        this.enemyHandler = new EnemyHandler(this);
        this.towerHandler = new TowerHandler(this, this.enemyHandler, this.gameTextHandler);
        this.input = new Input(this, this.level, this.towerHandler, this.enemyHandler);
        
        this.currentGameState = GAME_STATES.PLAYING;
        this.debug = false;
        this.music = new Audio('./sounds/music.mp3');
        this.music.volume = 0.1;
        this.music.pause();

        this.hearts = 1;
        this.coins = 100;
        this.exp = 0;
        this.waves = 1;
        this.timer = 0;
        
        this.eventUpdate = false;
        this.eventTimer = 0;
        this.eventInterval = 60;

        this.secondTimer = 0;
        this.secondInterval = 1000;

        this.animationID;
    }

    gameHandler(ctx, deltaTime, animate){
        switch(this.currentGameState){
            case GAME_STATES.PLAYING: 
                requestAnimationFrame(animate);
                this.gameTimer(deltaTime);
                this.drawPlayingScreen(ctx);
                if(this.hearts <= 0) this.currentGameState = GAME_STATES.GAMEOVER;
                break
            case GAME_STATES.PAUSED:
                // cancelAnimationFrame(this.animationID);
                requestAnimationFrame(animate);
                this.drawScreenText(ctx, "PAUSED"); 
                break
            case GAME_STATES.MENU: 
                break
            case GAME_STATES.LOADING: 
                break
            case GAME_STATES.GAMEOVER:
                this.drawScreenText(ctx, "GAME OVER");
                cancelAnimationFrame(this.animationID);
                break
        }
    }
    
    drawPlayingScreen(ctx){
        this.level.renderLevel(ctx, this.debug);
        this.towerHandler.renderTowers(ctx, this.eventUpdate);
        this.enemyHandler.renderEnemies(ctx);
        this.gameTextHandler.renderGameTexts(ctx);
        this.renderGUI(ctx);
    }

    gameTimer(deltaTime){
        if (this.eventTimer < this.eventInterval){
            this.eventTimer += deltaTime;
            this.eventUpdate = false;
        } else {
            this.eventTimer = 0;
            this.eventUpdate = true; 
        }

        if (this.secondTimer < this.secondInterval){
            this.secondTimer += deltaTime;
        } else {
            this.secondTimer = 0;
            this.timer++; 
        }
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