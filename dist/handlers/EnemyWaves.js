import { HUD } from "../GUI/HUD/HUD.js";
import { Time } from "./Time.js";
var ENEMIES;
(function (ENEMIES) {
    ENEMIES[ENEMIES["SPAWNING"] = 0] = "SPAWNING";
    ENEMIES[ENEMIES["ACTIVE"] = 1] = "ACTIVE";
    ENEMIES[ENEMIES["KILLED"] = 2] = "KILLED";
})(ENEMIES || (ENEMIES = {}));
let enemiesState;
let enemiesSpawnTimer;
let enemiesSpawned;
let enemiesKilled;
let enemiesMaximum;
export class EnemyWaves {
    constructor() {
        enemiesState = ENEMIES.SPAWNING;
        enemiesSpawnTimer = 0;
        enemiesSpawned = 0;
        enemiesKilled = 0;
        enemiesMaximum = 10;
    }
    waveUpdate(entities) {
        switch (enemiesState) {
            case ENEMIES.SPAWNING:
                this.spawnEnemies(entities);
                break;
            case ENEMIES.KILLED:
                this.resetEnemies();
                break;
        }
    }
    spawnEnemies(entities) {
        if (Time.eventUpdate)
            enemiesSpawnTimer++;
        if (enemiesSpawnTimer % Math.floor(Math.random() * 1000) === 0) {
            enemiesSpawned++;
        }
        if (enemiesSpawned === enemiesMaximum)
            enemiesState = ENEMIES.ACTIVE;
    }
    static checkStatusOfEnemies() {
        enemiesKilled++;
        if (enemiesKilled === enemiesMaximum) {
            HUD.hudWaves.setWaves();
            enemiesState = ENEMIES.KILLED;
        }
    }
    resetEnemies() {
        enemiesSpawned = 0;
        enemiesMaximum++;
        enemiesState = ENEMIES.SPAWNING;
    }
}
//# sourceMappingURL=EnemyWaves.js.map