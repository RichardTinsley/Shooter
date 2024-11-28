import * as GAME from "../constants/game.js";
import { TEXT_COLOURS } from "../constants/colours.js";
import { Screen } from "./Screen.js";
import { MainMenu } from "../menus/MainMenu.js";
import { GlowText } from "../objects/texts/GlowText.js";
import { assets } from "../utilities/assets.js";

export class MainMenuScreen extends Screen {
    constructor() {
        super();

        this.menu = new MainMenu();
        
        this.title = new GlowText({
            text: "Death   Sorcery",
            colour: TEXT_COLOURS.WHITE, 
            position: {
                x: GAME.SIZES.GAME_WIDTH_HALF,
                y: 170, 
            },
            size: 170,
        });

        this.title.enable(true);
    }

    draw(ctx){
        ctx.drawImage(assets.get('menuLogo'), 0, 0);
        super.draw(ctx);
    }

    update(event){
        super.update(event);
    }
}


