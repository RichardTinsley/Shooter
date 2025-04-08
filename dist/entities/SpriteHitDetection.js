import { checkCircleCollision } from "../utilities/collisionDetection.js";
import { drawCircleHitbox } from "../utilities/drawShapes.js";
export class SpriteHitDetection {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setHitCircle(position) {
        this.hitCircle.x = position.x;
        this.hitCircle.y = position.y - this.height / 2;
        this.hitCircle.radius = this.width / 2;
        return this;
    }
    checkCollision(cursor) {
        return checkCircleCollision(cursor, this.hitCircle, cursor.radius, this.hitCircle.radius);
    }
    drawHitbox(ctx) {
        drawCircleHitbox(ctx, this.hitCircle);
    }
    mouseOver(state) {
        return;
    }
}
//# sourceMappingURL=SpriteHitDetection.js.map