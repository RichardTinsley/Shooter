import * as INTERFACE from "../../constants/interface.js";
import { Screen } from "./Screen.js";

export class PauseScreen extends Screen {
    constructor(screen) {
        super();
        this.screen = screen;
        this.initialiseOverlay("Paused", INTERFACE.PAUSE_MENU);        
        this.title.enable(true);
    }

    draw(ctx){
        this.screen.draw(ctx);
        super.draw(ctx);
        // ctx.globalAlpha = 1;
        this.drawOverlay(ctx, INTERFACE.COLOURS.BLACKOUT);
    }

    update(event){
        super.update(event);
    }
}