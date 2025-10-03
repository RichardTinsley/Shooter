import { EnemyFactory } from "../entities/Enemies/EnemyFactory.js";
import { HUD } from "../GUI/HUD/HUD.js";
import { randomNumber } from "../utilities/math.js";
import { Time } from "./Time.js";

enum ENEMIES {
  SPAWNING,
  ACTIVE,
  KILLED,
}

let enemiesState: number = ENEMIES.SPAWNING;
let enemiesSpawnTimer: number = 0;
let enemiesSpawned: number = 0;
let enemiesKilled: number = 0;
let enemiesMaximum: number = 9;

export class EnemyWaves {
  update(entities: Array<any>): void {
    if (!Time.eventUpdate) return;

    switch (enemiesState) {
      case ENEMIES.SPAWNING:
        this.spawnEnemies(entities);
        break;
      case ENEMIES.KILLED:
        this.resetEnemies();
        break;
    }
  }

  spawnEnemies(entities: Array<any>): void {
    if (enemiesSpawnTimer++ % randomNumber(10, 25) === 0) {
      entities.push(EnemyFactory.createZombie(HUD.hudWaves.getWaves()));
      if (enemiesSpawned++ === enemiesMaximum) enemiesState = ENEMIES.ACTIVE;
    }
  }

  resetEnemies(): void {
    HUD.hudWaves.setWaves();
    enemiesSpawned = 0;
    enemiesKilled = 0;
    enemiesMaximum++; //= HUD.hudWaves.getWaves() FORMULA
    enemiesState = ENEMIES.SPAWNING;
  }

  static enemyKilled(): void {
    enemiesKilled++;
    if (enemiesKilled === enemiesMaximum) enemiesState = ENEMIES.KILLED;
  }
}
