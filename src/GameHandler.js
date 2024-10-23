import { TextHandler } from "./TextHandler.js";
import { TileHandler } from "./TileHandler.js";
import { EnemyHandler } from "./EnemyHandler.js";
import { UserInput } from "./UserInput.js";

export const GAME_STATES = {
    PLAYING: 'PLAYING',
    PAUSED: 'PAUSED',
    MENU: 'MENU',
    LOADING: 'LOADING',
    GAMEOVER: 'GAMEOVER',
    DEBUG: 'DEBUG',
    RESTART: 'RESTART'
};
export const LEVELS = {
    TERRA_HAUTE: 0,
}
const INTERVALS = {
    SECOND: 1000,
    EVENT:  60
}


export class GameHandler {
    constructor(){
        this.currentLevel = LEVELS.TERRA_HAUTE;
        this.currentGameState = GAME_STATES.DEBUG;

        this.userInput = new UserInput(this);
        this.textHandler = new TextHandler(this);
        this.tileHandler = new TileHandler(this);
        this.enemyHandler = new EnemyHandler(this);


        this.hearts = 1;
        this.coins = 100;
        this.exp = 0;
        this.waves = 1;
        this.timer = 0;

        this.lastTime = 0;
        this.eventTimer = 0;
        this.secondsTimer = 0;
                
        this.eventUpdate = false;
    }

    gameHandler(ctx, timeStamp){
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;

        this.playerStatusCheck();

        switch(this.currentGameState){
            case GAME_STATES.PLAYING: 
                this.gameTimer(deltaTime);
                this.tileHandler.renderTiles(ctx);
                this.textHandler.renderGUITexts(ctx);
                this.enemyHandler.renderEnemies(ctx, this.eventUpdate);
                break
            case GAME_STATES.PAUSED:
                this.textHandler.renderbigScreenTexts(ctx, GAME_STATES.PAUSED, true)
                break
            case GAME_STATES.MENU: 
                break
            case GAME_STATES.LOADING: 
                break
            case GAME_STATES.GAMEOVER:
                // this.gameTextHandler.BigScreenText(ctx, GAME_STATES.GAMEOVER);
                break
            case GAME_STATES.DEBUG: 
                this.gameTimer(deltaTime);
                this.tileHandler.renderTiles(ctx);
                this.textHandler.renderGUITexts(ctx);
                this.enemyHandler.renderEnemies(ctx, this.eventUpdate);
                
                
                this.textHandler.renderDebugTexts(ctx);
                break
            case GAME_STATES.RESTART: 
                // this.restartGame();
                break
        }
    }

    playerStatusCheck(){
        if(this.hearts <= 0) 
            this.currentGameState = GAME_STATES.GAMEOVER;
    }

    gameTimer(deltaTime){
        if (this.eventTimer < INTERVALS.EVENT){
            this.eventTimer += deltaTime;
            this.eventUpdate = false;
        } else {
            this.eventTimer = 0;
            this.eventUpdate = true; 
        }
        
        if (this.secondsTimer < INTERVALS.SECOND){
            this.secondsTimer += deltaTime;
        } else {
            this.secondsTimer = 0;
            this.timer++; 
        }
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
        // this.towers = [];
        // this.projectiles = [];
        // this.effects = [];
        // this.gameTexts = [];
        this.currentGameState = GAME_STATES.PLAYING;
    }
}