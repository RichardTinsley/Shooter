import { LevelHandler } from "../handlers/LevelHandler.js";
import { ObjectHandler } from "../handlers/ObjectHandler.js";

export class BattleScreen {
    constructor(drawBattleDebugInfo){
        this.drawBattleDebugInfo = drawBattleDebugInfo;
        this.LevelHandler = new LevelHandler();
        this.ObjectHandler = new ObjectHandler(this.LevelHandler.emptyTowerSpots);
    }

    draw(ctx){
        this.LevelHandler.draw(ctx);
        this.ObjectHandler.draw(ctx);
        this.drawBattleDebugInfo(ctx, this.ObjectHandler.towers);
    }

    update(event){
        this.ObjectHandler.update(event);
    }
}