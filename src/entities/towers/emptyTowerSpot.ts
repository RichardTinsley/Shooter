import { Position } from "../../constants/types.js";
import { CircleHitDetection } from "../../handlers/CircleHitDetection.js";
import { SpriteAnimation } from "../SpriteAnimation.js";

export class EmptyTowerSpot {
  protected hitDetection;
  protected sprite;

  constructor(position: Position, fileName: string) {
    this.sprite = new SpriteAnimation(fileName, 64, 64).setPosition(position);
    this.hitDetection = new CircleHitDetection()
      .setPosition(position)
      .setWidth(64);
  }

  mouseOver(state: number) {
    return;
  }
}
