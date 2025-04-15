import { HUD } from "../GUI/HUD/HUD.js";
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

  waveUpdate(entities: Array<any>) {
    switch (enemiesState) {
      case ENEMIES.SPAWNING:
        this.spawnEnemies(entities);
        break;
      case ENEMIES.KILLED:
        this.resetEnemies();
        break;
    }
  }

  spawnEnemies(entities: Array<any>): any {
    if (Time.eventUpdate) enemiesSpawnTimer++;

    if (enemiesSpawnTimer % Math.floor(Math.random() * 1000) === 0) {
      enemiesSpawned++;
      // entities.push(EnemyFactory.createEnemy());
    }

    if (enemiesSpawned === enemiesMaximum) enemiesState = ENEMIES.ACTIVE;
  }

  static checkStatusOfEnemies(): void {
    enemiesKilled++;
    if (enemiesKilled === enemiesMaximum) {
      HUD.hudWaves.setWaves();
      enemiesState = ENEMIES.KILLED;
    }
  }

  resetEnemies(): void {
    enemiesSpawned = 0;
    enemiesMaximum++;
    enemiesState = ENEMIES.SPAWNING;
  } //= HUD.hudWaves.getWaves() + 10 //and add 20% floored until 150 enemies max
}
