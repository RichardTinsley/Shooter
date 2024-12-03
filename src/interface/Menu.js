import * as INTERFACE from "../constants/interface.js"
import { MenuItemText } from "../components/MenuItemText.js";

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
                position: {
                    x: menuPosition.x,
                    y: menuPosition.y + (INTERFACE.SIZES.MENUITEMTEXT + INTERFACE.SIZES.SPACING) * index
                },
                size: INTERFACE.SIZES.MENUITEMTEXT,
                option: menuItem.option
            });

            newMenu.push(newMenuItemText);
        });
        return newMenu;
    }
}
