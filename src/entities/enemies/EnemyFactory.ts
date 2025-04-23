import { ZombieCheeks } from "./types/ZombieDarkCheeks.js";

export class EnemyFactory {
  static createZombieCheeks(waveCounter: number): any {
    return new ZombieCheeks();
  }
}
