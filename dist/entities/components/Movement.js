import { Level } from "../../handlers/Level.js";
import { Time } from "../../handlers/Time.js";
import { randomFloat } from "../../utilities/math.js";
export var DIRECTION;
(function (DIRECTION) {
    DIRECTION[DIRECTION["LEFT"] = -1] = "LEFT";
    DIRECTION[DIRECTION["RIGHT"] = 1] = "RIGHT";
})(DIRECTION || (DIRECTION = {}));
export class Movement {
    constructor() {
        this.waypoints = Level.getEnemyGeneratedWaypoints();
        this.waypointIndex = 1;
        this.priorityDistance = 0;
        this.delta = 0.15;
    }
    setAngle(position, destination) {
        const dy = destination.y - position.y;
        const dx = destination.x - position.x;
        this.angle = Math.atan2(dy, dx);
    }
    getDirection(angle) {
        if (angle < 1.57 && angle > -1.57)
            return DIRECTION.RIGHT;
        else
            return DIRECTION.LEFT;
    }
    updatePosition(position, angle, speed) {
        position.x += Math.cos(angle) * speed * Time.deltaTimeMultiplier;
        position.y += Math.sin(angle) * speed * Time.deltaTimeMultiplier;
    }
    getWaypoints() {
        return Object.assign({}, this.waypoints[this.waypointIndex]);
    }
    getPriorityDistance() {
        return this.priorityDistance;
    }
    setSpeed(speed) {
        this.speed = randomFloat(speed - speed * this.delta, speed + speed * this.delta);
    }
    setPriorityDistance(enemy) {
        const dx = enemy.destination.y - enemy.position.y;
        const dy = enemy.destination.x - enemy.position.x;
        this.priorityDistance = Math.round(Math.abs(dx) + Math.abs(dy));
    }
}
//# sourceMappingURL=Movement.js.map