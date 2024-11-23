import { assets } from "../AssetLoader.js";
import { drawText } from "../utilities/textRender.js";

export class BattleScreenHud{
    constructor(){
        this.hudElements = {
            hearts: 2, //LIVES
            coins: 100,
            exp: 0,
            waves: 1,
            timer: 0
        };

        this.hudBackgroundImage = assets.get('hudBackgroundImage');
    }
    
    draw(ctx){
        ctx.drawImage(this.hudBackgroundImage, 0, 0);
        this.renderHudElements(ctx);
    }
    
    update(event){
        this.timerDisplay(event);
    }

    timerDisplay(event){
        if(!event) 
            return;
        //OR EVENT... Seconds++
        const seconds = Math.floor(performance.now() / TIME_INTERVALS.SECOND);
        const minutes = Math.floor(seconds / 60) % 60;
        const hours = Math.floor((seconds / 60) / 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        this.hudElements.timer = hours + ':' + minutes + ':' + seconds;
    }

    addCoins = () => {
        const coins = Math.floor(Math.random() * this.hudElements.waves + 1);
        this.hudElements.coins += coins;
        return '$' + coins
    }

    addExperience = () => {
        if (Math.random() * 10 > 1)
            return 0

        const experience = Math.floor(Math.random() * this.hudElements.waves + 1);
        this.hudElements.exp += experience;
        return experience + 'exp'
    }

    renderHudElements(ctx){
        drawText(ctx, "white", this.hudElements.hearts, 70, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.coins, 230, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.exp, 520, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.waves, 810, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.timer, 1160, 39, 20, 'left', 'top');
    }
}