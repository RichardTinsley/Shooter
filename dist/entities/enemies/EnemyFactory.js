import { ZombieCrawler } from "./ZombieCrawler.js";
import { Zombie3 } from "./Zombie3.js";
import { FILE_NAMES } from "../../constants/assets.js";
export class EnemyFactory {
    static createZombie3(waveCounter) {
        console.log(waveCounter);
        if (waveCounter % 2 === 0)
            return new Zombie3(FILE_NAMES.ENEMY_ZOMBIE_3_WALK).setSpeed(4);
        else
            return new ZombieCrawler(FILE_NAMES.ENEMY_ZOMBIE_1_WALK).setSpeed(1);
    }
}
//# sourceMappingURL=EnemyFactory.js.map