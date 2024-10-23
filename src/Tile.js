import { TILE_SIZE } from "./Main.js";

export class PlacementTile {
    constructor({ 
        position = { 
            x: 0, 
            y: 0 
        } }) {
        this.position = position;
        this.size = TILE_SIZE;
        this.colour;
        this.occupied = false;
        this.mouseOver = false;
    }

    draw(ctx){
        if(this.mouseOver)
            this.colour = 'rgba(50, 255, 50, 0.15)';
        else
            this.colour = 'rgba(255, 255, 255, 0.15)';
        
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}