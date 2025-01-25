import * as OBJECTS from "../../constants/objects.js"
import * as INTERFACE from "../../constants/interface.js"
import { randomPositiveOrNegativeNumber } from "../../utilities/math.js";
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
        });
        this.size = size ?? INTERFACE.SIZES.GAMETEXT;

        this.lineWidth = 6;
        this.colour === INTERFACE.TEXT_COLOURS.GOLD ? this.offsetX = OBJECTS.SIZES.ENEMY / 2 : this.offsetX = OBJECTS.SIZES.TOWER / 2;
        this.colour === INTERFACE.TEXT_COLOURS.GOLD ? this.offsetY = OBJECTS.SIZES.ENEMY : this.offsetY = 0;

        this.position.x += randomPositiveOrNegativeNumber(this.offsetX);
        this.position.y -= this.offsetY;

        this.speed = Math.random() * 1 + 0.3;
        this.alpha = 10;
        this.delta = 0.3;
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
        this.position.y -= this.speed;
        
        if(this.alpha <= 0)
            this.state = OBJECTS.ANIMATION.FINISHED;
    }
}
