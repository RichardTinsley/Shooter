import { ScreenHandler } from "./handlers/ScreenHandler.js";
import { TimeHandler } from "./handlers/TimeHandler.js";
import { context } from "./utilities/context.js";

const ctx = context();
let event;

export class Game{
    constructor(){
        this.ScreenHandler = new ScreenHandler();
        this.TimeHandler = new TimeHandler();
        requestAnimationFrame(this.frame);
    }
    
    frame = (time) => {
        event = this.TimeHandler.eventUpdater(time);
        this.ScreenHandler.update(event);
        this.ScreenHandler.draw(ctx);
        requestAnimationFrame(this.frame);
    }
}
