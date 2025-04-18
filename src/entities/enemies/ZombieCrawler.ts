import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
import { Enemy } from "./Enemy.js";

export class ZombieCrawler extends Enemy {
  protected width: number = 64;
  protected height: number = 32;

  constructor(fileName: string) {
    super();

    this.sprite = new SpriteAnimation(fileName, this.width, this.height)
      .setPosition(this.position)
      .setScale(1.5)
      .setDrawOffsets(0.25, 0.1);

    this.shadowWidth = this.sprite.getScaledWidth() / 2;
    this.mouseOverWidth = this.sprite.getScaledWidth() / 2;

    this.hitDetection
      .setPosition(this.position)
      .setWidth(this.sprite.getScaledWidth() / 2)
      .setDrawOffsets(0, 0);
    this.healthBar
      .setPosition(this.position)
      .setWidth(this.sprite.getScaledWidth() / 2)
      .setDrawOffsets(this.sprite.getScaledHeight() - 5);
  }
}
