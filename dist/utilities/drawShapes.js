export function drawRectangle(ctx, position, length, height, lineWidth, fillColour, strokeColour = "") {
    if (strokeColour !== "") {
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeColour;
        ctx.strokeRect(position.x, position.y, length, height);
    }
    ctx.fillStyle = fillColour;
    ctx.fillRect(position.x, position.y, length, height);
}
//# sourceMappingURL=drawShapes.js.map