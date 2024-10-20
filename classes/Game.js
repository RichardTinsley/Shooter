import { Input } from "./Input.js";
import { AssetHandler } from "./AssetHandler.js";
import { RenderHandler } from "./RenderHandler.js";

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
        this.input = new Input(this);
        this.assetHandler = new AssetHandler(this);
        this.renderHandler = new RenderHandler(this);
        
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
        if(this.hearts <= 0) this.currentGameState = GAME_STATES.GAMEOVER;

        switch(this.currentGameState){
            case GAME_STATES.PLAYING: 
                this.renderHandler.renderGame(ctx, deltaTime);
                break
            case GAME_STATES.PAUSED:
                this.renderHandler.drawScreenStopped(ctx, GAME_STATES.PAUSED); 
                break
            case GAME_STATES.MENU: 
                break
            case GAME_STATES.LOADING: 
                break
            case GAME_STATES.GAMEOVER:
                this.renderHandler.drawScreenStopped(ctx, GAME_STATES.GAMEOVER);
                break
            case GAME_STATES.DEBUG: 
                this.renderHandler.renderGame(ctx, deltaTime);
                this.renderHandler.renderDebugInfo(ctx);
                break
            case GAME_STATES.RESTART: 
                this.restartGame();
                break
        }
    }

    restartGame(){
        this.hearts = 1;
        this.coins = 100;
        this.exp = 0;
        this.waves = 1;
        this.timer = 0;

        this.renderHandler.allEnemiesActive = false;
        this.renderHandler.maxEnemies = 10;
        this.renderHandler.enemyCounter = 0;    
        this.renderHandler.enemySpawnTimer = 0;

        this.renderHandler.enemies = [];
        this.renderHandler.towers = [];
        this.renderHandler.effects = [];
        this.renderHandler.gameTexts = [];
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
}