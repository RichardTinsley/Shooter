import * as GAME from "../constants/game.js";
import * as INTERFACE from "../constants/interface.js";
import { MenuItemText } from "../components/MenuItemText.js";
import { Screen } from "./Screen.js";
import { GlowText } from "../objects/texts/GlowText.js";

export class PauseScreen extends Screen {
    constructor(Screen) {
        super();
        
        this.Screen = Screen
        this.title = new GlowText({
            text: "Game Paused",
            position: {
                x: GAME.SIZES.GAME_WIDTH_HALF,
                y: GAME.SIZES.GAME_HEIGHT_HALF - 100, 
            },
            size: INTERFACE.SIZES.TITLETEXT,
        });
        
        this.title.enable(true);
        this.menu = this.initialisePausedMenu();
    }

    draw(ctx){
        this.Screen.draw(ctx);
        this.drawScreenTransparency(ctx, INTERFACE.COLOURS.BLACKOUT);
        super.draw(ctx);
    }

    update(event){
        super.update(event);
    }

    initialisePausedMenu(){
        return INTERFACE.PAUSE_MENU.map((menuItem, index) => {
            return new MenuItemText({
                text: menuItem.text,
                position: {
                    x: INTERFACE.horizontallyAlignedMenu(index),
                    y: GAME.SIZES.GAME_HEIGHT_HALF + 100
                },
                size: INTERFACE.SIZES.MENUITEMTEXT,
                option: menuItem.option
            });
        });
    }
}