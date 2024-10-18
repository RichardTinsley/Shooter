import { Game } from "./classes/Game.js"

export const TILE_SIZE = 32;
export const HALF_TILE_SIZE = TILE_SIZE / 2;
export const ENEMY_SIZE = 48;
export const TOWER_SIZE = 64;
export const COLUMNS = 40;
export const ROWS = 24;
export const GAME_WIDTH = TILE_SIZE * COLUMNS;
export const GAME_HEIGHT = TILE_SIZE * ROWS;

const game = new Game();

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
    ctx.imageSmoothingEnabled = false;
    
    let lastTime = 0;
    
    function animate(timeStamp){    
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;

        game.gameHandler(ctx, deltaTime, animate);  
    }
    requestAnimationFrame(animate);
});