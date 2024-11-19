import { GAME_STATES, TIME_INTERVALS } from "./constants/constants.js";
import { context } from "./utilities/context.js";
import { LoadingScreen } from "./screens/LoadingScreen.js";
import { MenuScreen } from "./screens/MenuScreen.js";
import { BattleScreen } from "./screens/BattleScreen.js";
import { GameOverScreen } from "./screens/GameOverScreen.js";
import { UserInput } from "./UserInput.js"

let previousTime = 0;  
let eventTimer = 0;
let eventUpdate = false; 
const ctx = context();

export class Game{
    constructor(){
        this.screen = new LoadingScreen(this.switchScreens);
        this.userInput = new UserInput(this.switchScreens);

        window.addEventListener('click', () => { //SWWITCHBLOCK,  BRING GAME STATE UP HERE
            if(this.screen.entityHandler !== undefined){
                this.userInput.enemySelected(this.screen.entityHandler.enemies);
                this.userInput.towerSelected(this.screen.entityHandler.addTower, this.screen.battleScreenHud.hudElements)
            }
            this.userInput.menuScreenButtonSelected(this.switchScreens);
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