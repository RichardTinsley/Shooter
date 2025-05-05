import { randomNumber } from "../../utilities/math.js";
import { ZombieCrawler } from "./types/ZombieCrawler.js";
import { ZombieCheeks } from "./types/ZombieCheeks.js";
import { ZombieCrawlerDark } from "./types/ZombieCrawlerDark.js";
import { ZombieCheeksDark } from "./types/ZombieCheeksDark.js";
export class EnemyFactory {
    static createZombie(waveCounter) {
        const number = randomNumber(0, 3);
        if (number === 0) {
            return new ZombieCrawler();
        }
        else if (number === 1) {
            return new ZombieCrawlerDark();
        }
        else if (number === 2) {
            return new ZombieCheeks();
        }
        else if (number === 3) {
            return new ZombieCheeksDark();
        }
    }
}
//# sourceMappingURL=EnemyFactory.js.map