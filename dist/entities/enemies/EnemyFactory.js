import { Zombie1 } from "./Zombie1.js";
import { Zombie3 } from "./Zombie3.js";
export class EnemyFactory {
    static createZombie1() {
        return new Zombie1().setSpeed(1);
    }
    static createZombie3() {
        return new Zombie3().setSpeed(4);
    }
}
//# sourceMappingURL=EnemyFactory.js.map