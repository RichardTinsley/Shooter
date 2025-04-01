import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import { MovingSprite } from "../MovingSprite.js";
export class Enemy extends MovingSprite {
    constructor(position, fileName, spriteWidth, spriteHeight, waypoints) {
        super(position, fileName, spriteWidth, spriteHeight);
        this.waypoints = waypoints;
        this.waypointIndex = 0;
        this.destination = Object.assign({}, position);
    }
    draw(ctx) {
        this.contextSave(ctx);
        super.draw(ctx);
        this.contextRestore(ctx);
    }
    update() {
        super.update();
        this.checkWaypointArrival();
        this.checkEndpointArrival();
    }
    checkWaypointArrival() {
        if (checkCircleCollision(this.position, this.destination, 5, 10)) {
            this.setDestination(this.waypoints[(this.waypointIndex += 1)]);
        }
    }
    checkEndpointArrival() {
        if (this.waypointIndex === this.waypoints.length) {
            this.waypointIndex = 0;
            this.setPosition(this.waypoints[this.waypointIndex]);
            this.setDestination(this.waypoints[this.waypointIndex]);
        }
    }
    setPosition(position) {
        super.setPosition(position);
        super.setDestination(position);
        return this;
    }
    checkEnemyHealth() {
    }
    updatePriorityDistance() {
    }
}
//# sourceMappingURL=Enemy.js.map