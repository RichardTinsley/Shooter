import { checkCircleCollision } from "../utilities/collisionDetection.js";
import { drawCircleHitbox } from "../utilities/drawShapes.js";
export class CircleHitDetection {
    setHitCircle(position, width) {
        this.hitCircle = {
            x: position.x,
            y: position.y,
            radius: width / 2,
        };
        return this;
    }
    checkCollision(cursor) {
        return checkCircleCollision(cursor, this.hitCircle, cursor.radius, this.hitCircle.radius);
    }
    drawHitbox(ctx) {
        drawCircleHitbox(ctx, this.hitCircle);
    }
}
//# sourceMappingURL=CircleHitDetection.js.map