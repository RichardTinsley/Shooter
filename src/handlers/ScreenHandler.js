import { GAME_STATES } from "../constants/game.js";
import { LoadingScreen } from "../screens/LoadingScreen.js";
import { GameOverScreen } from "../screens/GameOverScreen.js";
import { MenuScreen } from "../screens/MenuScreen.js";
import { renderDebugInfo, renderPerformanceDebugInfo } from "../utilities/debug.js";
import { assets } from "./AssetHandler.js";

let isPaused = false;
let isMusicPaused = false;
let isDebugMode = true;
let currentScene = GAME_STATES.LOADING;
let music;

export class ScreenHandler {
    constructor(MouseHandler){
        this.MouseHandler = MouseHandler;
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
                this.playMusic();
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
                this.pauseMusic();
                break
            case GAME_STATES.DEBUG:
                isDebugMode = !isDebugMode;
                break
        }
    }

    drawDebugInfo(ctx, mouse){
        if(!isDebugMode) 
            return

        renderPerformanceDebugInfo(ctx, mouse);

        if(currentScene === GAME_STATES.BATTLE)
            renderDebugInfo(ctx)
    }

    playMusic(){
        music = assets.get("menuMusic");
        music.play();
        music.loop = true;
        music.volume = 0.05;
    }

    pauseGame(){
        if(!isPaused)
            this.Screen = new PauseScreen(this.Screen);
        else    
            this.Screen = new BattleScreen(this.Screen)
        isPaused = !isPaused;
    }

    pauseMusic(){
        if(!isMusicPaused)
            music.pause();
        else    
            music.play();
        isMusicPaused = !isMusicPaused;
    }
}