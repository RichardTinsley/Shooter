import { LevelHandler } from "../handlers/LevelHandler.js";

export class BattleScreen {
    constructor(){
        this.LevelHandler = new LevelHandler();
    }

    draw(ctx){
        this.LevelHandler.draw(ctx);
    }

    update(event){

    }
}