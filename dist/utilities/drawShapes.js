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
export function drawEntityShadow(ctx) {
    ctx.beginPath();
    ctx.fillStyle = COLOURS.SHADOW;
    ctx.fill();
}
export function drawCircleRadialGradient(ctx) {
    const radialGradient = ctx.createRadialGradient(200, 200, 50, 200, 200, 10);
    radialGradient.addColorStop(0, "tomato");
    radialGradient.addColorStop(1, "purple");
    ctx.fillStyle = radialGradient;
    ctx.beginPath();
    ctx.arc(250, 150, 80, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}
//# sourceMappingURL=drawShapes.js.map