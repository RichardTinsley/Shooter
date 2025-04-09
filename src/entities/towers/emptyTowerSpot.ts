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

    this.hitDetection = new CircleHitDetection().setHitCircle(
      position,
      this.width
    );
  }

  // this.center = {
  //     x: this.position.x,
  //     y: this.position.y - this.width / 2,
  //     radius: this.width / 2,
  // };

  mouseOver(state: number) {
    return;
  }
}
