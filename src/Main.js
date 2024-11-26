import { context } from "./utilities/context.js";
import { Game } from "./handlers/Game.js";

const ctx = context();

export class Main{
    constructor(){
        this.Game = new Game();
        requestAnimationFrame(this.frame);
    }
    
    frame = (time) => {
        this.Game.draw(ctx);
        this.Game.update(time);
        requestAnimationFrame(this.frame);
    }
}
