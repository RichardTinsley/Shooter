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
        this.inputHandler = new InputHandler(this.switchScreens);
        this.screen = new LoadingScreen(this.switchScreens);
        this.GameState = GAME_STATES.PLAYING;
        this.resume;

        window.addEventListener('click', () => { //SWWITCHBLOCK,  BRING GAME STATE UP HERE
            if(this.screen.entityHandler !== undefined){
                this.inputHandler.enemySelected(this.screen.entityHandler.enemies);
                this.inputHandler.towerSelected(this.screen.entityHandler.addTower, this.screen.battleScreenHud.hudElements)
            }
            this.inputHandler.menuScreenButtonSelected(this.switchScreens);
        });

        requestAnimationFrame(this.frame);
    }

    frame = (time) => {
        this.eventUpdater(time);
        this.screen.update(eventUpdate);
        this.screen.draw(ctx);
        requestAnimationFrame(this.frame);
    }
    
    switchScreens = (option) => {
        switch(option){
            case GAME_STATES.PLAYING:
                this.screen = new BattleScreen(this.inputHandler);
                break
            case GAME_STATES.GAMEOVER:
                this.screen = new GameOverScreen();
                break
            case GAME_STATES.MENU:
                this.screen = new MenuScreen(this.inputHandler)
                break
            case GAME_STATES.RESTART:
                this.screen = new BattleScreen(this.inputHandler);
                break
            case GAME_STATES.PAUSED:
                this.resume = this.screen;
                this.screen = new PauseScreen(this.inputHandler, this.screen);
                break
            case GAME_STATES.UNPAUSED:
                this.screen = this.resume;
                this.resume = null;
                break
            case GAME_STATES.DEBUG:
                this.screen.debugMode = !this.screen.debugMode;
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
}