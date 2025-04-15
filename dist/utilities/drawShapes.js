import { COLOURS } from "../constants/colours.js";
export function drawRectangle(ctx, position, length, height, fillStyle, strokeStyle = COLOURS.NONE) {
    if (fillStyle !== COLOURS.NONE) {
        ctx.fillStyle = fillStyle;
        ctx.fillRect(position.x, position.y, length, height);
    }
    if (strokeStyle !== COLOURS.NONE) {
        ctx.strokeStyle = strokeStyle;
        ctx.strokeRect(position.x, position.y, length, height);
    }
}
export function drawDot(ctx, position, colour) {
    ctx.fillStyle = colour;
    ctx.fillRect(position.x - 2, position.y - 2, 4, 4);
}
export function drawCircleHitbox(ctx, position, radius) {
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = COLOURS.RED_ALPHA;
    ctx.fill();
    drawDot(ctx, position, COLOURS.RED);
}
export function drawSquareHitBox(ctx, item) {
    ctx.fillStyle = COLOURS.RED_ALPHA;
    ctx.fillRect(item.x, item.y, item.width, item.height);
}
export function drawShadow(ctx, position, width) {
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
export function drawMouseOverTower(ctx, position, radius) {
    radius /= 2;
    ctx.save();
    ctx.beginPath();
    ctx.translate(position.x, position.y);
    ctx.transform(1, 0, 0, 0.3, 0, 0);
    const radialGradient = ctx.createRadialGradient(0, 0, radius - 20, 0, 0, radius);
    radialGradient.addColorStop(0.2, `${COLOURS.TOWER_MODAL_TRANSPARENT}`);
    radialGradient.addColorStop(0.6, `${COLOURS.TOWER_MODAL}`);
    radialGradient.addColorStop(1, `${COLOURS.TOWER_MODAL_TRANSPARENT}`);
    ctx.fillStyle = radialGradient;
    ctx.arc(0, 0, radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.restore();
}
export function drawMouseOverEnemy(ctx, position, radius) {
    radius /= 2;
    let c = 2 * Math.PI * radius;
    ctx.lineWidth = 8;
    ctx.save();
    ctx.beginPath();
    ctx.translate(position.x, position.y);
    ctx.transform(1, 0, 0, 0.3, 0, 0);
    ctx.arc(0, 0, radius, Math.PI / 8, 2 * Math.PI, false);
    ctx.setLineDash([c / 8, c / 8]);
    ctx.strokeStyle = COLOURS.RED;
    ctx.stroke();
    ctx.restore();
}
//# sourceMappingURL=drawShapes.js.map