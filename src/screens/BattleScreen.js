import { Screen } from "./Screen.js";
import { Levels } from "../handlers/Levels.js";
import { Objects } from "../handlers/Objects.js";
import { Wave } from "../handlers/Wave.js";

export class BattleScreen extends Screen {
    constructor(PlayerStats){
        super();
        this.PlayerStats = PlayerStats;
        this.Levels = new Levels();
        this.Objects = new Objects(this.Levels.emptyTowerSpots);
        this.Wave = new Wave();
    }

    draw(ctx){
        super.draw(ctx);
        this.Levels.draw(ctx);
        this.Objects.draw(ctx);
        this.PlayerStats.draw(ctx);
        this.Wave.draw(ctx);
    }

    update(event){
        super.update(event);
        this.Objects.update(event, this.PlayerStats);
        this.PlayerStats.update(event);
        this.Wave.update(event, this.Objects.enemies, this.PlayerStats);
    }
}