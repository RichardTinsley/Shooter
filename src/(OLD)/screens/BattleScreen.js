import { LEVELS } from "../constants/constants.js";
import { BattleScreenHud } from "./BattleScreenHud.js";
import { renderDebugInfo } from "../../utilities/debug.js";
import { MapHandler } from "../MapHandler.js";
import { EntityHandler } from "../EntityHandler.js";
import { WaveHandler } from "../WaveHandler.js";
import { BattleHandler } from "../BattleHandler.js";

export class BattleScreen {
    constructor(userInput, switchScreens){
        // this.currentLevel = LEVELS.TERRA_HAUTE;

        this.userInput          = userInput;
        this.switchScreens      = switchScreens;
        this.battleScreenHud    = new BattleScreenHud();
        this.mapHandler         = new MapHandler();
        this.entityHandler      = new EntityHandler(
            this.mapHandler.towerPlacementSpots, 
        );
        
        this.waveHandler        = new WaveHandler(
            this.battleScreenHud.hudElements, 
            this.entityHandler.addEnemy, 
            this.switchScreens
        );

        this.battleHandler = new BattleHandler(
            this.entityHandler.addProjectile,
            this.entityHandler.addEffect,
            this.entityHandler.addText,
            this.battleScreenHud.addCoins,
            this.battleScreenHud.addExperience,
        )
    }

    draw(ctx){
        this.mapHandler.draw(ctx);
        this.entityHandler.draw(ctx);
        this.waveHandler.draw(ctx);
        this.battleScreenHud.draw(ctx);
    }

    update(event){
        this.battleScreenHud.update(event);
        this.entityHandler.update(event);
        this.waveHandler.update(event, this.entityHandler.enemies);
        this.battleHandler.update(this.entityHandler.projectiles, this.entityHandler.towers, this.entityHandler.enemies);

        this.userInput.enemySelector(this.entityHandler.enemies);
        this.userInput.towerSelector(this.entityHandler.towers);
    }


}