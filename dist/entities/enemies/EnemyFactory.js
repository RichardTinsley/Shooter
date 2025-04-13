import { EnemyDraw } from "./EnemyDraw.js";
export class EnemyFactory {
    static createEnemy() {
        return new EnemyDraw().setSpeed(10);
    }
}
//# sourceMappingURL=EnemyFactory.js.map