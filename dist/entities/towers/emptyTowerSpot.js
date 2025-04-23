import { HitDetectionCircle } from "../../handlers/HitDetectionCircle.js";
import { SpriteAnimation } from "../sprites/SpriteAnimation.js";
export class EmptyTowerSpot {
    constructor(position, fileName) {
        this.position = position;
        this.sprite = new SpriteAnimation()
            .setImage(fileName, 64, 64)
            .setPosition(position)
            .initialise();
        this.hitDetection = new HitDetectionCircle()
            .setPosition(position)
            .setWidth(64);
    }
    draw(ctx) {
        this.sprite.draw(ctx);
    }
    update() {
        this.sprite.update();
    }
    mouseClick() {
        return;
    }
    mouseOver(state) {
        return;
    }
    getType() {
        return "Tower";
    }
}
//# sourceMappingURL=emptyTowerSpot.js.map