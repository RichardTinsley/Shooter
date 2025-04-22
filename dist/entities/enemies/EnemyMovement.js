import { HUD } from "../../GUI/HUD/HUD.js";
import { Level } from "../../handlers/Level.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import * as MOVEMENT from "../../utilities/entityMovement.js";
import { randomFloat } from "../../utilities/math.js";
export class EnemyMovement {
    constructor() {
        this.waypoints = Level.getEnemyGeneratedWaypoints();
        this.waypointIndex = 1;
        this.priorityDistance = 0;
        this.speedDelta = 0.15;
    }
    update(enemy) {
        if (checkCircleCollision(enemy.position, enemy.destination, 5, 10)) {
            this.waypointIndex++;
            if (this.waypointIndex === this.waypoints.length) {
                HUD.hudLives.setLives();
                this.waypointIndex = 0;
                enemy.setPosition(this.waypoints[this.waypointIndex]);
                enemy.sprite.setPosition(enemy.position);
                enemy.hitDetection.setPosition(enemy.position);
                enemy.healthBar.setPosition(enemy.position);
            }
            enemy.setDestination(this.waypoints[this.waypointIndex]);
            this.angle = MOVEMENT.setAngle(enemy.position, enemy.destination);
            enemy.sprite.setDirection(MOVEMENT.getDirection(this.angle));
        }
        MOVEMENT.updatePosition(enemy.position, this.angle, this.speed);
        this.setPriorityDistance(enemy);
    }
    getWaypoints() {
        return Object.assign({}, this.waypoints[this.waypointIndex]);
    }
    getPriorityDistance() {
        return this.priorityDistance;
    }
    setSpeed(speed) {
        this.speed = randomFloat(speed - speed * this.speedDelta, speed + speed * this.speedDelta);
        return this;
    }
    setPriorityDistance(enemy) {
        const dx = enemy.destination.y - enemy.position.y;
        const dy = enemy.destination.x - enemy.position.x;
        this.priorityDistance = Math.round(Math.abs(dx) + Math.abs(dy));
    }
}
//# sourceMappingURL=EnemyMovement.js.map