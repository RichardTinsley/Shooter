import { HUDItem } from "./HUDItem.js";
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
        this.text = this.waves.toString();
        this.enemiesSpawnTimer = 0;
        this.enemiesSpawned = 0;
        this.enemiesKilled = 0;
        this.enemiesMaximum = 10;
    }
    waveUpdate(entities) {
        switch (this.waveState) {
            case WAVE_STATE.NEW:
                this.spawnEnemies(entities);
                break;
            case WAVE_STATE.END:
                this.resetEnemyWave();
                break;
        }
    }
    spawnEnemies(entities) {
        if (Time.eventUpdate)
            this.enemiesSpawnTimer++;
        if (this.enemiesSpawnTimer % Math.floor(Math.random() * 1000) === 0) {
            this.enemiesSpawned++;
        }
        if (this.enemiesSpawned === this.enemiesMaximum)
            this.waveState = WAVE_STATE.CURRENT;
    }
    checkStatusOfEnemyWave() {
        this.enemiesKilled++;
        if (this.enemiesKilled === this.enemiesMaximum) {
            this.waves++;
            this.text = this.waves.toString();
            this.waveState = WAVE_STATE.END;
        }
    }
    resetEnemyWave() {
        this.enemiesSpawned = 0;
        this.enemiesMaximum++;
        this.waveState = WAVE_STATE.NEW;
    }
    getCurrentEnemyWave() {
        return this.waves;
    }
}
//# sourceMappingURL=HUDEnemies.js.map