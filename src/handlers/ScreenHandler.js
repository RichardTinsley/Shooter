import { GAME_STATES } from "../constants/game.js";
import { LoadingScreen } from "../screens/LoadingScreen.js";
import { MainMenuScreen } from "../screens/MainMenuScreen.js";
import { BattleScreen } from "../screens/BattleScreen.js";
import { GameOverScreen } from "../screens/GameOverScreen.js";

let isPaused = false;
let currentScreen = GAME_STATES.LOADING;

export class ScreenHandler {
    constructor(DebugHandler, MusicHandler){
        this.DebugHandler = DebugHandler;
        this.MusicHandler = MusicHandler
        this.Screen = new LoadingScreen(this.switchScreens);
    }

    draw(ctx){
        this.Screen.draw(ctx);
    }

    update(event){
        this.Screen.update(event);
    }

    switchScreens = (option) => {
        currentScreen = option;
        switch(option){
            case GAME_STATES.MAINMENU:
                this.Screen = new MainMenuScreen();
                break
            case GAME_STATES.RESTART:
            case GAME_STATES.BATTLE:
                this.Screen = new BattleScreen(this.DebugHandler.drawBattleDebugInfo);
                break
            case GAME_STATES.PAUSED:
                this.pauseGame();
                break
            case GAME_STATES.GAMEOVER:
                this.Screen = new GameOverScreen();
                break
            case GAME_STATES.MUSIC:
                this.MusicHandler.pauseMusic();
                break
            case GAME_STATES.DEBUG:
                this.DebugHandler.switchDebugMode();
                break
        }
        this.MusicHandler.chooseMusic(option);
    }

    pauseGame(){
        if(this.currentScreen !== GAME_STATES.BATTLE)
            return
        if(!isPaused)
            this.Screen = new PauseScreen(this.Screen);
        else    
            this.Screen = new BattleScreen(this.Screen)
        isPaused = !isPaused;
    }
}