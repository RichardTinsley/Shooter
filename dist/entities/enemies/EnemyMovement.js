import { EntityMovement, DIRECTION } from "../../handlers/EntityMovement.js";
import { HUD } from "../../handlers/HUD.js";
import { Level } from "../../handlers/Level.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
export class EnemyMovement {
    constructor() {
        this.waypointIndex = 1;
        this.priorityDistance = 0;
        this.movement = new EntityMovement();
        this.waypoints = Level.getEnemyGeneratedWaypoints();
        this.setPosition(this.waypoints[this.waypointIndex]);
        this.setDestination(this.waypoints[this.waypointIndex]);
    }
    checkWaypointArrival(setComponentPositions) {
        if (checkCircleCollision(this.position, this.destination, 5, 10)) {
            this.waypointIndex++;
            if (this.waypointIndex === this.waypoints.length) {
                HUD.hudLives.setLives();
                this.waypointIndex = 0;
                this.setPosition(this.waypoints[this.waypointIndex]);
                this.setDestination(this.waypoints[this.waypointIndex]);
                setComponentPositions();
            }
            this.setDestination(this.waypoints[this.waypointIndex]);
        }
    }
    updatePriorityDistance() {
        const yDistance = this.destination.y - this.position.y;
        const xDistance = this.destination.x - this.position.x;
        this.priorityDistance = Math.round(Math.abs(xDistance) + Math.abs(yDistance));
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
        this.movement.setSpeed(speed);
        return this;
    }
    getPriorityDistance() {
        return this.priorityDistance;
    }
    contextSave(ctx) {
        if (this.movement.getDirection() === DIRECTION.LEFT) {
            ctx.save();
            ctx.scale(this.movement.getDirection(), 1);
            this.position.x *= -1;
        }
    }
    contextRestore(ctx) {
        if (this.movement.getDirection() === DIRECTION.LEFT) {
            this.position.x *= -1;
            ctx.restore();
        }
    }
}
//# sourceMappingURL=EnemyMovement.js.map