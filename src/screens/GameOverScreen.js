import * as GAME from "../constants/game.js";
import * as INTERFACE from "../constants/interface.js";
import { MenuItemText } from "../components/MenuItemText.js";
import { Screen } from "./Screen.js";
import { GlowText } from "../objects/texts/GlowText.js";

export class GameOverScreen extends Screen {
    constructor(Screen) {
        super();
        
        this.Screen = Screen;

        this.title = new GlowText({
            text: "Game OVER",
            position: {
                x: GAME.SIZES.GAME_WIDTH_HALF,
                y: GAME.SIZES.GAME_HEIGHT_HALF - 100, 
            },
            size: INTERFACE.SIZES.TITLETEXT,
        });
        
        this.title.enable(true);
        this.menu = this.initialiseGameOverMenu();
    }

    draw(ctx){
        this.Screen.draw(ctx);
        this.drawScreenTransparency(ctx, INTERFACE.COLOURS.REDOUT);
        this.title.draw(ctx);
        this.menu.forEach(menuItem => menuItem.draw(ctx));
    }

    update(event){
        super.update(event);
    }

    initialiseGameOverMenu(){
        return INTERFACE.GAME_OVER_MENU.map((menuItem, index) => {
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