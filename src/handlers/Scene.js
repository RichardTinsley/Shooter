import * as GAME from "../constants/game.js";
import { Music } from "./Music.js";
import { PlayerStats } from "./PlayerStats.js";
import { LoadingScreen } from "../screens/LoadingScreen.js";
import { MainMenuScreen } from "../screens/MainMenuScreen.js";
import { BattleScreen } from "../screens/BattleScreen.js";
import { GameOverScreen } from "../screens/GameOverScreen.js";
import { PauseScreen } from "../screens/PauseScreen.js";

let resume = null;

export class Scene {
    constructor(){
        this.PlayerStats;
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
                this.Screen = new MainMenuScreen();
                break
            case GAME.STATES.RESTART:
            case GAME.STATES.BATTLE:
                this.PlayerStats = new PlayerStats();
                this.Screen = new BattleScreen(this.PlayerStats);
                break
            case GAME.STATES.PAUSED:
                this.pauseGame();
                break
            case GAME.STATES.GAMEOVER:
                this.Screen = new GameOverScreen();
                break
        }
        this.Music.switchMusic(option);
    }

    pauseGame(){
        if(!this.Screen instanceof BattleScreen)
            return
        if(!resume){
            resume = this.Screen;
            this.Screen = new PauseScreen(this.Screen);
        }
        else {
            this.Screen = resume;
            resume = null;
        }  
    }
}