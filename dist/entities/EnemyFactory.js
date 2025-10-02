import { randomNumber } from "../utilities/math.js";
import { Enemy } from "./Enemy.js";
import { ENEMY_TYPES } from "../types/EnemyTypes.js";
export class EnemyFactory {
    static createZombie(waveCounter) {
        const number = randomNumber(0, 1);
        if (number === 0)
            return new Enemy(ENEMY_TYPES.get("zombieCrawler"));
        if (number === 1)
            return new Enemy(ENEMY_TYPES.get("zombieCheeks"));
    }
}
//# sourceMappingURL=EnemyFactory.js.map