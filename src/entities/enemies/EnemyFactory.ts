import { FILE_NAMES } from "../../constants/assets.js";
import { Level } from "../../handlers/Level.js";
import { randomFloat } from "../../utilities/math.js";
import { EnemyDraw } from "./EnemyDraw.js";
// import { ZombieEnemy } from "./ZombieEnemy.js";

export class EnemyFactory {
  static createEnemy() {
    const enemyChoice = 0; /// = randomNumber % wavenumber
    const waypoints = Level.getEnemyGeneratedWaypoints();
    //     switch (enemyChoice) {
    //       case 0:
    // return new ZombieEnemy(
    //   { ...waypoints[0] },
    //   FILE_NAMES.ENEMY_ZOMBIE_1_WALK,
    //   64,
    //   32,
    //   1.5,
    //   waypoints
    // ).setSpeed(2);
    //     }
    return new EnemyDraw();
  }
}
