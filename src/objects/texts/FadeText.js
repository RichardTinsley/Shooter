import * as OBJECTS from "../../constants/objects.js"
import { Text } from "../Text.js";

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

        this.alpha = 0;
        this.delta = 0.05;
    }

    draw(ctx){
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                super.draw(ctx);
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }

    update(event){
        super.update(event);
        switch(this.state){
            case OBJECTS.ANIMATION.ANIMATING:
                this.oscillateAlpha();
                break
            case OBJECTS.ANIMATION.FINISHED:
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
