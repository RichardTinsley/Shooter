import { TIME_INTERVALS, LEVELS, GAME_STATES, ENEMY_COLOURS } from "../constants/constants.js";
import { assets } from "../AssetLoader.js";
import { HudDisplay } from "./HudDisplay.js";
import { renderDebugInfo } from "../utilities/debug.js"
import { drawBigScreenTexts } from "../utilities/textRender.js";
import { MapHandler } from "../MapHandler.js"
import { UserInput } from "../UserInput.js"
import { EntityHandler } from "../EntityHandler.js";

export class BattleScene {
    constructor(switchToGameOverScene, switchToBattleScene){
        this.currentLevel = LEVELS.TERRA_HAUTE;
        this.currentGameState = GAME_STATES.PLAYING;
        
        this.hudDisplay         = new HudDisplay();
        this.mapHandler         = new MapHandler();
        this.entityHandler      = new EntityHandler(this.mapHandler.towerSpots, this.hudDisplay.hudElements);

        this.userInput          = new UserInput(
            this.entityHandler, 
            this.pauseGame,
            this.restartGame,
            this.debugGame
        );
        
        this.switchToGameOverScene = switchToGameOverScene;
        this.switchToBattleScene = switchToBattleScene;

        this.allEnemiesActive = false;
        this.maxEnemies = 10;
        this.enemyCounter = 0;   
        this.enemySpawnTimer = 0;
    }

    draw(ctx){
        this.mapHandler.draw(ctx);
        this.entityHandler.draw(ctx);
        this.hudDisplay.draw(ctx);

        if(this.currentGameState === GAME_STATES.DEBUG)
            renderDebugInfo(
                ctx, 
                this.entityHandler.towers,
                this.entityHandler.enemies,
                this.entityHandler.projectiles
            );

        if(this.currentGameState === GAME_STATES.PAUSED)
            drawBigScreenTexts(ctx, "Paused", true);
    }

    update(event){
        if(this.currentGameState === GAME_STATES.PAUSED) return
        this.addEnemy(event);
        this.entityHandler.update(event);
        this.hudDisplay.update(event);
        this.playerStatusCheck();
        this.nextWave();
    }

    addEnemy(event){
        if (event) this.enemySpawnTimer++;
        if (this.enemySpawnTimer % Math.floor(Math.random() * 300) === 0 && this.allEnemiesActive === false){
            const enemy = this.generateEnemy();
            this.entityHandler.addEnemy(enemy);
            this.enemyCounter++;
        }
    }

    nextWave(){
        if (this.enemyCounter === this.maxEnemies)
            this.allEnemiesActive = true;

        if (this.entityHandler.enemies.length === 0 && this.allEnemiesActive === true) {
            this.hudDisplay.hudElements.waves++;
            this.maxEnemies++;
            this.enemyCounter = 0;
            this.allEnemiesActive = false;
        }
    }

    generateEnemy(){
        let index;
        if(this.hudDisplay.hudElements.waves < 119)
            index = Math.floor(Math.random() * (this.hudDisplay.hudElements.waves / 10));
        else 
            index = Math.floor(Math.random() * 12);
        return assets.get(ENEMY_COLOURS[index]);
    }

    playerStatusCheck(){
        if(this.hudDisplay.hudElements.hearts <= 0){
            this.entityHandler.enemies = [];
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