import { FILE_NAMES } from "../../../constants/assets.js";
import { ZombieCheeks } from "./ZombieCheeks.js";
export class ZombieCheeksDark extends ZombieCheeks {
    constructor() {
        super();
        this.walkSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_WALK;
        this.screamSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_SCREAM;
        this.deathSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_DIE;
        this.idleSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_IDLE;
    }
}
//# sourceMappingURL=ZombieCheeksDark.js.map