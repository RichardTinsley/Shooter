import { FILE_NAMES } from "../../constants/assets.js";
import { Level } from "../../handlers/Level.js";
import { Enemy } from "./Enemy.js";
export class EnemyFactory {
    static createEnemy() {
        const enemyChoice = 0;
        const waypoints = Level.getEnemyGeneratedWaypoints();
        return new Enemy(Object.assign({}, waypoints[0]), FILE_NAMES.TOWER_AMETHYST_1, 64, 64, waypoints).setSpeed(10);
    }
}
//# sourceMappingURL=EnemyFactory.js.map