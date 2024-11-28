import * as GAME from "../constants/game.js";
import { assets } from "../utilities/assets.js";

let isMusicPaused = false;
let music;

export class Music {
    constructor(){  

    }
    
    switchMusic = (option) => {
        switch(option){
            case GAME.STATES.MAINMENU:
                music = assets.get("menuMusic");
                this.playMusic();
                break
            case GAME.STATES.RESTART:
                this.playMusic();
                break
            case GAME.STATES.PAUSED:
                this.pauseMusic();
                break
            case GAME.STATES.GAMEOVER:
                //PLAY THE DREAD STRING SOUND
                break
            case GAME.STATES.MUSIC:
                this.pauseMusic();
                break
        }
    }

    playMusic(){
        music.currentTime = 0;
        music.play();
        music.loop = true;
        music.volume = 0.05;
    }

    pauseMusic(){
        music.currentTime = 0;
        if(!isMusicPaused)
            music.pause();
        else    
            music.play();
        isMusicPaused = !isMusicPaused;
    }
}