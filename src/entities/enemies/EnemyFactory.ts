import { Zombie3 } from "./enemyTypes/Zombie3.js";

export class EnemyFactory {
  static createZombie3(waveCounter: number): any {
    return new Zombie3();
  }
}
