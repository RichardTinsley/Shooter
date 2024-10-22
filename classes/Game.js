import { Input } from "./Input.js";
import { AssetHandler } from "./AssetHandler.js";
import { RenderHandler } from "./RenderHandler.js";
import { Enemy } from "./Enemy.js";
import { Tower } from "./Tower.js";
import { ENEMY_SIZE, TOWER_SIZE, HALF_TILE_SIZE} from "../index.js";

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

    randomPositiveOrNegativeNumber(range){
        const positiveOrNegative = Math.ceil((Math.random() - 0.5) * 2) < 1 ? -1 : 1
        return Math.floor(Math.random() * range) * positiveOrNegative;
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
        this.renderHandler.projectiles = [];
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

    populateEnemiesArray(enemy, enemies){
        enemies.push(new Enemy({
            sprite: { 
                image: enemy.image, 
                frame: 0, 
                row: 0,  
                width: ENEMY_SIZE, 
                height: ENEMY_SIZE 
            },
            position: { 
                x: 0,  
                y: 0 
            },
            scale: Math.random() + 1,
            waypoints: this.assetHandler.levelOne.waypoints
        }));
        this.renderHandler.enemyCounter++;
    }


    populateTowersArray(tower, towers, activeTile){
        towers.push(new Tower({
            sprite: { 
                image: tower.image, 
                frame: 0, 
                row: 0,
                width: TOWER_SIZE, 
                height: TOWER_SIZE 
            },
            position: { 
                x: activeTile.position.x - HALF_TILE_SIZE,
                y: activeTile.position.y - HALF_TILE_SIZE  
            },
            scale: 1,
            projectile: tower.projectile
        }));
    }
}

