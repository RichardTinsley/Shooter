import { EnemyFactory } from "../entities/enemies/EnemyFactory.js";
import { Time } from "./Time.js";
var WAVE_STATE;
(function (WAVE_STATE) {
    WAVE_STATE[WAVE_STATE["NEW"] = 0] = "NEW";
    WAVE_STATE[WAVE_STATE["CURRENT"] = 1] = "CURRENT";
    WAVE_STATE[WAVE_STATE["END"] = 2] = "END";
})(WAVE_STATE || (WAVE_STATE = {}));
export class Waves {
    constructor() {
        this.state = WAVE_STATE.NEW;
        this.enemySpawnTimer = 0;
        this.enemyCount = 0;
        this.maxEnemies = 8;
    }
    update() {
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
    spawnEnemy() {
        if (Time.eventUpdate)
            this.enemySpawnTimer++;
        if (this.enemySpawnTimer % Math.floor(Math.random() * 100) === 0) {
            EnemyFactory.createEnemy();
            this.enemyCount++;
        }
        if (this.enemyCount === this.maxEnemies)
            this.state = WAVE_STATE.CURRENT;
    }
    checkWaveStatusAfterEnemyDeath() {
    }
    resetWave() {
        this.enemyCount = 0;
        this.state = WAVE_STATE.NEW;
    }
}
//# sourceMappingURL=Waves.js.map