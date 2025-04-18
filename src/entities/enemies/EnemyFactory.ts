import { ZombieCrawler } from "./ZombieCrawler.js";
import { Zombie3 } from "./Zombie3.js";
import { FILE_NAMES } from "../../constants/assets.js";

export class EnemyFactory {
  static createZombie1(): ZombieCrawler {
    return new ZombieCrawler(FILE_NAMES.ENEMY_ZOMBIE_1_WALK).setSpeed(1);
  }

  static createZombie3(): Zombie3 {
    return new Zombie3(FILE_NAMES.ENEMY_ZOMBIE_3_WALK).setSpeed(4);
  }
}
