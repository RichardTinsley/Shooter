import { randomNumber } from "../../utilities/math.js";
import { ZombieCheeks } from "./types/ZombieCheeks.js";
export class EnemyFactory {
    static createZombie(waveCounter) {
        const number = randomNumber(0, 3);
        return new ZombieCheeks();
    }
}
//# sourceMappingURL=EnemyFactory.js.map