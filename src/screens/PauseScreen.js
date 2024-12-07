import * as INTERFACE from "../constants/interface.js";
import { Screen } from "./Screen.js";

export class PauseScreen extends Screen {
    constructor(Screen) {
        super();
        this.Screen = Screen;
        this.initialiseOverlay("Paused", INTERFACE.PAUSE_MENU);        
        this.title.enable(true);
    }

    draw(ctx){
        ctx.globalAlpha = 1;
        this.Screen.draw(ctx);
        this.drawOverlay(ctx, INTERFACE.COLOURS.BLACKOUT);
        super.draw(ctx);
    }

    update(event){
        super.update(event);
    }
}