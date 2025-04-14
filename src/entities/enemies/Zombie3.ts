import { FILE_NAMES } from "../../constants/assets.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { Enemy } from "./Enemy.js";

export class Zombie3 extends Enemy {
  protected width: number = 32;
  protected height: number = 32;

  protected sprite = new SpriteAnimation(
    FILE_NAMES.ENEMY_ZOMBIE_3_WALK,
    this.width,
    this.height
  ).setScale(1);

  constructor() {
    super();
    this.initialiseEnemy();
  }
}
