import { GAME_STATES } from "../constants/game.js";
import { MouseHandler } from "./MouseHandler.js";
import { KeyboardHandler } from "./KeyboardHandler.js";
import { MusicHandler } from "./MusicHandler.js";
import { DebugHandler } from "./DebugHandler.js";
import { LoadingScreen } from "../screens/LoadingScreen.js";
import { MainMenuScreen } from "../screens/MainMenuScreen.js";
import { GameOverScreen } from "../screens/GameOverScreen.js";

let isPaused = false;
let currentScreen = GAME_STATES.LOADING;

export class ScreenHandler {
    constructor(){
        this.MouseHandler       = new MouseHandler();
        this.KeyboardHandler    = new KeyboardHandler(this.switchScreens);
        this.MusicHandler       = new MusicHandler();
        this.DebugHandler       = new DebugHandler();
        this.Screen             = new LoadingScreen(this.switchScreens);
    }

    draw(ctx){
        this.Screen.draw(ctx);
        this.DebugHandler.drawDebugInfo(ctx, this.MouseHandler.mouse, this.Screen.menu);
    }

    update(event){
        this.Screen.update(event);
        this.MouseHandler.mouseOverEntity(this.Screen.menu);
    }

    switchScreens = (option) => {
        currentScreen = option;
        switch(option){
            case GAME_STATES.MAINMENU:
                this.Screen = new MainMenuScreen();
            case GAME_STATES.RESTART:
                // this.screen = new BattleScreen(this.inputHandler);
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