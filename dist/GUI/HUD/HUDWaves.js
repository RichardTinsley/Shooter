import { HUDItem } from "./HUDItem.js";
import { EnemyFactory } from "../../entities/enemies/EnemyFactory.js";
import { Time } from "../../handlers/Time.js";
var WAVE_STATE;
(function (WAVE_STATE) {
    WAVE_STATE[WAVE_STATE["NEW"] = 0] = "NEW";
    WAVE_STATE[WAVE_STATE["CURRENT"] = 1] = "CURRENT";
    WAVE_STATE[WAVE_STATE["END"] = 2] = "END";
})(WAVE_STATE || (WAVE_STATE = {}));
export class HUDWaves extends HUDItem {
    constructor() {
        super();
        this.waveState = WAVE_STATE.NEW;
        this.waves = 0;
        this.enemySpawnTimer = 0;
        this.enemyCount = 0;
        this.maxEnemies = 8;
        this.text = this.waves.toString();
    }
    waveUpdate(entities) {
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
    spawnEnemy(entities) {
        if (Time.eventUpdate)
            this.enemySpawnTimer++;
        if (this.enemySpawnTimer % Math.floor(Math.random() * 1000) === 0) {
            this.enemyCount++;
            entities.push(EnemyFactory.createEnemy());
        }
        if (this.enemyCount === this.maxEnemies)
            this.waveState = WAVE_STATE.CURRENT;
    }
    checkWaveStatusAfterEnemyDeath() {
        this.waves++;
        this.text = this.waves.toString();
        this.waveState = WAVE_STATE.END;
    }
    resetWave() {
        this.enemyCount = 0;
        this.maxEnemies++;
        this.waveState = WAVE_STATE.NEW;
    }
    getWaves() {
        return this.waves;
    }
}
//# sourceMappingURL=HUDWaves.js.map