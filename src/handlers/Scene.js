import * as GAME from "../constants/game.js";
import { Music } from "./Music.js";
import { LoadingScreen } from "../screens/LoadingScreen.js";
import { MainMenuScreen } from "../screens/MainMenuScreen.js";
import { BattleScreen } from "../screens/BattleScreen.js";
import { GameOverScreen } from "../screens/GameOverScreen.js";
import { PauseScreen } from "../screens/PauseScreen.js";

export class Scene {
    constructor(time){
        this.time = time;
        this.resume = null;
        this.screen = new LoadingScreen(this.switchScreens);
        this.music = new Music();
    }

    draw(ctx){
        this.screen.draw(ctx);
    }

    update(event){
        this.screen.update(event);
    }

    switchScreens = (option) => {
        switch(option){
            case GAME.STATES.MAINMENU:
                this.resume = null;
                this.screen = new MainMenuScreen();
                break
            case GAME.STATES.RESTART://RESTART SCREEN
            case GAME.STATES.BATTLE:
                this.screen = new BattleScreen(this.switchScreens, this.time);
                break
            case GAME.STATES.RESUME:
            case GAME.STATES.PAUSED:
                this.pauseGame();
                break
            case GAME.STATES.GAMEOVER:
                this.screen = new GameOverScreen(this.screen);
                break
        }
        this.music.switchMusic(option);
    }

    pauseGame(){
        if(this.screen instanceof BattleScreen || this.screen instanceof PauseScreen){
            if(!this.resume){
                this.resume = this.screen;
                this.time.pauseTimer();
                this.screen = new PauseScreen(this.screen);
            } else {
                this.screen = this.resume;
                this.time.startTimer();
                this.resume = null;
            }  
        }
    }
}