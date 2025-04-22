import { Zombie3 } from "./types/Zombie3.js";

export class EnemyFactory {
  static createZombie3(waveCounter: number): any {
    return new Zombie3();
  }
}
