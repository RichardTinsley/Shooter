import { AnimatedSprite } from "../AnimatedSprite.js";

export class EmptyTowerSpot extends AnimatedSprite {
  constructor(
    fileName: string,
    protected spriteWidth: number,
    protected spriteHeight: number
  ) {
    super(fileName, spriteWidth, spriteHeight);
  }

  // this.center = {
  //     x: this.position.x,
  //     y: this.position.y - this.width / 2,
  //     radius: this.width / 2,
  // };
}
