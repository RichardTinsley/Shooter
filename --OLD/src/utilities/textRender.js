export function drawText(ctx, colour, text, x, y, textSize, align, baseline){
    const lineWidth = Math.floor(textSize / 6);
    ctx.fillStyle = colour;
    ctx.font = 'bold ' + textSize + 'px canterbury';
    ctx.textAlign = align;
    ctx.textBaseline = baseline;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = 'black';
    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
}