import { FILE_NAMES } from "../../../constants/assets.js";
import { ZombieCheeks } from "./ZombieCheeks.js";

export class ZombieCheeksDark extends ZombieCheeks {
  walkSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_WALK;
  screamSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_SCREAM;
  deathSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_DIE;
  idleSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_IDLE;

  constructor() {
    super();
  }
}
