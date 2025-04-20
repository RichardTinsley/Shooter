import { EnemyFactory } from "../entities/enemies/EnemyFactory.js";
import { HUD } from "../GUI/HUD/HUD.js";
import { randomNumber } from "../utilities/math.js";
import { Time } from "./Time.js";

enum ENEMIES {
  SPAWNING,
  ACTIVE,
  KILLED,
}

let enemiesState: number;
let enemiesSpawnTimer: number;
let enemiesSpawned: number;
let enemiesKilled: number;
let enemiesMaximum: number;

export class EnemyWaves {
  constructor() {
    enemiesState = ENEMIES.SPAWNING;
    enemiesSpawnTimer = 0;
    enemiesSpawned = 0;
    enemiesKilled = 0;
    enemiesMaximum = 10;
  }

  update(entities: Array<any>): void {
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
    if (!Time.eventUpdate) return;

    if (enemiesSpawnTimer++ % randomNumber(10, 25) === 0) {
      entities.push(EnemyFactory.createZombie3());
      if (enemiesSpawned++ === enemiesMaximum) enemiesState = ENEMIES.ACTIVE;
    }
  }

  resetEnemies(): void {
    HUD.hudWaves.setWaves();
    enemiesSpawned = 0;
    enemiesKilled = 0;
    enemiesMaximum++;
    enemiesState = ENEMIES.SPAWNING;
  } //= HUD.hudWaves.getWaves() + 10 //and add 20% floored until 150 enemies max

  static enemyKilled(): void {
    enemiesKilled++;
    if (enemiesKilled === enemiesMaximum) {
      enemiesState = ENEMIES.KILLED;
    }
  }
}
