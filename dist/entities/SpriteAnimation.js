import { Time } from "../handlers/Time.js";
import { Sprite } from "./Sprite.js";
export class SpriteAnimation extends Sprite {
    constructor(fileName, spriteWidth, spriteHeight) {
        super(fileName, spriteWidth, spriteHeight);
        this.maxAnimationFrame = this.getSpriteSheetDimensions(this.image.width, this.width);
        this.maxAnimationRow = this.getSpriteSheetDimensions(this.image.height, this.height);
        this.maxAnimationRow === 0
            ? (this.animationState = 0)
            : (this.animationState = 1);
    }
    update() {
        if (!Time.eventUpdate)
            return;
        switch (this.animationState) {
            case 0:
                this.animateFrames();
                break;
            case 1:
                this.animateRows();
                break;
        }
    }
    animateFrames() {
        if (this.animationFrame < this.maxAnimationFrame) {
            this.animationFrame++;
        }
        else {
            this.animationFrame = 0;
        }
    }
    animateRows() {
        if (this.animationFrame < this.maxAnimationFrame) {
            this.animationFrame++;
        }
        else {
            this.animationRow++;
            this.animationFrame = 0;
        }
        if (this.animationRow === this.maxAnimationRow &&
            this.animationFrame <= this.maxAnimationFrame) {
            this.animationRow = 0;
            this.animationFrame = 0;
        }
    }
    getSpriteSheetDimensions(sheet, sprite) {
        return Math.floor(sheet / sprite) - 1;
    }
}
//# sourceMappingURL=SpriteAnimation.js.map