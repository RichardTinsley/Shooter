import { Position } from "../../constants/types.js";
import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";

export class EmptyTowerSpot {
  protected hitDetection;
  protected sprite;

  constructor(protected position: Position, fileName: string) {
    this.sprite = new SpriteAnimation()
      .setImage(fileName, 64, 64)
      .setPosition(position)
      .initialise();

    this.hitDetection = new HitDetectionCircle()
      .setPosition(position)
      .setWidth(64);
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.sprite.draw(ctx);
  }

  update() {
    this.sprite.update();
  }

  mouseClick() {
    return;
  }

  mouseOver(state: number) {
    return;
  }

  getType(): string {
    return "Tower";
  }
}
