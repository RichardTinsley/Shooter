import { Screen } from "./Screen.js";
import { Mouse } from "./Mouse.js";
import { Keyboard } from "./Keyboard.js";
import { Music } from "./Music.js";
import { Debug } from "./Debug.js";
import { Time } from "./Time.js";

export class Game{
    constructor(){
        this.Music       = new Music();
        this.Time        = new Time();
        this.Screen      = new Screen(this.Music.switchMusic);
        this.Mouse       = new Mouse(this.Screen.switchScreens);
        this.Debug       = new Debug(this.Mouse.Mouse);
        this.Keyboard    = new Keyboard(this.Screen.switchScreens, this.Debug.switchDebugMode);
    }
    
    draw(ctx){
        this.Screen.draw(ctx);
        this.Debug.draw(ctx, this.Screen.Screen);
    }

    update(time){
        this.Time.update(time);
        this.Screen.update(this.Time.event);
        this.Mouse.update(this.Screen.Screen);
    }
}
