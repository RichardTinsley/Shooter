import { TEXT_COLOURS } from "../constants/colours.js";
import { Levels } from "../handlers/Levels.js";
import { Objects } from "../handlers/Objects.js";

import { MenuItemText } from "../menus/MenuItemText.js";
import { GAME_STATES } from "../constants/game.js";
import { Menu } from "../menus/Menu.js";
import { Enemy } from "../objects/Enemy.js";
import { assets } from "../utilities/assets.js";
import { OBJECT_COLOURS } from "../constants/objects.js";

export class BattleScreen {
    constructor(){
        this.Levels = new Levels();
        this.Objects = new Objects(this.Levels.emptyTowerSpots);

        this.menu = new Menu();
        
        this.test = new MenuItemText({
            text: "TESt",
            colour: TEXT_COLOURS.RED,
            position: {
                x: 300,
                y: 200
            },
            size: 100,
            option: GAME_STATES.MAINMENU
        })
        this.menu.menuItems.push(this.test);

        this.waypoints = [{x: 500, y: 500}];

        this.testEnemy = new Enemy({
            image: assets.get(OBJECT_COLOURS.TOPAZ),
            size: 48,
            position: {
                x: 400,
                y: 400
            },
            scale: 5,
            speed: 1,
            waypoints: this.waypoints
        })
    }

    draw(ctx){
        this.Levels.draw(ctx);
        this.Objects.draw(ctx);
        this.test.draw(ctx);
        this.testEnemy.draw(ctx);
    }

    update(event){
        this.Objects.update(event);
        this.test.update(event);
        this.testEnemy.update(event);
    }
}