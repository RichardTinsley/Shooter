import { GAME_STATES, TIME_INTERVALS } from "./constants/constants.js";
import { context } from "./utilities/context.js";
import { LoadingScreen } from "./screens/LoadingScreen.js";
import { MenuScreen } from "./screens/MenuScreen.js";
import { BattleScreen } from "./screens/BattleScreen.js";
import { GameOverScreen } from "./screens/GameOverScreen.js";
import { UserInput } from "./UserInput.js"

export class Game{
    constructor(){
        this.screen = new LoadingScreen(this.switchScreens);
        this.ctx = context();

        this.userInput = new UserInput();

        window.addEventListener('click', () => {
            if(this.screen.entityHandler !== undefined){
                this.userInput.enemySelected(this.screen.entityHandler.enemies);
                this.userInput.towerSelected(this.screen.entityHandler.addTower, this.screen.battleScreenHud.hudElements)
            }
            this.userInput.menuScreenButtonSelected(this.switchScreens);
        });

        this.previousTime = 0;  
        this.eventTimer = 0;
        this.eventUpdate = false; 
        requestAnimationFrame(this.frame);
    }

    frame = (time) => {
        this.eventUpdater(time);
        this.screen.update(this.eventUpdate);
        this.screen.draw(this.ctx);
        requestAnimationFrame(this.frame);
    }
    
    switchScreens = (option) => {
        switch(option){
            case GAME_STATES.PLAYING:
                this.screen = new BattleScreen(this.userInput);
                break
            case GAME_STATES.GAMEOVER:
                this.screen = new GameOverScreen();
                break
            case GAME_STATES.MENU:
                this.screen = new MenuScreen(this.userInput)
                break
            case GAME_STATES.RESTART:
                this.screen = new BattleScreen(this.userInput);
                break
            case GAME_STATES.PAUSED:
                if(this.screen.currentGameState === GAME_STATES.PLAYING)
                    this.screen.currentGameState = GAME_STATES.PAUSED;
                else
                    this.screen.currentGameState = GAME_STATES.PLAYING;
                break
            case GAME_STATES.DEBUG:
                if(this.screen.currentGameState === GAME_STATES.PLAYING)
                    this.screen.currentGameState = GAME_STATES.DEBUG;
                else
                    this.screen.currentGameState = GAME_STATES.PLAYING;
            break
        }
    }

    eventUpdater(time){
        const deltaTime = time - this.previousTime;
        this.previousTime = time;

        if (this.eventTimer < TIME_INTERVALS.EVENT){
            this.eventTimer += deltaTime;
            this.eventUpdate = false;
        } else {
            this.eventTimer = 0;
            this.eventUpdate = true; 
        }
    }
}