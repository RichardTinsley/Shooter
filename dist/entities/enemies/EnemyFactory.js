import { FILE_NAMES } from "../../constants/assets.js";
import { Level } from "../../handlers/Level.js";
import { ZombieEnemy } from "./ZombieEnemy.js";
export class EnemyFactory {
    static createEnemy() {
        const enemyChoice = 0;
        const waypoints = Level.getEnemyGeneratedWaypoints();
        return new ZombieEnemy(Object.assign({}, waypoints[0]), FILE_NAMES.ENEMY_ZOMBIE_1_WALK, 64, 32, 1.5, waypoints)
            .setSpeed(10)
            .setScale(3);
    }
}
//# sourceMappingURL=EnemyFactory.js.map