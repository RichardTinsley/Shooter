import { HealthBar } from "../../GUI/components/HealthBar.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import { MovingSprite } from "../MovingSprite.js";
export class Enemy extends MovingSprite {
    constructor(position, fileName, spriteWidth, spriteHeight, waypoints) {
        super(position, fileName, spriteWidth, spriteHeight);
        this.waypoints = waypoints;
        this.healthBar = new HealthBar(this.width);
        this.waypointIndex = 0;
        this.destination = Object.assign({}, position);
        this.updateHealthBar();
        this.healthBar.setCurrentStatus(80);
    }
    draw(ctx) {
        this.contextSave(ctx);
        super.draw(ctx);
        this.contextRestore(ctx);
        this.healthBar.draw(ctx);
    }
    update() {
        super.update();
        this.checkWaypointArrival();
        this.checkEndpointArrival();
        this.updateHealthBar();
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
    updateHealthBar() {
        this.healthBar.setPosition({
            x: this.position.x,
            y: this.position.y - this.height,
        });
    }
    checkEnemyHealth() {
    }
    updatePriorityDistance() {
    }
}
//# sourceMappingURL=Enemy.js.map