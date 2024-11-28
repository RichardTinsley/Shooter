import * as GAME from "../constants/game.js"

export function context(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = GAME.SIZES.GAME_WIDTH;
    ctx.canvas.height = GAME.SIZES.GAME_HEIGHT;
    ctx.imageSmoothingEnabled = false;

    return ctx;
}