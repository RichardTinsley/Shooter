import { AnimatedSprite } from "../AnimatedSprite.js";
import { CircleHitDetection } from "../CircleHitDetection.js";
export class EmptyTowerSpot extends AnimatedSprite {
    constructor(position, fileName, spriteWidth, spriteHeight) {
        super(position, fileName, spriteWidth, spriteHeight);
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.hitDetection = new CircleHitDetection(spriteWidth, spriteHeight).setHitCircle(position);
    }
}
//# sourceMappingURL=emptyTowerSpot.js.map