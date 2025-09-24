import { randomNumber } from "../../utilities/math.js";
import { ZombieCheeksDark } from "./types/ZombieCheeksDark.js";
export class EnemyFactory {
    static createZombie(waveCounter) {
        const number = randomNumber(0, 3);
        return new ZombieCheeksDark();
    }
}
//# sourceMappingURL=EnemyFactory.js.map