import { GameHandler } from "./GameHandler.js";

export const TILE_SIZE = 32;
export const HALF_TILE_SIZE = TILE_SIZE / 2;
export const TOWER_SIZE = 64;
export const COLUMNS = 40;
export const ROWS = 24;
export const GAME_WIDTH = TILE_SIZE * COLUMNS;
export const GAME_HEIGHT = TILE_SIZE * ROWS;

window.addEventListener('load', function(){
    const gameHandler = new GameHandler();
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
    ctx.imageSmoothingEnabled = false;
    
    function animate(timeStamp){    
        gameHandler.gameHandler(ctx, timeStamp);  
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
});