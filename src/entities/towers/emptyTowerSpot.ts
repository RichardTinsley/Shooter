import { Position } from "../../constants/types.js";
import { AnimatedSprite } from "../AnimatedSprite.js";
import { CircleHitDetection } from "../CircleHitDetection.js";

export class EmptyTowerSpot extends AnimatedSprite {
  protected hitDetection;

  constructor(
    position: Position,
    fileName: string,
    protected spriteWidth: number,
    protected spriteHeight: number,
    protected scale: number
  ) {
    super(position, fileName, spriteWidth, spriteHeight, scale);

    this.hitDetection = new CircleHitDetection()
      .setPosition(position)
      .setWidth(this.width);
  }

  mouseOver(state: number) {
    return;
  }
}
