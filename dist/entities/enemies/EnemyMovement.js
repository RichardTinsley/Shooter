import { HUD } from "../../GUI/HUD/HUD.js";
import { Level } from "../../handlers/Level.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import { randomFloat } from "../../utilities/math.js";
import * as MOVEMENT from "../../utilities/entityMovement.js";
export class EnemyMovement {
    constructor() {
        this.waypoints = Level.getEnemyGeneratedWaypoints();
        this.waypointIndex = 0;
        this.priorityDistance = 0;
        this.position = Object.assign({}, this.waypoints[this.waypointIndex]);
        this.destination = Object.assign({}, this.waypoints[this.waypointIndex]);
        this.angle = MOVEMENT.setAngle(this.position, this.destination);
        this.direction = MOVEMENT.getDirection(this.angle);
    }
    update() {
        MOVEMENT.updatePosition(this.position, this.angle, this.speed);
        this.updatePriorityDistance();
    }
    checkWaypointArrival(updateComponents) {
        if (checkCircleCollision(this.position, this.destination, 5, 10)) {
            this.waypointIndex++;
            if (this.waypointIndex === this.waypoints.length) {
                HUD.hudLives.setLives();
                this.waypointIndex = 0;
                this.setPosition(this.waypoints[this.waypointIndex]);
                updateComponents(this.position);
            }
            this.setDestination(this.waypoints[this.waypointIndex]);
            this.angle = MOVEMENT.setAngle(this.position, this.destination);
            this.direction = MOVEMENT.getDirection(this.angle);
        }
    }
    updatePriorityDistance() {
        const dx = this.destination.y - this.position.y;
        const dy = this.destination.x - this.position.x;
        this.priorityDistance = Math.round(Math.abs(dx) + Math.abs(dy));
    }
    getPosition() {
        return this.position;
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
        return this;
    }
    setDestination(destination) {
        this.destination = Object.assign({}, destination);
        return this;
    }
    setSpeed(speed) {
        this.speed = randomFloat(speed - speed * 0.1, speed + speed * 0.1);
        return this;
    }
    getPriorityDistance() {
        return this.priorityDistance;
    }
    getDirection() {
        return this.direction;
    }
}
//# sourceMappingURL=EnemyMovement.js.map