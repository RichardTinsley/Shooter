import { checkCircleCollision } from "../utilities/collisionDetection.js";
import { drawCircleHitbox } from "../utilities/drawShapes.js";
export class HitDetectionCircle {
    setPosition(position) {
        this.position = position;
        return this;
    }
    setWidth(width) {
        this.radius = width / 2;
        return this;
    }
    checkCollision(cursor) {
        return checkCircleCollision(cursor, this.position, cursor.radius, this.radius);
    }
    drawHitbox(ctx) {
        drawCircleHitbox(ctx, this.position, this.radius);
    }
}
//# sourceMappingURL=HitDetectionCircle.js.map