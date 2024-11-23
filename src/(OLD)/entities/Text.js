import { TILE_SIZE_HALF, ANIMATION_STATES } from "../constants/constants.js";
import { randomPositiveOrNegativeNumber } from "../utilities/math.js";

export class Text {
    constructor({
        text,
        colour,
        position
    }){
        this.text = text;
        this.colour = colour;
        this.alpha = 10;
        this.position = position;
        this.textSize = 25;
        this.position.x += randomPositiveOrNegativeNumber(TILE_SIZE_HALF);
        this.movementSpeed = Math.random() * 1 + 0.7;
        this.state = ANIMATION_STATES.ANIMATING;
    }

    draw(ctx){
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                this.drawText(ctx);
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }

    update(event){
        if(!event) 
            return;
        switch(this.state){
            case ANIMATION_STATES.ANIMATING:
                this.updateText(); 
                break
            case ANIMATION_STATES.FINISHED:
                break
        }
    }
    
    drawText(ctx){
        ctx.fillStyle = `rgba(${this.colour} ${this.alpha})`;
        ctx.font = 'bold ' + this.textSize + 'px canterbury';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.lineWidth = 5;
        ctx.strokeStyle = `rgba(0, 0, 0, ${this.alpha})`;
        ctx.strokeText(this.text, this.position.x + 5, this.position.y - 3);
        ctx.fillText(this.text, this.position.x + 5, this.position.y - 3);
    }

    updateText(){
        this.alpha -= 0.6;
        this.position.y -= this.movementSpeed;
        
        if(this.alpha <= 0)
            this.state = ANIMATION_STATES.FINISHED;
    }
}