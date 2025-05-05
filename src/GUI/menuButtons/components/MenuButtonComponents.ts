import { Position } from "../../../constants/types.js";
import { SpriteAnimation } from "../../../entities/sprites/SpriteAnimation.js";
import { HitDetectionSquare } from "../../../handlers/HitDetectionSquare.js";

export class MenuButtonComponents {
  public position!: Position;
  public hitDetection!: HitDetectionSquare;
  public label: any;
}

export class MenuButtonTextComponents extends MenuButtonComponents {
  public label!: Text;

  constructor() {
    super();
  }
}

export class MenuButtonImage extends MenuButtonComponents {
  public label!: SpriteAnimation;

  constructor() {
    super();
  }
}
