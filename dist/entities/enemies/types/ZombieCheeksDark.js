import { Walking } from "../states/Walking.js";
import { FILE_NAMES } from "../../../constants/assets.js";
import { ZombieCheeks } from "./ZombieCheeks.js";
export class ZombieCheeksDark extends ZombieCheeks {
    constructor() {
        super();
        this.walkingSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_WALK;
        this.screamingSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_SCREAM;
        this.dyingSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_DIE;
        this.idlingSprite = FILE_NAMES.ZOMBIE_DARK_CHEEKS_IDLE;
        this.state = new Walking(this);
    }
}
//# sourceMappingURL=ZombieCheeksDark.js.map