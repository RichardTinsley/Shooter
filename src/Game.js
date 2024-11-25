import { context } from "./utilities/context.js";
import { GameHandler } from "./handlers/GameHandler.js";

const ctx = context();

export class Game{
    constructor(){
        this.GameHandler = new GameHandler();
        requestAnimationFrame(this.frame);
    }
    
    frame = (time) => {
        this.GameHandler.draw(ctx);
        this.GameHandler.update(time);
        requestAnimationFrame(this.frame);
    }
}
