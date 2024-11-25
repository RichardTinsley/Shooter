import { ScreenHandler } from "./ScreenHandler.js";
import { MouseHandler } from "./MouseHandler.js";
import { KeyboardHandler } from "./KeyboardHandler.js";
import { MusicHandler } from "./MusicHandler.js";
import { DebugHandler } from "./DebugHandler.js";
import { TimeHandler } from "./TimeHandler.js";

export class GameHandler{
    constructor(){
        this.MusicHandler       = new MusicHandler();
        this.TimeHandler        = new TimeHandler();
        this.ScreenHandler      = new ScreenHandler(
            this.MusicHandler.switchMusic
        );
        this.MouseHandler       = new MouseHandler(
            this.ScreenHandler.switchScreens,
            this.MusicHandler.switchMusic
        );
        this.KeyboardHandler    = new KeyboardHandler(
            this.ScreenHandler.switchScreens,
            this.MusicHandler.switchMusic
        );
        this.DebugHandler       = new DebugHandler(
            this.MouseHandler.Mouse, 
            this.ScreenHandler.Screen
        );
    }
    
    draw(ctx){
        this.ScreenHandler.draw(ctx);
        this.DebugHandler.draw(ctx, this.ScreenHandler.Screen);
    }

    update(time){
        this.TimeHandler.update(time);
        this.ScreenHandler.update(this.TimeHandler.event);
        this.MouseHandler.mouseOverObject(this.ScreenHandler.Screen.menu);
    }
}
