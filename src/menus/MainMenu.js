import { GAME_SIZES } from "../constants/game.js";
import { Menu } from "./Menu.js";
import { MAIN_MENU } from "../constants/menus.js";

const MENU_POSITION = {
    x: GAME_SIZES.GAME_WIDTH_HALF,
    y: GAME_SIZES.GAME_HEIGHT_HALF + 100,
} 
export class MainMenu extends Menu{
    constructor(){
        super();
        this.menuItems = this.initMenu(MAIN_MENU, MENU_POSITION);
    }
    draw(ctx){
        super.draw(ctx);
    }

    update(event){
        super.update(event);
    }
}
