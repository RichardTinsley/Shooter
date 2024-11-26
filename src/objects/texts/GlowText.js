import { ANIMATION_STATES } from "../constants/constants.js";
import { Text } from "../Text.js";

export class GlowText extends Text {
    constructor({
        text,
        colour,
        position,
        size
    }){
        super(text, colour, position, size);
        // this.alpha = 10; //OVERRIDING
        this.delta = 0.3;
        this.textShadowBlur = 1;
    }

    draw(ctx){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                super.draw(ctx);
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
