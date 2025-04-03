import { FILE_NAMES } from "../../constants/assets.js";
import { Level } from "../levels/Level.js";
import { Enemy } from "./Enemy.js";

export class EnemyFactory {
  static createEnemy(): Enemy {
    const enemyChoice = 0; /// = randomNumber % wavenumber
    const waypoints = Level.getEnemyGeneratedWaypoints();

    switch (enemyChoice) {
      case 0:
        return new Enemy(
          waypoints[0],
          FILE_NAMES.TOWER_EMPTY_SPOT,
          64,
          64,
          waypoints
        );
    }
  }
}
