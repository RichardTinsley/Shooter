import { checkCircleCollision } from "../../utilities/collisionDetection.js";
export class HitDetectionCircle {
    constructor() {
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
        return checkCircleCollision(cursor, this.getPosition(), cursor.radius, this.radius);
    }
    getRadius() {
        return this.radius;
    }
    getPosition() {
        return { x: this.position.x, y: this.position.y - this.drawOffsetY };
    }
    setDrawOffsets(offsetY) {
        this.drawOffsetY = offsetY;
        return this;
    }
}
//# sourceMappingURL=HitDetectionCircle.js.map