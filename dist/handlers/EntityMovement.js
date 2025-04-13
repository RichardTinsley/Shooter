import { Time } from "./Time.js";
import { randomFloat } from "../utilities/math.js";
export var DIRECTION;
(function (DIRECTION) {
    DIRECTION[DIRECTION["LEFT"] = -1] = "LEFT";
    DIRECTION[DIRECTION["RIGHT"] = 1] = "RIGHT";
})(DIRECTION || (DIRECTION = {}));
export class EntityMovement {
    constructor() {
        this.speed = 1;
    }
    move(position, destination) {
        this.updateAngle(position, destination);
        this.updateMovement(position);
        this.updateDirection();
    }
    updateAngle(position, destination) {
        const dy = destination.y - position.y;
        const dx = destination.x - position.x;
        this.angle = Math.atan2(dy, dx);
    }
    updateDirection() {
        if (this.angle < 1.57 && this.angle > -1.57)
            this.direction = DIRECTION.RIGHT;
        else
            this.direction = DIRECTION.LEFT;
    }
    updateMovement(position) {
        position.x += Math.cos(this.angle) * this.speed * Time.deltaTimeMultiplier;
        position.y += Math.sin(this.angle) * this.speed * Time.deltaTimeMultiplier;
    }
    setSpeed(speed) {
        this.speed = randomFloat(speed - speed * 0.2, speed + speed * 0.2);
        return this;
    }
    getDirection() {
        return this.direction;
    }
}
//# sourceMappingURL=EntityMovement.js.map