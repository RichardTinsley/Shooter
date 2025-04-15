import { FILE_NAMES } from "../../constants/assets.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { EnemyMovement } from "./EnemyMovement.js";

export class Zombie3 extends EnemyMovement {
  protected width: number = 32;
  protected height: number = 32;

  protected sprite = new SpriteAnimation(
    FILE_NAMES.ENEMY_ZOMBIE_3_WALK,
    this.width,
    this.height
  ).setScale(1.5);

  constructor() {
    super();
    this.initialiseEnemy();
  }
}
