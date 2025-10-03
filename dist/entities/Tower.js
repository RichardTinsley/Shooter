import { HitDetectionCircle } from "./components/HitDetectionCircle.js";
import { SpriteAnimation } from "./components/SpriteAnimation.js";
export class Tower {
    constructor(position, fileName) {
        this.position = position;
        this.sprite = new SpriteAnimation()
            .setImage(fileName, 64, 64)
            .setPosition(position)
            .setScale(1)
            .initialise();
        this.hitDetection = new HitDetectionCircle().setPosition(position).setWidth(64);
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
//# sourceMappingURL=Tower.js.map