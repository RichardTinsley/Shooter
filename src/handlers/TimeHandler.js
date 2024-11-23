import { TIME_INTERVALS } from "../constants/time.js";

let previousTime = 0;  
let eventTimer = 0;

export class TimeHandler{
    constructor(){
        this.event = false;
        this.totalRuntimeSeconds = 0;
    }
    
    eventUpdater(time){
        // console.log(Math.floor(performance.now() / TIME_INTERVALS.SECOND));
        this.totalRuntimeSeconds = Math.floor(time / TIME_INTERVALS.SECOND);
        
        const deltaTime = time - previousTime;
        const deltaTimeMultiplier = deltaTime / TIME_INTERVALS.FRAMES;

        previousTime = time;

        if (eventTimer < TIME_INTERVALS.FRAMES){
            eventTimer += deltaTime;
            this.event = false;
        } else {
            eventTimer = 0;
            this.event = true; 
        }
        return this.event;
    }
}
