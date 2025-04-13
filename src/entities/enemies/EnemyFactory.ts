import { randomFloat } from "../../utilities/math.js";
import { EnemyDraw } from "./EnemyDraw.js";

export class EnemyFactory {
  static createEnemy() {
    return new EnemyDraw().setSpeed(10);
  }
}
