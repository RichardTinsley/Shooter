import { EnemyFactory } from "../entities/enemies/EnemyFactory.js";
import { Time } from "./Time.js";

enum WAVE_STATE {
  NEW,
  CURRENT,
  END,
}

export class Waves {
  private enemySpawnTimer: number;
  private enemyCount: number;
  private maxEnemies: number;
  private state: number = WAVE_STATE.NEW;

  constructor() {
    this.enemySpawnTimer = 0;
    this.enemyCount = 0;
    this.maxEnemies = 8;
  }

  update() {
    //pass entity arrayhere
    switch (this.state) {
      case WAVE_STATE.NEW:
        this.spawnEnemy();
        break;
      case WAVE_STATE.CURRENT:
        break;
      case WAVE_STATE.END:
        this.resetWave();
        break;
    }
  }

  spawnEnemy(): void {
    if (Time.eventUpdate) this.enemySpawnTimer++;

    if (this.enemySpawnTimer % Math.floor(Math.random() * 100) === 0) {
      EnemyFactory.createEnemy(); // 2% Health and Armour increase depending on round?
      this.enemyCount++;
    }

    if (this.enemyCount === this.maxEnemies) this.state = WAVE_STATE.CURRENT;
  }

  checkWaveStatusAfterEnemyDeath(): void {
    //ACCESS FROM ENEMY IN DEATH STATE
    // if (enemies.length === 0) {
    //   this.state = WAVE_STATE.END;
    //   //waves++
    // }
  }

  resetWave(): void {
    this.enemyCount = 0;
    //this.maxEnemies = this.waves + 10 //and add 20% floored until 150 enemies max
    this.state = WAVE_STATE.NEW;
  }
}
