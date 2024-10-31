import { GAME_STATES, LEVELS, TIME_INTERVALS } from "./Constants.js";
import { initialiseAssets } from "./AssetHandler.js";
import { TextHandler } from "./TextHandler.js";
import { TileHandler } from "./TileHandler.js";
import { EnemyHandler } from "./EnemyHandler.js";
import { TowerHandler } from "./TowerHandler.js";
import { ProjectileHandler } from "./ProjectileHandler.js";
import { EffectHandler } from "./EffectHandler.js";
import { UserInput } from "./UserInput.js";
import { DebugHandler } from "./DebugHandler.js";


export class GameHandler {
    constructor(){
        initialiseAssets();
        this.currentLevel = LEVELS.TERRA_HAUTE;
        this.currentGameState = GAME_STATES.PLAYING;
                
        this.tileHandler = new TileHandler(this);
        this.userInput = new UserInput(this);
        this.textHandler = new TextHandler(this);
        this.enemyHandler = new EnemyHandler(this);
        this.towerHandler = new TowerHandler(this);
        this.projectileHandler = new ProjectileHandler(this);
        this.effectHandler = new EffectHandler(this);
        this.debugHandler = new DebugHandler(this); 

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
        this.tileHandler.renderTiles(ctx);
        this.textHandler.renderGUITexts(ctx);

        switch(this.currentGameState){
            case GAME_STATES.PLAYING: 
                this.gameTimer(deltaTime);
                this.enemyHandler.renderEnemies(ctx, this.eventUpdate);
                this.towerHandler.renderTowers(ctx, this.eventUpdate);
                this.projectileHandler.renderProjectiles(ctx, this.eventUpdate);
                this.effectHandler.renderEffects(ctx, this.eventUpdate);
                this.textHandler.renderTexts(ctx);
                break
            case GAME_STATES.PAUSED:
                this.textHandler.renderbigScreenTexts(ctx, GAME_STATES.PAUSED, true);
                break
            case GAME_STATES.MENU: 
                break
            case GAME_STATES.LOADING: 
                break
            case GAME_STATES.GAMEOVER:
                this.textHandler.renderbigScreenTexts(ctx, GAME_STATES.GAMEOVER, true);
                break
            case GAME_STATES.DEBUG:
                this.gameTimer(deltaTime);
                this.enemyHandler.renderEnemies(ctx, this.eventUpdate);
                this.towerHandler.renderTowers(ctx, this.eventUpdate);    
                this.projectileHandler.renderProjectiles(ctx, this.eventUpdate);         
                this.effectHandler.renderEffects(ctx, this.eventUpdate);
                this.textHandler.renderTexts(ctx);

                this.debugHandler.renderDebugInfo(ctx);
                break
            case GAME_STATES.RESTART: 
                this.restartGame();
                break
        }
    }

    playerStatusCheck(){
        if(this.hearts <= 0) 
            this.currentGameState = GAME_STATES.GAMEOVER;
    }

    gameTimer(deltaTime){
        if (this.eventTimer < TIME_INTERVALS.EVENT){
            this.eventTimer += deltaTime;
            this.eventUpdate = false;
        } else {
            this.eventTimer = 0;
            this.eventUpdate = true; 
        }
        
        if (this.secondsTimer < TIME_INTERVALS.SECOND){
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
        console.log();
        this.enemyHandler.allEnemiesActive = false;
        this.enemyHandler.maxEnemies = 10;
        this.enemyHandler.enemyCounter = 0;    
        this.enemyHandler.enemySpawnTimer = 0;

        this.enemyHandler.enemies = [];
        this.towerHandler.towers = [];
        this.projectileHandler.projectiles = [];
        this.effectHandler.effects = [];
        this.textHandler.texts = [];
        this.currentGameState = GAME_STATES.PLAYING;
    }
}