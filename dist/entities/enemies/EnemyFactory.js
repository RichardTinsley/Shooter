import { randomNumber } from "../../utilities/math.js";
import { FILE_NAMES } from "../../constants/assets.js";
import { ZombieCheeks } from "./ZombieCheeks.js";
import { ZombieCrawler } from "./ZombieCrawler.js";
export class EnemyFactory {
    static createZombie(waveCounter) {
        const number = randomNumber(0, 3);
        if (number === 0)
            return new ZombieCheeks({
                move: FILE_NAMES.ZOMBIE_CHEEKS_WALK,
                attack: FILE_NAMES.ZOMBIE_CHEEKS_ATTACK,
                death: FILE_NAMES.ZOMBIE_CHEEKS_DIE,
                idle: FILE_NAMES.ZOMBIE_CHEEKS_IDLE,
            });
        if (number === 1)
            return new ZombieCheeks({
                move: FILE_NAMES.ZOMBIE_DARK_CHEEKS_WALK,
                attack: FILE_NAMES.ZOMBIE_DARK_CHEEKS_ATTACK,
                death: FILE_NAMES.ZOMBIE_DARK_CHEEKS_DIE,
                idle: FILE_NAMES.ZOMBIE_DARK_CHEEKS_IDLE,
            });
        if (number === 2)
            return new ZombieCrawler({
                move: FILE_NAMES.ZOMBIE_CRAWLER_WALK,
                attack: FILE_NAMES.ZOMBIE_CRAWLER_ATTACK,
                death: FILE_NAMES.ZOMBIE_CRAWLER_DIE,
                idle: FILE_NAMES.ZOMBIE_CRAWLER_IDLE,
            });
        return new ZombieCrawler({
            move: FILE_NAMES.ZOMBIE_DARK_CRAWLER_WALK,
            attack: FILE_NAMES.ZOMBIE_DARK_CRAWLER_ATTACK,
            death: FILE_NAMES.ZOMBIE_DARK_CRAWLER_DIE,
            idle: FILE_NAMES.ZOMBIE_DARK_CRAWLER_IDLE,
        });
    }
}
//# sourceMappingURL=EnemyFactory.js.map