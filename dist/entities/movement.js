import { Time } from "../handlers/Time.js";
import { randomFloat } from "../utilities/math.js";
var DIRECTION;
(function (DIRECTION) {
    DIRECTION[DIRECTION["LEFT"] = -1] = "LEFT";
    DIRECTION[DIRECTION["RIGHT"] = 1] = "RIGHT";
})(DIRECTION || (DIRECTION = {}));
export class Movement {
    constructor() {
        this.speed = 1;
    }
    move() {
        this.updateAngle();
        this.updateDirection();
        this.updateMovement();
    }
    updateAngle() {
        const dy = this.destination.y - this.position.y;
        const dx = this.destination.x - this.position.x;
        this.angle = Math.atan2(dy, dx);
    }
    updateDirection() {
        if (this.angle < 1.57 && this.angle > -1.57)
            this.direction = DIRECTION.RIGHT;
        else
            this.direction = DIRECTION.LEFT;
    }
    updateMovement() {
        this.position.x +=
            Math.cos(this.angle) * this.speed * Time.deltaTimeMultiplier;
        this.position.y +=
            Math.sin(this.angle) * this.speed * Time.deltaTimeMultiplier;
    }
    setSpeed(speed) {
        this.speed = randomFloat(speed - speed * 0.2, speed + speed * 0.2);
        return this;
    }
    setPosition(position) {
        this.position = position;
        return this;
    }
    setDestination(destination) {
        this.destination = Object.assign({}, destination);
        return this;
    }
    getDirection() {
        return this.direction;
    }
}
//# sourceMappingURL=movement.js.map