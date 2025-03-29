import { COLOURS } from "../constants/colours.js";
export function drawRectangle(ctx, position, length, height, fillStyle, strokeStyle = COLOURS.NONE) {
    if (strokeStyle !== COLOURS.NONE) {
        ctx.strokeStyle = strokeStyle;
        ctx.strokeRect(position.x, position.y, length, height);
    }
    if (fillStyle !== COLOURS.NONE) {
        ctx.fillStyle = fillStyle;
        ctx.fillRect(position.x, position.y, length, height);
    }
}
export function drawDashedCircle(ctx) {
    ctx.beginPath();
    ctx.setLineDash([5, 15]);
    ctx.lineWidth = 2;
    ctx.strokeStyle = COLOURS.WHITE;
    ctx.stroke();
    ctx.setLineDash([0, 0]);
    ctx.closePath();
}
export function drawShadow(ctx) {
    ctx.beginPath();
    ctx.fillStyle = COLOURS.SHADOW;
    ctx.fill();
}
//# sourceMappingURL=drawShapes.js.map