import { GAME_WIDTH, GAME_HEIGHT } from "./Constants.js";
import { LoadingScene } from "./scenes/LoadingScene.js";
import { MenuScene } from "./scenes/MenuScene.js";


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = GAME_WIDTH;
ctx.canvas.height = GAME_HEIGHT;
ctx.imageSmoothingEnabled = false;

let scene = new LoadingScene(onLoadedComplete);


function onLoadedComplete() {
    scene = new MenuScene(scene);
}


let lastTime = 0;

function gameLoop(AnimationFrame){

    const deltaTime = AnimationFrame - lastTime;
    lastTime = AnimationFrame;

    scene.update(deltaTime);
    scene.draw(ctx);
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);


