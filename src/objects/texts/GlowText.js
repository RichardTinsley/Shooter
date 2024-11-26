import { ANIMATION_STATES } from "../../constants/animations.js";
import { Text } from "./Text.js";

export class GlowText extends Text {
    constructor({
        text,
        colour,
        position,
        size,
        align,
        baseline,
        alpha
    }){
        super({
            text, 
            colour, 
            position, 
            size, 
            align, 
            baseline,
            alpha
        });


        this.delta = 0.3;
        this.textShadowBlur = 1;
    }

    draw(ctx){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                    ctx.shadowColor = "#d53";
                    ctx.shadowBlur = this.textShadowBlur;
                    super.draw(ctx);
                    ctx.shadowColor = 0;
                    ctx.shadowBlur = 0;
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    update(event){
        super.update(event);
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                this.oscillateTextShadow();
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    oscillateTextShadow(){
        this.textShadowBlur += this.delta;
        if (this.textShadowBlur <= 1 || this.textShadowBlur >= 10)
            this.delta = -this.delta;
    }
}


