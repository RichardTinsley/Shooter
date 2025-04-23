import { IEnemyState } from "../Enemy.js";
import { Walking } from "../states/Walking.js";
import { FILE_NAMES } from "../../../constants/assets.js";
import { ZombieCheeks } from "./ZombieCheeks.js";

export class ZombieCheeksDark extends ZombieCheeks {
  walkingSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_WALK;
  screamingSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_SCREAM;
  dyingSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_DIE;
  idlingSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_IDLE;

  state: IEnemyState = new Walking(this);

  constructor() {
    super();
  }
}
