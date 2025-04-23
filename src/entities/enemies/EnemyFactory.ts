import { randomNumber } from "../../utilities/math.js";
import { ZombieCrawler } from "./types/ZombieCrawler.js";
import { ZombieCheeks } from "./types/ZombieDarkCheeks.js";

export class EnemyFactory {
  static createZombie(waveCounter: number): any {
    if (randomNumber(0, 1) === 0) {
      return new ZombieCheeks();
    } else {
      return new ZombieCrawler();
    }
  }
}
