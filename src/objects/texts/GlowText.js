import * as OBJECTS from "../../constants/objects.js"
import { Text } from "../Text.js";

export class GlowText extends Text {
    constructor({
        text,
        colour,
        position,
        size
    }){
        super({
            text, 
            colour, 
            position, 
            size
        });

        this.enabled = false;
        this.alpha = 1;
        this.delta = 0.05;
        this.textShadowBlur = 1;
    }

    draw(ctx){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                    ctx.shadowColor = "#d53";
                    ctx.shadowBlur = this.textShadowBlur;
                    super.draw(ctx);
                    ctx.shadowColor = 0;
                    ctx.shadowBlur = 0;
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }

    update(event){
        super.update(event);
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                this.oscillateTextShadow();
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }

    enable(value){
        this.enabled = value;

        if(this.enabled)
            this.textShadowBlur = 5;
        else
            this.textShadowBlur = 0;
        
    }

    oscillateTextShadow(){
        if(!this.enabled)
            return

        this.textShadowBlur += this.delta;
        if (this.textShadowBlur <= 1 || this.textShadowBlur >= 10)
            this.delta = -this.delta;
    }
}


