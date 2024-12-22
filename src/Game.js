import { Scene } from "./handlers/Scene.js";
import { Mouse } from "./handlers/Mouse.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Debug } from "./handlers/Debug.js";
import { Time } from "./handlers/Time.js";

export class Game{
    constructor(){
        this.time       = new Time();
        this.scene      = new Scene(this.time);
        this.mouse      = new Mouse(this.scene.switchScreens);
        this.debug      = new Debug();
        this.keyboard   = new Keyboard(this.scene.switchScreens, this.debug.switchDebugMode);
    }
    
    draw(ctx){
        this.scene.draw(ctx);
        this.debug.draw(ctx, this.scene.screen, this.mouse.mouse);
    }

    update(time){
        this.time.update(time);
        this.scene.update(this.time.event);
        this.mouse.update(this.scene.screen);
    }
}
