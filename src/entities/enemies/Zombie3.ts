import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { Enemy } from "./Enemy.js";

export class Zombie3 extends Enemy {
  protected width: number = 32;
  protected height: number = 32;

  constructor(fileName: string) {
    super();
    this.sprite = new SpriteAnimation(fileName, this.width, this.height)
      .setPosition(this.position)
      .setScale(1.5);

    this.initialiseEnemy();
  }
}
