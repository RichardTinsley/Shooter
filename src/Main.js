import { GAME_WIDTH, GAME_HEIGHT } from "./Constants.js";
import { LoadingScene } from "./scenes/LoadingScene.js";
import { GameScene } from "./scenes/GameScene.js";

let scene = new LoadingScene(onLoadedComplete);

function onLoadedComplete() {
    scene = new GameScene();
    requestAnimationFrame(animationFrame);
}


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = GAME_WIDTH;
ctx.canvas.height = GAME_HEIGHT;
ctx.imageSmoothingEnabled = false;


function animationFrame(timeStamp){
    requestAnimationFrame(animationFrame);
    scene.gameHandler(ctx, timeStamp);
}

