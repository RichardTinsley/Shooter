import { GAME_WIDTH, GAME_HEIGHT } from "./Constants.js";
import { GameHandler } from "./GameHandler.js";

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