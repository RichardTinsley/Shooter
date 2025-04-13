import { FILE_NAMES } from "../constants/assets.js";
import { SpriteAnimation } from "./SpriteAnimation.js";

export class SpriteFactory {
  static createZombieSprite1(): SpriteAnimation {
    return new SpriteAnimation(FILE_NAMES.ENEMY_ZOMBIE_1_WALK, 64, 32);
  }
}
