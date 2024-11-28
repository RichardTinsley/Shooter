import * as GAME from "../constants/game.js"
import { Menu } from "./Menu.js";
import * as INTERFACE from "../constants/interface.js"

const MENU_POSITION = {
    x: GAME.SIZES.GAME_WIDTH_HALF,
    y: GAME.SIZES.GAME_HEIGHT_HALF + 100,
} 
export class MainMenu extends Menu{
    constructor(){
        super();
        this.menuItems = this.initMenu(INTERFACE.MAIN_MENU, MENU_POSITION);
    }
    draw(ctx){
        super.draw(ctx);
    }

    update(event){
        super.update(event);
    }
}
