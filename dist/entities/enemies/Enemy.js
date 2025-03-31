import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import { MovingSprite } from "../MovingSprite.js";
export class Enemy extends MovingSprite {
    constructor(fileName, spriteWidth, spriteHeight, waypoints) {
        super(fileName, spriteWidth, spriteHeight);
        this.waypoints = waypoints;
        this.waypointIndex = 0;
    }
    draw(ctx) {
        this.contextSave(ctx);
        super.draw(ctx);
        this.contextRestore(ctx);
    }
    update(event) {
        super.update(event);
        this.checkWaypointArrival();
        this.checkEndpointArrival();
    }
    checkWaypointArrival() {
        if (checkCircleCollision(this.position, this.destination, 5, 5)) {
            this.destination = this.waypoints[(this.waypointIndex += 1)];
        }
    }
    checkEndpointArrival() {
        if (this.waypointIndex === this.waypoints.length) {
            this.waypointIndex = 0;
            this.setPosition(this.waypoints[this.waypointIndex]);
            this.setDestination(this.waypoints[this.waypointIndex]);
        }
    }
    checkEnemyHealth() {
    }
    updateDeathAnimation() {
    }
    updatePriorityDistance() {
    }
}
//# sourceMappingURL=Enemy.js.map