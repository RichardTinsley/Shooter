import { EnemyFactory } from "../entities/enemies/EnemyFactory.js";
import { HUD } from "../GUI/HUD/HUD.js";
import { randomNumber } from "../utilities/math.js";
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
    update(entities) {
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
        if (!Time.eventUpdate)
            return;
        if (enemiesSpawnTimer++ % randomNumber(10, 25) === 0) {
            entities.push(EnemyFactory.createZombie3());
            if (enemiesSpawned++ === enemiesMaximum)
                enemiesState = ENEMIES.ACTIVE;
        }
    }
    resetEnemies() {
        enemiesSpawned = 0;
        enemiesMaximum++;
        enemiesState = ENEMIES.SPAWNING;
    }
    static enemyKilled() {
        enemiesKilled++;
        if (enemiesKilled === enemiesMaximum) {
            HUD.hudWaves.setWaves();
            enemiesState = ENEMIES.KILLED;
        }
    }
}
//# sourceMappingURL=EnemyWaves.js.map