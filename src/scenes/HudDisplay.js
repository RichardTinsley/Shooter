import { assets } from "../AssetLoader.js";
import { drawText } from "../utilities/textRender.js";

export class HudDisplay{
    constructor(){
        this.hudElements = {
            hearts: 2,
            coins: 100,
            exp: 0,
            waves: 1,
            timer: 0
        };

        this.lastTime = 0;
        this.eventTimer = 0;
        this.secondsTimer = 0;

        this.hudBackgroundImage = assets.get('hudBackgroundImage');
    }
    
    draw(ctx){
        ctx.drawImage(this.hudBackgroundImage, 0, 0);
        this.renderGUITexts(ctx);
    }
    
    update(event){
        this.timerUpdate(event);
    }

    timerUpdate(event){
        if (event){
            this.secondsTimer++;
        }
        if (this.secondsTimer >= 15){
            this.secondsTimer = 0;
            this.hudElements.timer++; 
        }
    }

    renderGUITexts(ctx){
        drawText(ctx, "white", this.hudElements.hearts, 70, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.coins, 230, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.exp, 520, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.waves, 810, 39, 20, 'left', 'top');
        drawText(ctx, "white", this.hudElements.timer, 1160, 39, 20, 'left', 'top');
    }
}