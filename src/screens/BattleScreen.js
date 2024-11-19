import { LEVELS, ENEMY_COLOURS, GAME_STATES } from "../constants/constants.js";
import { assets } from "../AssetLoader.js";
import { BattleScreenHud } from "./BattleScreenHud.js";
import { renderDebugInfo } from "../utilities/debug.js";
import { MapHandler } from "../MapHandler.js";
import { EntityHandler } from "../EntityHandler.js";

export class BattleScreen {
    constructor(userInput, switchScreens){
        this.currentLevel = LEVELS.TERRA_HAUTE;
        this.debugMode = false
                
        this.userInput = userInput;
        this.switchScreens = switchScreens;
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

        if(this.debugMode)
            renderDebugInfo(
                ctx, 
                this.userInput.mouse,
                this.entityHandler.towers,
                this.entityHandler.enemies,
                this.entityHandler.projectiles
            );
    }

    update(event){
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
            this.switchScreens(GAME_STATES.GAMEOVER);
        }
    }
}