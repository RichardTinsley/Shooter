import * as GAME from "../constants/game.js";

let previousTime = 0;  
let eventTimer = 0;
let totalSeconds;
let timeout;
let deltaTimeMultiplier;

export class Time{
    constructor(){
        this.event = false;
        window.addEventListener('visibilitychange', () => this.visibilityStateTimer());
    }
    
    update(time){
        this.eventUpdate(time);
    }

    eventUpdate(time){
        const deltaTime = time - previousTime;
        deltaTimeMultiplier = deltaTime / GAME.TIME.FRAMES; // FOR OBJECT MOVEMENT
        previousTime = time;

        if (eventTimer < GAME.TIME.FRAMES){
            eventTimer += deltaTime;
            this.event = false;
        } else {
            eventTimer = 0;
            this.event = true; 
        }
    }

    displayTimer(){
        let seconds = totalSeconds % 60; 
        let minutes = Math.floor(totalSeconds / 60) % 60;
        let hours   = Math.floor(totalSeconds / 60 / 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        return hours + ':' + minutes + ':' + seconds;
    }

    visibilityStateTimer(){
        if(document.visibilityState === 'visible')
            this.startTimer();
        else if(document.visibilityState === 'hidden')
            this.pauseTimer();
    }

    startTimer(){
        timeout = setInterval(()=>{
                totalSeconds++;
        }, 1000);
    }

    pauseTimer(){
        clearInterval(timeout);
    }

    resetTimer(){
        totalSeconds = 0;
        clearInterval(timeout);
        this.startTimer();
        // totalSeconds = 8000; //+8000s for over 2 hours
    }

    
}
