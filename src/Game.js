import { TIME_INTERVALS } from "./constants/constants.js";
import { context } from "./utilities/context.js";
import { LoadingScene } from "./scenes/LoadingScene.js";
import { MenuScene } from "./scenes/MenuScene.js";
import { BattleScene } from "./scenes/BattleScene.js";
import { GameOver } from "./scenes/GameOver.js";

export class Game{
    constructor(){
        this.ctx = context();
        this.scene = new LoadingScene(this.switchToMenuScene);
        requestAnimationFrame(this.frame);

        this.previousTime = 0;  
        this.eventTimer = 0;
        this.eventUpdate = false;      
    }

    frame = (time) => {
        this.eventUpdater(time);
        
        this.scene.update(this.eventUpdate);
        this.scene.draw(this.ctx);
        
        requestAnimationFrame(this.frame);
    }
    
    switchToMenuScene = () => {
        this.scene = new MenuScene(this.switchToBattleScene);
    }

    switchToBattleScene = () => {
        this.scene = new BattleScene(this.switchToGameOverScene, this.switchToBattleScene);
    }

    switchToGameOverScene = () => {
        this.scene = new GameOver(this.switchToMenuScene, this.switchToBattleScene);
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