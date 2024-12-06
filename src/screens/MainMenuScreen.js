import * as GAME from "../constants/game.js";
import * as INTERFACE from "../constants/interface.js";
import { MenuItemText } from "../components/MenuItemText.js";
import { Screen } from "./Screen.js";
import { GlowText } from "../objects/texts/GlowText.js";
import { assets } from "../utilities/assets.js";

export class MainMenuScreen extends Screen {
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
        this.menu = this.initialiseMainMenu();
    }

    draw(ctx){
        ctx.drawImage(assets.get('menuLogo'), 0, 0);
        super.draw(ctx);
    }

    update(event){
        super.update(event);
    }

    initialiseMainMenu(){
        return INTERFACE.MAIN_MENU.map((menuItem, index) => {
            return new MenuItemText({
                text: menuItem.text,
                position: {
                    x: GAME.SIZES.GAME_WIDTH_HALF,
                    y: INTERFACE.verticallyAlignedMenu(GAME.SIZES.GAME_HEIGHT_HALF + 100, index)
                },
                size: INTERFACE.SIZES.MENUITEMTEXT,
                option: menuItem.option
            });
        });
    }
}



