import { LEVELS } from "../constants/constants.js";
import { BattleScreenHud } from "./BattleScreenHud.js";
import { renderDebugInfo } from "../utilities/debug.js";
import { MapHandler } from "../MapHandler.js";
import { EntityHandler } from "../EntityHandler.js";
import { WaveHandler } from "../WaveHandler.js";

export class BattleScreen {
    constructor(userInput, switchScreens){
        this.currentLevel = LEVELS.TERRA_HAUTE;
        this.debugMode = false;
                
        this.userInput          = userInput;
        this.switchScreens      = switchScreens;
        this.battleScreenHud    = new BattleScreenHud();
        this.mapHandler         = new MapHandler();
        this.entityHandler      = new EntityHandler(
            this.mapHandler.towerPlacementSpots, 
            this.battleScreenHud.hudElements
        );

        this.waveHandler        = new WaveHandler(
            this.battleScreenHud.hudElements, 
            this.entityHandler.addEnemy, 
            this.switchScreens
        );
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
        this.entityHandler.update(event);
        this.battleScreenHud.update(event);
        this.waveHandler.update(event, this.entityHandler.enemies);

        this.userInput.enemySelector(this.entityHandler.enemies);
        this.userInput.towerSelector(this.entityHandler.towers);
    }


}