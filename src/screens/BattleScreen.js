import { Levels } from "../handlers/Levels.js";
import { Objects } from "../handlers/Objects.js";
import { Wave } from "../handlers/Wave.js";

export class BattleScreen {
    constructor(PlayerStats){
        this.PlayerStats = PlayerStats;
        this.Levels = new Levels();
        this.Objects = new Objects(this.Levels.emptyTowerSpots);
        this.Wave = new Wave();

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
        this.PlayerStats.draw(ctx);
        this.Wave.draw(ctx);
    }

    update(event){
        this.Objects.update(event);
        this.PlayerStats.update(event);
        this.Wave.update(event, this.Objects.enemies, this.PlayerStats.stats);
    }
}