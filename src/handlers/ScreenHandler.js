import { GAME_STATES } from "../constants/game.js";
import { MouseHandler } from "./MouseHandler.js";
import { KeyboardHandler } from "./KeyboardHandler.js";
import { AudioHandler } from "./AudioHandler.js";
import { LoadingScreen } from "../screens/LoadingScreen.js";
import { MenuScreen } from "../screens/MenuScreen.js";
import { GameOverScreen } from "../screens/GameOverScreen.js";
import { renderDebugInfo, renderPerformanceDebugInfo } from "../utilities/debug.js";

let isPaused = false;
let isDebugMode = true;
let currentScene = GAME_STATES.LOADING;

export class ScreenHandler {
    constructor(){
        this.MouseHandler = new MouseHandler();
        this.KeyboardHandler = new KeyboardHandler(this.switchScreens);
        this.AudioHandler = new AudioHandler();
        this.Screen = new LoadingScreen(this.switchScreens);
    }

    draw(ctx){
        this.Screen.draw(ctx);
        this.drawDebugInfo(ctx, this.MouseHandler.mouse);
    }

    update(event){
        this.Screen.update(event);
    }

    switchScreens = (option) => {
        currentScene = option;
        switch(option){
            case GAME_STATES.MENU:
                this.Screen = new MenuScreen();
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
                break
            case GAME_STATES.DEBUG:
                isDebugMode = !isDebugMode;
                break
        }
        this.AudioHandler.chooseMusic(option);
    }

    drawDebugInfo(ctx, mouse){
        if(!isDebugMode) 
            return

        renderPerformanceDebugInfo(ctx, mouse);

        if(currentScene === GAME_STATES.BATTLE)
            renderDebugInfo(ctx);
    }

    pauseGame(){
        if(this.currentScene !== GAME_STATES.BATTLE)
            return
        if(!isPaused)
            this.Screen = new PauseScreen(this.Screen);
        else    
            this.Screen = new BattleScreen(this.Screen)
        isPaused = !isPaused;
    }
}