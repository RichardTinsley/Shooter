import { TILE_SIZE, COLUMNS, ROWS } from "../index.js";

export class World {
    constructor(game){
        this.game = game;
        this.backgroundLayer = document.getElementById('LEVEL1') // image.src = new Image() doesn't reload image from broswer memory
    }

    drawGrid(ctx){
        for (let row = 0; row < ROWS; row++)
            for (let column = 0; column < COLUMNS; column++)
                ctx.strokeRect(
                    column * TILE_SIZE,
                    row * TILE_SIZE,
                    TILE_SIZE,
                    TILE_SIZE
                );   
    }

    drawBackground(ctx){
        ctx.drawImage(this.backgroundLayer, 0, 0);
        if(this.game.debug) 
            this.drawGrid(ctx);
    }
}

export const waypoints = [
    {
        "x":-100,
        "y":685
    }, 
    {
        "x":205,
        "y":685
    }, 
    {
        "x":205,
        "y":175
    }, 
    {
        "x":815,
        "y":175
    }, 
    {
        "x":815,
        "y":435
    }, 
    {
        "x":555,
        "y":435
    }, 
    {
        "x":555,
        "y":685
    }, 
    {
        "x":1135,
        "y":685
    }, 
    {
        "x":1135,
        "y":175
    }, 
    {
        "x":1350,
        "y":175
    }
]
