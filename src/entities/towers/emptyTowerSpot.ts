import { Position } from "../../constants/types.js";
import { AnimatedSprite } from "../AnimatedSprite.js";

export class EmptyTowerSpot extends AnimatedSprite {
  constructor(
    position: Position,
    fileName: string,
    protected spriteWidth: number,
    protected spriteHeight: number
  ) {
    super(position, fileName, spriteWidth, spriteHeight);
  }

  // this.center = {
  //     x: this.position.x,
  //     y: this.position.y - this.width / 2,
  //     radius: this.width / 2,
  // };
}
