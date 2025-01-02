import * as INTERFACE from "../../constants/interface.js";
import { Screen } from "./Screen.js";

export class GameOverScreen extends Screen {
    constructor(screen) {
        super();
        this.screen = screen;
        this.initialiseOverlay("Game Over", INTERFACE.GAME_OVER_MENU);        
        this.title.enable(true);
    }

    draw(ctx){
        this.screen.draw(ctx);
        super.draw(ctx);
        this.drawOverlay(ctx, INTERFACE.COLOURS.REDOUT);
    }

    update(event){
        super.update(event);
    }
}