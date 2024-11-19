import { LEVELS, GAME_STATES, ENEMY_COLOURS } from "../constants/constants.js";
import { assets } from "../AssetLoader.js";
import { BattleScreenHud } from "./BattleScreenHud.js";
import { renderDebugInfo } from "../utilities/debug.js";
import { drawBigScreenTexts } from "../utilities/textRender.js";
import { MapHandler } from "../MapHandler.js";
import { EntityHandler } from "../EntityHandler.js";

export class BattleScreen {
    constructor(userInput){
        this.currentLevel = LEVELS.TERRA_HAUTE;
        this.currentGameState = GAME_STATES.PLAYING;
        
        this.userInput = userInput;
        this.battleScreenHud    = new BattleScreenHud();
        this.mapHandler         = new MapHandler();
        this.entityHandler      = new EntityHandler(this.mapHandler.towerPlacementSpots, this.battleScreenHud.hudElements);

        this.allEnemiesActive = false;
        this.maxEnemies = 10;
        this.enemyCounter = 0;   
        this.enemySpawnTimer = 0;
    }

    draw(ctx){
        this.mapHandler.draw(ctx);
        this.entityHandler.draw(ctx);
        this.battleScreenHud.draw(ctx);

        if(this.currentGameState === GAME_STATES.DEBUG)
            renderDebugInfo(
                ctx, 
                this.userInput.mouse,
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
        this.battleScreenHud.update(event);
        this.playerStatusCheck();
        this.waveStatusCheck();

        this.userInput.enemySelector(this.entityHandler.enemies);
        this.userInput.towerSelector(this.entityHandler.towers);
    }

    addEnemy(event){
        if (event) 
            this.enemySpawnTimer++;

        if (this.enemySpawnTimer % Math.floor(Math.random() * 300) === 0 && this.allEnemiesActive === false){
            const enemy = this.generateEnemy();
            this.entityHandler.addEnemy(enemy);
            this.enemyCounter++;
        }
    }

    waveStatusCheck(){
        if (this.enemyCounter === this.maxEnemies)
            this.allEnemiesActive = true;

        if (this.entityHandler.enemies.length === 0 && this.allEnemiesActive === true) {
            this.battleScreenHud.hudElements.waves++;
            this.maxEnemies++;
            this.enemyCounter = 0;
            this.allEnemiesActive = false;
        }
    }

    generateEnemy(){
        let index;
        if(this.battleScreenHud.hudElements.waves < 119)
            index = Math.floor(Math.random() * (this.battleScreenHud.hudElements.waves / 10));
        else 
            index = Math.floor(Math.random() * 12);
        return assets.get(ENEMY_COLOURS[index]);
    }

    playerStatusCheck(){
        if(this.battleScreenHud.hudElements.hearts <= 0){
            this.entityHandler.enemies = [];
            this.switchToGameOverScreen();
        }
    }
}