import { GAME_SIZES } from "../constants/game.js";
import { TEXT_COLOURS } from "../constants/colours.js";
import { assets } from "../utilities/assets.js";
import { drawText } from "../utilities/textRender.js";
import { GlowText } from "../objects/texts/GlowText.js";
import { MAIN_MENU, MENU_ITEM_TEMPLATE, MENU_POSITIONS } from "../constants/menus.js";

export class MainMenuScreen {
    constructor() {
        this.title = new GlowText({
            text: "Death   Sorcery",
            colour: TEXT_COLOURS.WHITE, 
            position: {
                x: GAME_SIZES.GAME_WIDTH_HALF,
                y: 250, 
            },
            size: 170,
            align: "center",
            baseline: "bottom",
            alpha: 1,
        });

        this.menu = [];
        this.initMenu();

    }

    draw(ctx){
        if(ctx.globalAlpha !== 1) 
            ctx.globalAlpha = 1;

        ctx.drawImage(assets.get('menuLogo'), 0, 0);
        this.title.draw(ctx);

        this.menu.forEach((menuItem) => {
            drawText(
                ctx,
                menuItem.colour,
                menuItem.name,
                menuItem.textPosition,
                menuItem.y,
                menuItem.height,
                "center",
                "top"
            )
        })
    }

    update(event){
        if(!event)
            return

        this.title.update(event);
        // this.userInput.menuScreenButtonsSelector(menuScreenButtons);
    }

    initMenu(){
        MAIN_MENU.forEach((menuItem, index) => {
            let newMenuItem = new Object();
            const width = menuItem.name.length * (MENU_ITEM_TEMPLATE.height / 1.75);
            newMenuItem = {...MENU_ITEM_TEMPLATE};
            newMenuItem.name = menuItem.name;
            newMenuItem.option = menuItem.option;
            newMenuItem.width = width;
            newMenuItem.x = GAME_SIZES.GAME_WIDTH_HALF - width / 2;
            newMenuItem.y = MENU_POSITIONS.MAIN_MENU + (MENU_ITEM_TEMPLATE.height + MENU_ITEM_TEMPLATE.space) * index;
            this.menu.push(newMenuItem);
        });
    }
}


