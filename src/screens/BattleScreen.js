import { LevelHandler } from "../handlers/LevelHandler.js";
import { ObjectHandler } from "../handlers/ObjectHandler.js";

export class BattleScreen {
    constructor(){
        this.LevelHandler = new LevelHandler();
        this.ObjectHandler = new ObjectHandler(this.LevelHandler.emptyTowerSpots);
    }

    draw(ctx){
        this.LevelHandler.draw(ctx);
        this.ObjectHandler.draw(ctx);
    }

    update(event){
        this.ObjectHandler.update(event);
    }
}