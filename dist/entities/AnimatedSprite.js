import { Time } from "../handlers/Time.js";
import { Sprite } from "./Sprite.js";
export class AnimatedSprite extends Sprite {
    constructor(position, fileName, spriteWidth, spriteHeight) {
        super(position, fileName, spriteWidth, spriteHeight);
        this.maxAnimationFrame = this.getSpriteSheetDimensions(this.image.width, this.spriteWidth);
        this.maxAnimationRow = this.getSpriteSheetDimensions(this.image.height, this.spriteHeight);
        this.maxAnimationRow === 0
            ? (this.state = 0)
            : (this.state = 1);
    }
    draw(ctx) {
        super.draw(ctx);
    }
    update() {
        if (!Time.eventUpdate)
            return;
        switch (this.state) {
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
//# sourceMappingURL=AnimatedSprite.js.map