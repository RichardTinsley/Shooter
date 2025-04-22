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
let enemiesState = ENEMIES.SPAWNING;
let enemiesSpawnTimer = 0;
let enemiesSpawned = 0;
let enemiesKilled = 0;
let enemiesMaximum = 600;
export class EnemyWaves {
    update(entities) {
        if (!Time.eventUpdate)
            return;
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
        if (enemiesSpawnTimer++ % randomNumber(10, 25) === 0) {
            entities.push(EnemyFactory.createZombie3(HUD.hudWaves.getWaves()));
            if (enemiesSpawned++ === enemiesMaximum)
                enemiesState = ENEMIES.ACTIVE;
        }
    }
    resetEnemies() {
        HUD.hudWaves.setWaves();
        enemiesSpawned = 0;
        enemiesKilled = 0;
        enemiesMaximum++;
        enemiesState = ENEMIES.SPAWNING;
    }
    static enemyKilled() {
        enemiesKilled++;
        if (enemiesKilled === enemiesMaximum)
            enemiesState = ENEMIES.KILLED;
    }
}
//# sourceMappingURL=EnemyWaves.js.map