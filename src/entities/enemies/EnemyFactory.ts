import { randomFloat } from "../../utilities/math.js";
import { Zombie1 } from "./Zombie1.js";
import { Zombie3 } from "./Zombie3.js";

export class EnemyFactory {
  static createZombie1(): Zombie1 {
    return new Zombie1().setSpeed(10);
  }

  static createZombie3(): Zombie3 {
    return new Zombie3().setSpeed(10);
  }
}
