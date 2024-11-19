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