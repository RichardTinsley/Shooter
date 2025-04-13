import { Level } from "../../handlers/Level.js";
import { EnemyDraw } from "./EnemyDraw.js";
export class EnemyFactory {
    static createEnemy() {
        const enemyChoice = 0;
        const waypoints = Level.getEnemyGeneratedWaypoints();
        return new EnemyDraw();
    }
}
//# sourceMappingURL=EnemyFactory.js.map