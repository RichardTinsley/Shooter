import { checkHitBoxCollision } from "../utilities/collisionDetection.js";
import { drawSquareHitBox } from "../utilities/drawShapes.js";
export class HitDetectionSquare {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setHitBox(position) {
        this.hitBox = {
            x: position.x - this.width / 2,
            y: position.y - this.height / 2,
            width: this.width,
            height: this.height,
        };
        return this;
    }
    checkCollision(cursor) {
        return checkHitBoxCollision(cursor, this.hitBox);
    }
    drawHitbox(ctx) {
        drawSquareHitBox(ctx, this.hitBox);
    }
}
//# sourceMappingURL=HitDetectionSquare.js.map