import { ANIMATION_STATES } from "../constants/constants.js";
import { Text } from "../Text.js";

export class FadeText extends Text {
    constructor({
        text,
        colour,
        position,
        size
    }){
        super(text, colour, position, size);

        this.alpha = 0; //OVERRIDING
        this.delta = 0.05;
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
                this.oscillatorAlpha();
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }
    
    oscillatorAlpha(){
        this.alpha += this.delta;
        if (this.alpha <= -0.5 || this.alpha >= 1.5){
            this.delta = -this.delta;
        }
    }
}
