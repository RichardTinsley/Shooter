import { GAME_SIZES } from "../constants/game.js";
import { assets } from "../utilities/assets.js";
import { drawText } from "../utilities/textRender.js";
import { MAIN_MENU, MENU_ITEM_TEMPLATE, MENU_POSITIONS } from "../constants/menus.js";

export class MainMenuScreen {
    constructor() {
        this.menu = [];
        this.initMenu();

    }

    draw(ctx){
        if(ctx.globalAlpha !== 1) 
            ctx.globalAlpha = 1;

        ctx.drawImage(assets.get('menuLogo'), 0, 0);

        drawText(
            ctx,
            "white",
            "Death   Sorcery",
            GAME_SIZES.GAME_WIDTH_HALF,
            90,
            170,
            "center",
            "top"
        )

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


