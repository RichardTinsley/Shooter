import * as GAME from "../constants/game.js";
import { Music } from "./Music.js";
import { LoadingScreen } from "../screens/LoadingScreen.js";
import { MainMenuScreen } from "../screens/MainMenuScreen.js";
import { BattleScreen } from "../screens/BattleScreen.js";
import { GameOverScreen } from "../screens/GameOverScreen.js";
import { PauseScreen } from "../screens/PauseScreen.js";

export class Scene {
    constructor(){
        this.resume = null;
        this.Screen = new LoadingScreen(this.switchScreens);
        this.Music = new Music();
    }

    draw(ctx){
        this.Screen.draw(ctx);
    }

    update(event){
        this.Screen.update(event);
    }

    switchScreens = (option) => {
        switch(option){
            case GAME.STATES.MAINMENU:
                this.resume = null;
                this.Screen = new MainMenuScreen();
                break
            case GAME.STATES.RESTART:
            case GAME.STATES.BATTLE:
                this.Screen = new BattleScreen(this.switchScreens);
                break
            case GAME.STATES.RESUME:
            case GAME.STATES.PAUSED:
                this.pauseGame();
                break
            case GAME.STATES.GAMEOVER:
                this.Screen = new GameOverScreen(this.Screen);
                break
        }
        this.Music.switchMusic(option);
    }

    pauseGame(){
        if(this.Screen instanceof BattleScreen || this.Screen instanceof PauseScreen){
            if(!this.resume){
                this.resume = this.Screen;
                this.Screen = new PauseScreen(this.Screen);
            } else {
                this.Screen = this.resume;
                this.resume = null;
            }  
        }

    }
}