import { TIME_INTERVALS, LEVELS, GAME_STATES } from "../utilities/constants.js";
import { renderDebugInfo } from "../utilities/debug.js"
import { drawBigScreenTexts } from "../utilities/textRender.js";
import { TileHandler } from "../TileHandler.js"
import { UserInput } from "../UserInput.js"
import { EnemyHandler } from "../EnemyHandler.js"
import { TowerHandler } from "../TowerHandler.js"
import { ProjectileHandler } from "../ProjectileHandler.js"
import { EffectHandler } from "../EffectHandler.js";
import { TextHandler } from "../TextHandler.js";

export class BattleScene {
    frames = 0;
    startTime = performance.now();
    FPSNormal = 0;

    constructor(switchToGameOverScene, switchToBattleScene){
        this.currentLevel = LEVELS.TERRA_HAUTE;
        this.currentGameState = GAME_STATES.PLAYING;
        
        this.hudElements = {
            hearts: 2,
            coins: 100,
            exp: 0,
            waves: 1,
            timer: 0
        };

        this.tileHandler        = new TileHandler(this.currentLevel);
        this.textHandler        = new TextHandler(this.hudElements);
        this.enemyHandler       = new EnemyHandler(this.hudElements);
        this.effectHandler      = new EffectHandler();
        this.projectileHandler  = new ProjectileHandler(this.enemyHandler, this.textHandler, this.effectHandler, this.hudElements);
        this.towerHandler       = new TowerHandler(this.enemyHandler, this.projectileHandler);
        this.userInput          = new UserInput(
            this.hudElements,
            this.tileHandler, 
            this.towerHandler, 
            this.enemyHandler,
            this.pauseGame,
            this.restartGame,
            this.debugGame
        );
        
        this.switchToGameOverScene = switchToGameOverScene;
        this.switchToBattleScene = switchToBattleScene;

        this.lastTime = 0;
        this.eventTimer = 0;
        this.secondsTimer = 0;
    }

    draw(ctx){
        this.tileHandler.draw(ctx);
        this.enemyHandler.draw(ctx);
        this.towerHandler.draw(ctx);
        this.projectileHandler.draw(ctx);
        this.effectHandler.draw(ctx);
        this.textHandler.draw(ctx);
        this.textHandler.renderGUITexts(ctx);

        if(this.currentGameState === GAME_STATES.DEBUG)
            renderDebugInfo(
                ctx, 
                this.towerHandler, 
                this.enemyHandler, 
                this.projectileHandler
            );

        if(this.currentGameState === GAME_STATES.PAUSED)
            drawBigScreenTexts(ctx, "Paused", true);
    }

    update(event){
        if(this.currentGameState === GAME_STATES.PAUSED) return
        this.timerUpdate(event)
        this.enemyHandler.update(event);
        this.towerHandler.update(event);
        this.projectileHandler.update(event);
        this.effectHandler.update(event);
        this.textHandler.update();
        this.playerStatusCheck();
    }

    
    playerStatusCheck(){
        if(this.hudElements.hearts <= 0){
            this.enemyHandler.enemies = [];
            this.switchToGameOverScene();
        }
    }
    
    timerUpdate(event){
        if (event){
            this.secondsTimer++;
        }
        if (this.secondsTimer >= 15){
            this.secondsTimer = 0;
            this.hudElements.timer++; 
        }
    }

    debugGame = () => {
        if(this.currentGameState === GAME_STATES.PLAYING)
            this.currentGameState = GAME_STATES.DEBUG;
        else
            this.currentGameState = GAME_STATES.PLAYING;
    }

    pauseGame = () => {
        if(this.currentGameState === GAME_STATES.PLAYING)
            this.currentGameState = GAME_STATES.PAUSED;
        else
            this.currentGameState = GAME_STATES.PLAYING;
    }
    
    restartGame = () => {
        this.switchToBattleScene();
    }
}