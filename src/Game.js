import { Scene } from "./handlers/Scene.js";
import { Mouse } from "./handlers/Mouse.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Debug } from "./handlers/Debug.js";
import { Time } from "./handlers/Time.js";

export class Game{
    constructor(){
        this.Time       = new Time();
        this.Scene      = new Scene();
        this.Mouse      = new Mouse(this.Scene.switchScreens);
        this.Debug      = new Debug(this.Mouse.Mouse);
        this.Keyboard   = new Keyboard(this.Scene.switchScreens, this.Debug.switchDebugMode);
    }
    
    draw(ctx){
        this.Scene.draw(ctx);
        this.Debug.draw(ctx, this.Scene.Screen);
    }

    update(time){
        this.Time.update(time);
        this.Scene.update(this.Time.event);
        this.Mouse.update(this.Scene.Screen);
    }
}
