import { FILE_NAMES } from "../../constants/assets.js";
import { Zombie3 } from "./enemyTypes/Zombie3.js";
export class EnemyFactory {
    static createZombie3(waveCounter) {
        return new Zombie3(FILE_NAMES.ENEMY_ZOMBIE_3_WALK);
    }
}
//# sourceMappingURL=EnemyFactory.js.map