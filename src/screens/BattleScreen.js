import { Levels } from "../handlers/Levels.js";
import { Objects } from "../handlers/Objects.js";

export class BattleScreen {
    constructor(){
        this.Levels = new Levels();
        this.Objects = new Objects(this.Levels.emptyTowerSpots);
    }

    draw(ctx){
        this.Levels.draw(ctx);
        this.Objects.draw(ctx);
    }

    update(event){
        this.Objects.update(event);
    }
}