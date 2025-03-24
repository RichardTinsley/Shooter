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
//# sourceMappingURL=drawShapes.js.map