import { TIME_INTERVALS, LEVELS } from "../utilities/constants.js";
import { TileHandler } from "../TileHandler.js"
import { UserInput } from "../UserInput.js"
import { EnemyHandler } from "../EnemyHandler.js"
import { TowerHandler } from "../TowerHandler.js"
import { ProjectileHandler } from "../ProjectileHandler.js"
import { EffectHandler } from "../EffectHandler.js";
import { TextHandler } from "../TextHandler.js";

export class BattleScene {
    constructor(game){
        // this.currentGameState = GAME_STATES.PLAYING;
        this.currentLevel = LEVELS.TERRA_HAUTE;

        this.tileHandler        = new TileHandler(this);
        this.textHandler        = new TextHandler(this);
        this.userInput          = new UserInput(this);
        this.enemyHandler       = new EnemyHandler(this);
        this.towerHandler       = new TowerHandler(this);
        this.projectileHandler  = new ProjectileHandler(this);
        this.effectHandler      = new EffectHandler(this);
        this.textHandler        = new TextHandler(this);

        this.hearts = 10;
        this.coins = 100;
        this.exp = 0;
        this.waves = 1;
        this.timer = 0;

        this.lastTime = 0;
        this.eventTimer = 0;
        this.secondsTimer = 0;
    }

    draw(ctx){
        this.tileHandler.draw(ctx);
        this.textHandler.renderGUITexts(ctx);
        this.enemyHandler.draw(ctx);
        this.towerHandler.draw(ctx);
        this.projectileHandler.draw(ctx);
        this.effectHandler.draw(ctx);
        this.textHandler.draw(ctx);
    }

    update(event){
        this.timerUpdate(event)
        this.enemyHandler.update(event);
        this.towerHandler.update(event);
        this.projectileHandler.update(event);
        this.effectHandler.update(event);
        this.textHandler.update(event);
    }

    // playerStatusCheck(){
    //     if(this.hearts <= 0) 
    //         this.currentGameState = GAME_STATES.GAMEOVER;
    // }

    timerUpdate(event){
        if (event){
            this.secondsTimer++;
        }
        if (this.secondsTimer >= 15){
            this.secondsTimer = 0;
            this.timer++; 
        }
    }

    // restartGame(){
    //     this.hearts = 1;
    //     this.coins = 100;
    //     this.exp = 0;
    //     this.waves = 1;
    //     this.timer = 0;
    //     this.enemyHandler.allEnemiesActive = false;
    //     this.enemyHandler.maxEnemies = 10;
    //     this.enemyHandler.enemyCounter = 0;    
    //     this.enemyHandler.enemySpawnTimer = 0;

    //     this.enemyHandler.enemies = [];
    //     this.towerHandler.towers = [];
    //     this.projectileHandler.projectiles = [];
    //     this.effectHandler.effects = [];
    //     this.textHandler.texts = [];
    //     this.currentGameState = GAME_STATES.PLAYING;
    // }
}