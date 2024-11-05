import { GAME_WIDTH, GAME_HEIGHT } from "../Constants.js";

export function drawBigScreenTexts(ctx, text, screenFill){
    if(screenFill){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    }
    ctx.fillStyle = 'white';
    ctx.font = 'bold ' + 150 + 'px canterbury';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'black';
    ctx.strokeText(text, GAME_WIDTH / 2, GAME_HEIGHT / 2);
    ctx.fillText(text, GAME_WIDTH / 2, GAME_HEIGHT / 2);
}

export function drawText(ctx, colour, text, x, y, textSize, align, baseline){
    ctx.fillStyle = colour;
    ctx.font = 'bold ' + textSize + 'px canterbury';
    ctx.textAlign = align;
    ctx.textBaseline = baseline;
    ctx.lineWidth = textSize / 6;
    ctx.strokeStyle = 'black';
    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
}