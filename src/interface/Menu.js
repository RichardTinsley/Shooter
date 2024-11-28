import { TEXT_COLOURS } from "../constants/colours.js";
import * as INTERFACE from "../constants/interface.js"
import { MenuItemText } from "./components/MenuItemText.js";

export class Menu{
    constructor(){
        this.menuItems = [];
    }
    draw(ctx){
        this.menuItems.forEach(menuItem => menuItem.draw(ctx));
    }

    update(event){
        this.menuItems.forEach(menuItem => menuItem.update(event));
    }

    initMenu(menuList, menuPosition){
        const newMenu = [];
        menuList.forEach((menuItem, index) => {
            const newMenuItemText = new MenuItemText({
                text: menuItem.text,
                colour: TEXT_COLOURS.WHITE,
                position: {
                    x: menuPosition.x,
                    y: menuPosition.y + (INTERFACE.SIZES.textSize + INTERFACE.SIZES.spacing) * index
                },
                size: INTERFACE.SIZES.textSize,
                option: menuItem.option
            });

            newMenu.push(newMenuItemText);
        });
        return newMenu;
    }
}
