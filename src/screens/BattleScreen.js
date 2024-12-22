import { Screen } from "./Screen.js";
import { PlayerStats } from "../handlers/PlayerStats.js";
import { Levels } from "../handlers/Levels.js";
import { Objects } from "../handlers/Objects.js";
import { Wave } from "../handlers/Wave.js";

export class BattleScreen extends Screen {
    constructor(switchScreens, time){
        super();
        this.time = time;
        this.time.resetTimer();

        this.playerStats = new PlayerStats(switchScreens);
        this.levels = new Levels();
        this.objects = new Objects(this.levels.emptyTowerSpots);
        this.wave = new Wave();
    }

    draw(ctx){
        super.draw(ctx);
        this.levels.draw(ctx);
        this.objects.draw(ctx);
        this.playerStats.draw(ctx);
        this.wave.draw(ctx);
    }

    update(event){
        super.update(event);
        this.objects.update(event, this.playerStats);
        this.playerStats.update(event, this.time.displayTimer);
        this.wave.update(event, this.objects.enemies, this.playerStats);
    }
}