import { GAME_WIDTH, GAME_HEIGHT } from "./constants.js";

export function context(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = GAME_WIDTH;
    ctx.canvas.height = GAME_HEIGHT;
    ctx.imageSmoothingEnabled = false;

    return ctx;
}