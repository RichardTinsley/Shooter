import { FILE_NAMES } from "../../constants/assets.js";
import { Level } from "../../handlers/Level.js";
import { Enemy } from "./Enemy.js";

export class EnemyFactory {
  static createEnemy() {
    const enemyChoice = 0; /// = randomNumber % wavenumber
    const waypoints = Level.getEnemyGeneratedWaypoints();
    //     switch (enemyChoice) {
    //       case 0:
    return new Enemy(
      { ...waypoints[0] },
      FILE_NAMES.TOWER_AMETHYST_1,
      64,
      64,
      2,
      waypoints
    ).setSpeed(10);
    //     }
  }
}
