import { TILE_SIZE } from "./utilities/constants.js";
import { randomPositiveOrNegativeNumber } from "./utilities/math.js";

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
        this.position.x += randomPositiveOrNegativeNumber(TILE_SIZE);
        this.movementSpeed = Math.random() * 1 + 0.3;
    }
    update(){
        this.alpha -= 0.2;
        this.position.y -= this.movementSpeed;
    }

    draw(ctx){
        ctx.fillStyle = `rgba(${this.colour} ${this.alpha})`;
        ctx.font = 'bold ' + this.textSize + 'px canterbury';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.lineWidth = 5;
        ctx.strokeStyle = `rgba(0, 0, 0, ${this.alpha})`;
        ctx.strokeText(this.text, this.position.x + 5, this.position.y - 3);
        ctx.fillText(this.text, this.position.x + 5, this.position.y - 3);
    }
}