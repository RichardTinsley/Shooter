import * as GAME from "../constants/game.js";

let previousTime = 0;  
let eventTimer = 0;
let totalRuntimeSeconds = 0;

export class Time{
    constructor(){
        this.event = false;
        this.startTime = performance.now();
    }
    
    update(time){
        this.eventUpdate(time)
    }

    eventUpdate(time){
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
        const totalSeconds = Math.floor((performance.now() - this.startTime) / GAME.TIME.SECOND); // +8000s for over 2 hours
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60) % 60;
        const hours = Math.floor((totalSeconds / 60) / 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        return hours + ':' + minutes + ':' + seconds;
    }
}
