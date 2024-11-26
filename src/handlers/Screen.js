import { GAME_STATES } from "../constants/game.js";
import { LoadingScreen } from "../screens/LoadingScreen.js";
import { MainMenuScreen } from "../screens/MainMenuScreen.js";
import { BattleScreen } from "../screens/BattleScreen.js";
import { GameOverScreen } from "../screens/GameOverScreen.js";

let isPaused = false;

export class Screen {
    constructor(switchMusic){
        this.Screen = new LoadingScreen(this.switchScreens, switchMusic);
    }

    draw(ctx){
        this.Screen.draw(ctx);
    }

    update(event){
        this.Screen.update(event);
        // IF screen instanceof Load.
        // if screen.load completed. this.switchscreens(Mainmenu)
    }

    switchScreens = (option) => {
        switch(option){
            case GAME_STATES.MAINMENU:
                this.Screen = new MainMenuScreen();
                break
            case GAME_STATES.RESTART:
            case GAME_STATES.BATTLE:
                this.Screen = new BattleScreen();
                break
            case GAME_STATES.PAUSED:
                this.pauseGame();
                break
            case GAME_STATES.GAMEOVER:
                this.Screen = new GameOverScreen();
                break
        }
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