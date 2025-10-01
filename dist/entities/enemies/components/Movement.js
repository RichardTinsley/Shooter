import { HUD } from "../../../GUI/HUD/HUD.js";
import { Level } from "../../../handlers/Level.js";
import { checkCircleCollision } from "../../../utilities/collisionDetection.js";
import { getDirection, setAngle, updatePosition } from "../../../utilities/entityMovement.js";
import { randomFloat } from "../../../utilities/math.js";
export class Movement {
    constructor() {
        this.waypoints = Level.getEnemyGeneratedWaypoints();
        this.waypointIndex = 1;
        this.priorityDistance = 0;
        this.delta = 0.15;
    }
    update(enemy) {
        this.enemyMovement(enemy);
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
    enemyMovement(enemy) {
        if (checkCircleCollision(enemy.position, enemy.destination, 5, 10)) {
            enemy.movement.waypointIndex++;
            if (enemy.movement.waypointIndex === enemy.movement.waypoints.length) {
                HUD.hudLives.setLives();
                enemy.movement.waypointIndex = 0;
                enemy.setPosition(enemy.movement.waypoints[enemy.movement.waypointIndex]);
                enemy.sprite.setPosition(enemy.position);
                enemy.hitDetection.setPosition(enemy.position);
                enemy.healthBar.setPosition(enemy.position);
            }
            enemy.setDestination(enemy.movement.waypoints[enemy.movement.waypointIndex]);
            enemy.movement.angle = setAngle(enemy.position, enemy.destination);
            enemy.sprite.setDirection(getDirection(enemy.movement.angle));
        }
        updatePosition(enemy.position, enemy.movement.angle, enemy.movement.speed);
        enemy.movement.setPriorityDistance(enemy);
    }
}
//# sourceMappingURL=Movement.js.map