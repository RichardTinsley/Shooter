import { Levels } from "../handlers/Levels.js";
import { Objects } from "../handlers/Objects.js";

export class BattleScreen {
    constructor(){
        this.Levels = new Levels();
        this.Objects = new Objects(this.Levels.emptyTowerSpots);

        // this.menu = new Menu();
        
        // this.test = new MenuItemText({
        //     text: "TESt",
        //     colour: TEXT_COLOURS.RED,
        //     position: {
        //         x: 300,
        //         y: 200
        //     },
        //     size: 100,
        //     option: GAME_STATES.MAINMENU
        // })
        // this.menu.menuItems.push(this.test);
    }

    draw(ctx){
        this.Levels.draw(ctx);
        this.Objects.draw(ctx);
    }

    update(event){
        this.Objects.update(event);
    }
}