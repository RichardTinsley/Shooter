import { TIME_INTERVALS, LEVELS, GAME_STATES } from "../constants/constants.js";
import { HudDisplay } from "./HudDisplay.js";
import { renderDebugInfo } from "../utilities/debug.js"
import { drawBigScreenTexts } from "../utilities/textRender.js";
import { MapHandler } from "../MapHandler.js"
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
        
        this.hudDisplay         = new HudDisplay();
        this.mapHandler         = new MapHandler();
        this.textHandler        = new TextHandler();
        this.enemyHandler       = new EnemyHandler(this.hudDisplay.hudElements);
        this.effectHandler      = new EffectHandler();
        this.projectileHandler  = new ProjectileHandler(this.enemyHandler, this.textHandler, this.effectHandler, this.hudDisplay.hudElements);
        this.towerHandler       = new TowerHandler(this.enemyHandler, this.projectileHandler, this.mapHandler.tileMap);
        this.userInput          = new UserInput(
            this.hudDisplay.hudElements,
            this.towerHandler, 
            this.enemyHandler,
            this.pauseGame,
            this.restartGame,
            this.debugGame
        );
        
        this.switchToGameOverScene = switchToGameOverScene;
        this.switchToBattleScene = switchToBattleScene;
    }

    draw(ctx){
        this.mapHandler.draw(ctx);
        this.enemyHandler.draw(ctx);
        this.towerHandler.draw(ctx);
        this.projectileHandler.draw(ctx);
        this.effectHandler.draw(ctx);
        this.textHandler.draw(ctx);
        this.hudDisplay.draw(ctx);

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
        this.enemyHandler.update(event);
        this.towerHandler.update(event);
        this.projectileHandler.update(event);
        this.effectHandler.update(event);
        this.hudDisplay.update(event);
        this.textHandler.update(event);
        // this.playerStatusCheck();
    }

    
    playerStatusCheck(){
        if(this.hudDisplay.hudElements.hearts <= 0){
            this.enemyHandler.enemies = [];
            this.switchToGameOverScene();
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