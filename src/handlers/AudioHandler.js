import { GAME_STATES } from "../constants/game.js";
import { assets } from "./AssetHandler.js";

let isMusicPaused = false;
let music;

export class AudioHandler {
    constructor(){  

    }

    
    chooseMusic(option){
        switch(option){
            case GAME_STATES.MENU:
                music = assets.get("menuMusic");
                this.playMusic();
                break
            case GAME_STATES.RESTART:
                this.playMusic();
                break
            case GAME_STATES.PAUSED:
                this.pauseMusic();
                break
            case GAME_STATES.GAMEOVER:
                //PLAY THE DREAD STRING SOUND
                break
            case GAME_STATES.MUSIC:
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