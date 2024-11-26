import { Scene } from "./Scene.js";
import { Mouse } from "./Mouse.js";
import { Keyboard } from "./Keyboard.js";
import { Debug } from "./Debug.js";
import { Time } from "./Time.js";

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
