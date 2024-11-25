import { ScreenHandler } from "./ScreenHandler.js";
import { MouseHandler } from "./MouseHandler.js";
import { KeyboardHandler } from "./KeyboardHandler.js";
import { MusicHandler } from "./MusicHandler.js";
import { DebugHandler } from "./DebugHandler.js";
import { TimeHandler } from "./TimeHandler.js";

export class GameHandler{
    constructor(){
        this.DebugHandler       = new DebugHandler();
        this.MusicHandler       = new MusicHandler();
        this.TimeHandler        = new TimeHandler();
        this.ScreenHandler      = new ScreenHandler(this.DebugHandler, this.MusicHandler);
        this.MouseHandler       = new MouseHandler(this.ScreenHandler.switchScreens);
        this.KeyboardHandler    = new KeyboardHandler(this.ScreenHandler.switchScreens);
    }
    
    draw(ctx){
        this.ScreenHandler.draw(ctx);
        this.DebugHandler.drawDebugInfo(ctx, this.MouseHandler.mouse, this.ScreenHandler.Screen.menu);
    }

    update(time){
        this.TimeHandler.update(time);
        this.ScreenHandler.update(this.TimeHandler.event);
        this.MouseHandler.mouseOverObject(this.ScreenHandler.Screen.menu);
    }
}
