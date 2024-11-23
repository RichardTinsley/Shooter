import { ScreenHandler } from "./handlers/ScreenHandler.js";
import { MouseHandler } from "./handlers/MouseHandler.js";
import { TimeHandler } from "./handlers/TimeHandler.js";
import { KeyboardHandler } from "./handlers/KeyboardHandler.js";
import { context } from "./utilities/context.js";

const ctx = context();

export class Game{
    constructor(){
        this.MouseHandler = new MouseHandler();
        this.ScreenHandler = new ScreenHandler(this.MouseHandler);
        this.TimeHandler = new TimeHandler();
        this.KeyboardHandler = new KeyboardHandler(this.ScreenHandler.switchScreens);

        requestAnimationFrame(this.frame);
    }
    
    frame = (time) => {
        this.ScreenHandler.update(this.TimeHandler.eventUpdater(time));
        this.ScreenHandler.draw(ctx);
        requestAnimationFrame(this.frame);
    }
}
