import * as GAME from "../constants/game.js";
import { Music } from "./Music.js";
import { LoadingScreen } from "../screens/LoadingScreen.js";
import { MainMenuScreen } from "../screens/MainMenuScreen.js";
import { BattleScreen } from "../screens/BattleScreen.js";
import { GameOverScreen } from "../screens/GameOverScreen.js";
import { PlayerStats } from "../interface/PlayerStats.js";

let isPaused = false;

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
        // if(!isPaused)
            // this.Screen = new PauseScreen(this.Screen.Objects, this.Screen.BattleHud);
        // else    
            // this.Screen = new BattleScreen(this.Screen)
        isPaused = !isPaused;
    }


}