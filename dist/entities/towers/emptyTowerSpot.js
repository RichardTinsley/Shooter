import { CircleHitDetection } from "../CircleHitDetection.js";
import { SpriteAnimation } from "../SpriteAnimation.js";
export class EmptyTowerSpot {
    constructor(position, fileName) {
        this.sprite = new SpriteAnimation(fileName, 64, 64).setPosition(position);
        this.hitDetection = new CircleHitDetection()
            .setPosition(position)
            .setWidth(64);
    }
    mouseOver(state) {
        return;
    }
}
//# sourceMappingURL=emptyTowerSpot.js.map