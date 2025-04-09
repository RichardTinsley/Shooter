import { checkCircleCollision } from "../utilities/collisionDetection.js";
import { drawCircleHitbox } from "../utilities/drawShapes.js";
export class CircleHitDetection {
    constructor() {
        this.hitCircle = {
            x: 0,
            y: 0,
            radius: 0,
        };
    }
    setPosition(position) {
        this.hitCircle.x = position.x;
        this.hitCircle.y = position.y;
        return this;
    }
    setWidth(width) {
        this.hitCircle.radius = width / 2;
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