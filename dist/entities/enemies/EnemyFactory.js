import { FILE_NAMES } from "../../constants/assets.js";
import { Level } from "../../handlers/Level.js";
import { Enemy } from "./Enemy.js";
import { randomFloat } from "../../utilities/math.js";
export class EnemyFactory {
    static createEnemy() {
        const enemyChoice = 0;
        const waypoints = Level.getEnemyGeneratedWaypoints();
        return new Enemy(Object.assign({}, waypoints[0]), FILE_NAMES.ENEMY_ZOMBIE_1_WALK, 64, 32, randomFloat(0.5, 2.5), waypoints).setSpeed(10);
    }
}
//# sourceMappingURL=EnemyFactory.js.map