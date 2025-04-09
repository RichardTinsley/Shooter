import { AnimatedSprite } from "../AnimatedSprite.js";
import { CircleHitDetection } from "../CircleHitDetection.js";
export class EmptyTowerSpot extends AnimatedSprite {
    constructor(position, fileName, spriteWidth, spriteHeight, scale) {
        super(position, fileName, spriteWidth, spriteHeight, scale);
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.scale = scale;
        this.hitDetection = new CircleHitDetection()
            .setPosition(position)
            .setWidth(this.width);
    }
    mouseOver(state) {
        return;
    }
}
//# sourceMappingURL=emptyTowerSpot.js.map