import * as GAME from "../constants/game.js";
import * as INTERFACE from "../constants/interface.js";
import { GlowText } from "../objects/texts/GlowText.js";
import { assets } from "../utilities/assets.js";
import { Scene } from "../handlers/Scene.js";

export class MainMenuScene extends Scene {
    constructor() {
        super();
        
        this.title = new GlowText({
            text: "Death   Sorcery",
            position: {
                x: GAME.SIZES.GAME_WIDTH_HALF,
                y: INTERFACE.SIZES.TITLETEXT, 
            },
            size: INTERFACE.SIZES.TITLETEXT,
        });
        
        this.title.enable(true);
        this.menu = this.initialiseVerticalMenu(INTERFACE.MAIN_MENU);
    }

    draw(ctx){
        ctx.drawImage(assets.get('menuLogo'), 0, 0);
        super.draw(ctx);
    }

    update(event){
        super.update(event);
    }
}



