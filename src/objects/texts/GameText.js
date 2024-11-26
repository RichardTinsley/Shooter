import { ANIMATION_STATES } from "../../constants/animations.js";
import { Text } from "./Text.js";

export class GameText extends Text {
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
        this.alpha = 10;
        this.delta = 0.6;
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
                this.moveAndFadeText();
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }
    
    moveAndFadeText(){
        this.alpha -= this.delta;
        this.position.y -= this.movementSpeed;
        
        if(this.alpha <= 0)
            this.state = ANIMATION_STATES.FINISHED;
    }
}
