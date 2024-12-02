import * as OBJECTS from "../../constants/objects.js"
import { Text } from "../Text.js";

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
        
        this.alpha = 10;
        this.delta = 0.6;
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
                this.moveAndFadeText();
                break
            case OBJECTS.ANIMATION.FINISHED:
                break
        }
    }
    
    moveAndFadeText(){
        this.alpha -= this.delta;
        this.position.y -= this.movementSpeed;
        
        if(this.alpha <= 0)
            this.state = OBJECTS.ANIMATION.FINISHED;
    }
}
