import { Level } from "../../../handlers/Level.js";
import { enemyMovement } from "../../../utilities/entityMovement.js";
import { randomFloat } from "../../../utilities/math.js";
export class Movement {
    constructor() {
        this.waypoints = Level.getEnemyGeneratedWaypoints();
        this.waypointIndex = 1;
        this.priorityDistance = 0;
        this.delta = 0.15;
    }
    update(enemy) {
        enemyMovement(enemy);
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