import { GAME_STATES, TIME_INTERVALS } from "./constants/constants.js";
import { context } from "./utilities/context.js";
import { LoadingScreen } from "./screens/LoadingScreen.js";
import { MenuScreen } from "./screens/MenuScreen.js";
import { BattleScreen } from "./screens/BattleScreen.js";
import { GameOverScreen } from "./screens/GameOverScreen.js";
import { PauseScreen } from "./screens/PauseScreen.js";
import { InputHandler } from "./InputHandler.js"

let previousTime = 0;  
let eventTimer = 0;
let eventUpdate = false; 
const ctx = context();

export class GameHandler{
    constructor(){
        this.GameState = GAME_STATES.MENU;
        this.resume = null;
        this.inputHandler = new InputHandler(this.onMouseClickSwitchScreens);
        this.screen = new LoadingScreen(this.onMouseClickSwitchScreens);
        window.addEventListener('click', () => this.onMouseClickListener() );
        
        requestAnimationFrame(this.frame);
    }
    
    frame = (time) => {
        this.eventUpdater(time);
        this.screen.update(eventUpdate);
        this.screen.draw(ctx);
        requestAnimationFrame(this.frame);
    }

    onMouseClickSwitchScreens = (option) => {
        this.GameState = option;
        switch(option){
            case GAME_STATES.PLAYING:
                this.screen = new BattleScreen(this.inputHandler, this.switchScreens);
                break
            case GAME_STATES.MENU:
                this.screen = new MenuScreen(this.inputHandler);
                break
            case GAME_STATES.RESTART:
                this.screen = new BattleScreen(this.inputHandler);
                break
            case GAME_STATES.PAUSED:
                if(!this.resume){
                    this.resume = this.screen;
                    this.screen = new PauseScreen(this.inputHandler, this.screen);
                }
                break
            case GAME_STATES.UNPAUSED:
                if(this.resume){
                    this.screen = this.resume;
                    this.resume = null;
                }
                break
            case GAME_STATES.DEBUG:
                this.screen.debugMode = !this.screen.debugMode;
            break
        }
    }

    switchScreens = (option) => {
        this.GameState = option;
        switch(option){
            case GAME_STATES.GAMEOVER:
                this.screen = new GameOverScreen(this.inputHandler, this.screen);
                break
        }
    }

    onMouseClickListener(){
        switch(this.GameState){
            case GAME_STATES.PLAYING:
                this.whilePlayingActions();
                break
            case GAME_STATES.DEBUG:
                this.whilePlayingActions();
                break
            case GAME_STATES.MENU:
                this.inputHandler.menuScreenButtonSelected(this.GameState);
                break
        }
    }

    eventUpdater(time){
        const deltaTime = time - previousTime;
        previousTime = time;

        if (eventTimer < TIME_INTERVALS.EVENT){
            eventTimer += deltaTime;
            eventUpdate = false;
        } else {
            eventTimer = 0;
            eventUpdate = true; 
        }
    }

    whilePlayingActions() {
        this.inputHandler.enemySelected(this.screen.entityHandler.enemies);
        this.inputHandler.towerSelected(
            this.screen.entityHandler.towers,
            this.screen.entityHandler.addText, 
            this.screen.battleScreenHud.hudElements
        );
    }
}