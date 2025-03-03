import * as OBJECTS from "../constants/objects.js"
import * as INTERFACE from "../constants/interface.js"

export class Text {
    constructor({
        text,
        colour,
        position,
        size,
        align,
        baseline,
    }){
        this.text = text;
        this.colour = colour ?? INTERFACE.TEXT_COLOURS.WHITE;
        this.position = position;
        this.size = size ?? INTERFACE.SIZES.MENUITEMTEXT;
        
        this.align = align ?? "center";
        this.baseline = baseline ?? "middle";
        this.lineWidth = Math.floor(this.size / 6);
        this.alpha = 1;
        
        this.state = OBJECTS.ANIMATION.ANIMATING;
    }

    draw(ctx){
        ctx.beginPath(); 
        ctx.fillStyle = `rgba(${this.colour}${this.alpha})`;
        ctx.font = 'bold ' + this.size + 'px canterbury';
        ctx.textAlign = this.align;
        ctx.textBaseline = this.baseline;
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = `rgba(0, 0, 0, ${this.alpha})`;
        ctx.strokeText(this.text, this.position.x, this.position.y);
        ctx.fillText(this.text, this.position.x, this.position.y);
        ctx.closePath();
    }

    update(event){
        if(!event) 
            return;
    }
}
