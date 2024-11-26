import { ANIMATION_STATES } from "../constants/constants.js";

export class Text {
    constructor({
        text,
        colour,
        position,
        size
    }){
        this.text = text;
        this.colour = colour;
        this.position = position;
        this.size = size;
        
        this.alpha = 1;
        this.state = ANIMATION_STATES.ANIMATING;
        this.lineWidth = Math.floor(this.size / 6);
    }

    draw(ctx){
        ctx.fillStyle = `rgba(${this.colour} ${this.alpha})`;
        ctx.font = 'bold ' + this.size + 'px canterbury';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = `rgba(0, 0, 0, ${this.alpha})`;
        ctx.strokeText(this.text, this.position.x + 5, this.position.y - 3); //FIX THESE NUMBERS
        ctx.fillText(this.text, this.position.x + 5, this.position.y - 3); //FIX THESE NUMBERS
    }

    update(event){
        if(!event) 
            return;
    }
}
