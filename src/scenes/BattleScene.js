import * as GAME from "../constants/game.js";
import * as INTERFACE from "../constants/interface.js";
import { HUD } from "../handlers/HUD.js";
import { Levels } from "../handlers/Levels.js";
import { Objects } from "../handlers/Objects.js";
import { Wave } from "../handlers/Wave.js";
import { Scene } from "../handlers/Scene.js";

export class BattleScene extends Scene {
    constructor(switchScenes){
        super();
        this.hud = new HUD(switchScenes);
        this.levels = new Levels();
        this.objects = new Objects(this.levels.emptyTowerSpots);
        this.wave = new Wave();
    }

    draw(ctx){
        super.draw(ctx);
        this.levels.draw(ctx);
        this.hud.draw(ctx);
        this.objects.draw(ctx);
        this.wave.draw(ctx);
        switch(this.currentState){
            case GAME.STATES.PAUSED:
                this.drawOverlayScreen(ctx, INTERFACE.COLOURS.BLACKOUT);
                break
            case GAME.STATES.GAMEOVER:
                this.drawOverlayScreen(ctx, INTERFACE.COLOURS.REDOUT);
                break
        }

    }

    update(event){
        super.update(event);
        switch(this.currentState){
            case GAME.STATES.RESUME:
                this.objects.update(event);
                this.hud.update(event, this.currentState);
                this.wave.update(event, this.objects.enemies);
                break
            case GAME.STATES.PAUSED:
            case GAME.STATES.GAMEOVER:
                this.updateOverlayScreen();
                break
        }
    }
}