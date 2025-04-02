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
export function drawDot(ctx, item, colour) {
    ctx.fillStyle = colour;
    ctx.fillRect(item.x - 2, item.y - 2, 4, 4);
}
export function drawCircleHitbox(ctx, item, drawDot) {
    ctx.beginPath();
    ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
    ctx.fillStyle = COLOURS.RED_ALPHA;
    ctx.fill();
    drawDot(ctx, item, COLOURS.RED);
}
export function drawSquareHitBox(ctx, item) {
    ctx.fillStyle = COLOURS.RED_ALPHA;
    ctx.fillRect(item.x, item.y, item.width, item.height);
}
export function drawEntityShadow(ctx, position, width) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(position.x, position.y);
    const radialGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, width / 2);
    radialGradient.addColorStop(0, COLOURS.SHADOW);
    radialGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = radialGradient;
    ctx.arc(0, 0, width, 0, 2 * Math.PI, false);
    ctx.transform(1, 0, 0, 0.3, 0, 0);
    ctx.fill();
    ctx.restore();
}
export function drawEllipse(ctx, position, height, width, fillStyle) {
    ctx.beginPath();
    ctx.ellipse(position.x, position.y, height, width, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = fillStyle;
    ctx.lineWidth = 3;
    ctx.strokeStyle = COLOURS.GREEN;
    ctx.fill();
    ctx.stroke();
}
export function drawMouseOverEntity(ctx, position, radius) {
    const radialGradient = ctx.createRadialGradient(position.x, position.y, radius - 10, position.x, position.y, radius / 4);
    radialGradient.addColorStop(0, "#00000000");
    radialGradient.addColorStop(1, COLOURS.SHADOW);
    ctx.beginPath();
    ctx.fillStyle = radialGradient;
    ctx.arc(position.x, position.y, radius - 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = COLOURS.TOWER_MODAL;
    ctx.stroke();
}
//# sourceMappingURL=drawShapes.js.map