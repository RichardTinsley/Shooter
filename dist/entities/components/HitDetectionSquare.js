import { checkHitBoxCollision } from "../../utilities/collisionDetection.js";
export class HitDetectionSquare {
    setHitBox(position, width, height) {
        this.hitBox = {
            x: position.x - width / 2,
            y: position.y - height / 2,
            width: width,
            height: height,
        };
        return this;
    }
    getHitBox() {
        return this.hitBox;
    }
    checkCollision(cursor) {
        return checkHitBoxCollision(cursor, this.hitBox);
    }
}
//# sourceMappingURL=HitDetectionSquare.js.map