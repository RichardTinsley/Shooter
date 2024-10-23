import { GameHandler } from "./GameHandler.js";
import { TILE_SIZE } from "./Tile.js";

export const COLUMNS = 40;
export const ROWS = 24;
export const GAME_WIDTH = TILE_SIZE * COLUMNS;
export const GAME_HEIGHT = TILE_SIZE * ROWS;

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
    ctx.imageSmoothingEnabled = false;
    
    const gameHandler = new GameHandler();
    function animate(timeStamp){    
        gameHandler.gameHandler(ctx, timeStamp);  
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
});