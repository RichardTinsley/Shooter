import { HUDItem } from "./HUDItem.js";
import { EnemyFactory } from "../../entities/enemies/EnemyFactory.js";
import { Time } from "../../handlers/Time.js";

enum WAVE_STATE {
  NEW,
  CURRENT,
  END,
}

export class HUDEnemies extends HUDItem {
  private waves: number;
  private enemySpawnTimer: number;
  private enemyCount: number;
  private maxEnemies: number;
  private waveState: number = WAVE_STATE.NEW;

  constructor() {
    super();
    this.waves = 0;
    this.enemySpawnTimer = 0;
    this.enemyCount = 0;
    this.maxEnemies = 8;
    this.text = this.waves.toString();
  }

  waveUpdate(entities: Array<any>) {
    switch (this.waveState) {
      case WAVE_STATE.NEW:
        this.spawnEnemy(entities);
        break;
      case WAVE_STATE.CURRENT:
        break;
      case WAVE_STATE.END:
        this.resetWave();
        break;
    }
  }

  spawnEnemy(entities: Array<any>): any {
    if (Time.eventUpdate) this.enemySpawnTimer++;

    if (this.enemySpawnTimer % Math.floor(Math.random() * 1000) === 0) {
      this.enemyCount++;
      // entities.push(EnemyFactory.createEnemy());
    }

    if (this.enemyCount === this.maxEnemies)
      this.waveState = WAVE_STATE.CURRENT;
  }

  checkWaveStatusAfterEnemyDeath(): void {
    // ACCESS FROM ENEMY IN DEATH STATE
    // if (this.enemies.length === 0) {
    this.waves++;
    this.text = this.waves.toString();
    this.waveState = WAVE_STATE.END;
    // }
  }

  resetWave(): void {
    this.enemyCount = 0;
    this.maxEnemies++;
    //this.maxEnemies = this.waves + 10 //and add 20% floored until 150 enemies max
    this.waveState = WAVE_STATE.NEW;
  }

  getWaves() {
    return this.waves;
  }
}
