import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import { HUD } from "../../handlers/HUD.js";
import { EntityMovement, DIRECTION } from "../../handlers/EntityMovement.js";
import { Level } from "../../handlers/Level.js";
export class EnemyMovement {
    constructor() {
        this.waypointIndex = 0;
        this.priorityDistance = 0;
        this.movement = new EntityMovement();
        this.waypoints = Level.getEnemyGeneratedWaypoints();
        this.position = Object.assign({}, this.waypoints[1]);
        this.destination = Object.assign({}, this.waypoints[1]);
    }
    update() {
        this.checkWaypointArrival();
        this.movement.move(this.position, this.destination);
    }
    checkWaypointArrival() {
        if (checkCircleCollision(this.position, this.destination, 5, 10)) {
            this.setDestination(this.waypoints[(this.waypointIndex += 1)]);
            if (this.waypointIndex === this.waypoints.length) {
                HUD.hudLives.setLives();
                this.waypointIndex = 0;
                this.setDestination(this.waypoints[this.waypointIndex]);
                this.setPosition(this.waypoints[this.waypointIndex]);
            }
        }
    }
    setPosition(position) {
        this.position = position;
        return this;
    }
    setDestination(destination) {
        this.destination = Object.assign({}, destination);
        return this;
    }
    updatePriorityDistance() {
        const yDistance = this.destination.y - this.position.y;
        const xDistance = this.destination.x - this.position.x;
        this.priorityDistance = Math.round(Math.abs(xDistance) + Math.abs(yDistance));
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