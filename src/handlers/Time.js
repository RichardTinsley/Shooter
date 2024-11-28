import * as GAME from "../constants/game.js";

let previousTime = 0;  
let eventTimer = 0;
let totalRuntimeSeconds = 0;

export class Time{
    constructor(){
        this.event = false;
        this.timerDisplay; 
    }
    
    update(time){
        this.eventUpdate(time)
        // this.timerUpdate();
    }

    eventUpdate(time){
        // console.log(Math.floor(performance.now() / GAME.TIME.SECOND));
        totalRuntimeSeconds = Math.floor(time / GAME.TIME.SECOND);

        const deltaTime = time - previousTime;
        // const deltaTimeMultiplier = deltaTime / GAME.TIME.FRAMES; FOR OBJECT MOVEMENT

        previousTime = time;

        if (eventTimer < GAME.TIME.FRAMES){
            eventTimer += deltaTime;
            this.event = false;
        } else {
            eventTimer = 0;
            this.event = true; 
        }
    }

    timerUpdate(){
        if(!this.event) 
            return;
        //OR EVENT... Seconds++
        const seconds = Math.floor(performance.now() / GAME.TIME.SECOND);
        const minutes = Math.floor(seconds / 60) % 60;
        const hours = Math.floor((seconds / 60) / 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        this.timerDisplay = hours + ':' + minutes + ':' + seconds;
    }
}
