import { TEXT_COLOURS } from "../constants/colours.js";
import { MENU_ITEM_SIZES } from "../constants/menus.js";
import { MenuItemText } from "./MenuItemText.js";

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
                    y: menuPosition.y + (MENU_ITEM_SIZES.size + MENU_ITEM_SIZES.spacing) * index
                },
                size: MENU_ITEM_SIZES.size,
                option: menuItem.option
            });

            newMenu.push(newMenuItemText);
        });
        return newMenu;
    }
}
