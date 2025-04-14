import { checkCircleCollision } from "../utilities/collisionDetection.js";
import { drawCircleHitbox } from "../utilities/drawShapes.js";
export class HitDetectionCircle {
    constructor() {
        this.drawOffsetX = 0;
        this.drawOffsetY = 0;
    }
    setPosition(position) {
        this.position = position;
        return this;
    }
    setWidth(width) {
        this.radius = width / 2;
        return this;
    }
    checkCollision(cursor) {
        return checkCircleCollision(cursor, { x: this.position.x, y: this.position.y - this.drawOffsetY }, cursor.radius, this.radius);
    }
    drawHitbox(ctx) {
        drawCircleHitbox(ctx, { x: this.position.x, y: this.position.y - this.drawOffsetY }, this.radius);
    }
    setDrawOffsets(offsetX, offsetY) {
        this.drawOffsetX = offsetX;
        this.drawOffsetY = offsetY;
        return this;
    }
}
//# sourceMappingURL=HitDetectionCircle.js.map