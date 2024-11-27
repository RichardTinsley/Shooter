import { ANIMATION_STATES } from "../../constants/animations.js";
import { Text } from "./Text.js";

export class FadeText extends Text {
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

        this.align = "center";
        this.baseline = "middle";
        this.alpha = 0;
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
                this.oscillateAlpha();
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }
    
    oscillateAlpha(){
        this.alpha += this.delta;
        if (this.alpha <= -0.5 || this.alpha >= 2){
            this.delta = -this.delta;
        }
    }
}
