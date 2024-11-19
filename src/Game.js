import { TIME_INTERVALS } from "./constants/constants.js";
import { context } from "./utilities/context.js";
import { LoadingScreen } from "./screens/LoadingScreen.js";
import { MenuScreen } from "./screens/MenuScreen.js";
import { BattleScreen } from "./screens/BattleScreen.js";
import { GameOverScreen } from "./screens/GameOverScreen.js";

export class Game{
    constructor(){
        this.ctx = context();
        this.screen = new LoadingScreen(this.switchToMenuScreen);
        requestAnimationFrame(this.frame);

        this.previousTime = 0;  
        this.eventTimer = 0;
        this.eventUpdate = false; 
    }

    frame = (time) => {
        this.eventUpdater(time);
        
        this.screen.update(this.eventUpdate);
        this.screen.draw(this.ctx);
        
        requestAnimationFrame(this.frame);
    }
    
    switchToMenuScreen = () => {
        this.screen = new MenuScreen(this.switchToBattleScreen);
    }

    switchToBattleScreen = () => {
        this.screen = new BattleScreen(this.switchToGameOverScreen, this.switchToBattleScreen);
    }

    switchToGameOverScreen = () => {
        this.screen = new GameOverScreen(this.switchToMenuScreen, this.switchToBattleScreen);
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