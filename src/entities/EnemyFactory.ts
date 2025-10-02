import { randomNumber } from "../utilities/math.js";
import { Enemy } from "./Enemy.js";
import { ENEMY_TYPE, ENEMY_TYPES } from "../types/EnemyTypes.js";

export class EnemyFactory {
  static createZombie(waveCounter: number): any {
    const number = randomNumber(0, 1);
    // const enemyType: ENEMY_TYPE = ENEMY_TYPES.get("zombieCheeks");
    if (number === 0) return new Enemy(ENEMY_TYPES.get("zombieCrawler")).setMovingState();
    if (number === 1) return new Enemy(ENEMY_TYPES.get("zombieCheeks")).setMovingState();
  }
}
