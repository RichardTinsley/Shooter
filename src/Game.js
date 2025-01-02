import * as GAME from "./constants/game.js";
import * as INTERFACE from "./constants/interface.js";
import { Time } from "./handlers/Time.js";
import { Music } from "./handlers/Music.js";
import { Mouse } from "./handlers/Mouse.js";
import { Keyboard } from "./handlers/Keyboard.js";
import { Debug } from "./handlers/Debug.js";

import { LoadingScene } from "./scenes/LoadingScene.js";
import { MainMenuScene } from "./scenes/MainMenuScene.js";
import { BattleScene } from "./scenes/BattleScene.js";

export class Game{
    constructor(){
        this.time       = new Time();
        this.music      = new Music();
        this.scene      = new LoadingScene(this.switchScenes);
        this.mouse      = new Mouse(this.switchScenes);
        this.debug      = new Debug();
        this.keyboard   = new Keyboard(this.switchScenes, this.debug.switchDebugMode);
    }
    
    draw(ctx){
        this.scene.draw(ctx);
        this.debug.draw(ctx, this.scene, this.mouse.mouse);
    }

    update(time){
        this.time.update(time);
        this.scene.update(this.time.event, this.time.displayTimer);
        this.mouse.update(this.scene);
    }

    switchScenes = (option) => {
        switch(option){
            case GAME.STATES.MAINMENU:
                this.scene = new MainMenuScene();
                break
            case GAME.STATES.RESTART:
            case GAME.STATES.BATTLE:
                this.time.resetTimer();
                this.scene = new BattleScene(this.switchScenes);
                break
            case GAME.STATES.RESUME:
            case GAME.STATES.PAUSED:
            case GAME.STATES.GAMEOVER:
                this.switchSceneState(option);
                break
        }
        this.music.switchMusic(option);
    }

    switchSceneState(option){
        if(!(this.scene instanceof BattleScene))
            return

        if(this.scene.getCurrentState() === GAME.STATES.PAUSED && option === GAME.STATES.PAUSED)
            option = GAME.STATES.RESUME;

        this.scene.setSceneReset();
        switch(option){
            case GAME.STATES.RESUME:
                this.time.startTimer();
                this.scene.setCurrentState(GAME.STATES.RESUME);
                break
            case GAME.STATES.PAUSED:
                this.time.pauseTimer();
                this.scene.setCurrentState(GAME.STATES.PAUSED);
                this.scene.initialiseOverlayScreen("Paused", INTERFACE.PAUSE_MENU);    
                break
            case GAME.STATES.GAMEOVER:
                this.time.pauseTimer();
                this.scene.setCurrentState(GAME.STATES.GAMEOVER);
                this.scene.initialiseOverlayScreen("Game Over", INTERFACE.GAME_OVER_MENU);    
                break
        }
    }
}
