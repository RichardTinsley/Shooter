import * as INTERFACE from "../constants/interface.js"
import { Menu } from "./Menu.js";

export class MainMenu extends Menu{
    constructor(){
        super();
        this.menuItems = this.initMenu(INTERFACE.MAIN_MENU, INTERFACE.MENU_POSITION);
    }
    draw(ctx){
        super.draw(ctx);
    }

    update(event){
        super.update(event);
    }
}
