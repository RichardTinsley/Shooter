import { Time } from "../../handlers/Time.js";
import { Sprite } from "./Sprite.js";
export class SpriteAnimation extends Sprite {
    constructor(fileName, spriteWidth, spriteHeight) {
        super(fileName, spriteWidth, spriteHeight);
        this.maxFrames = Math.floor(this.image.width / this.width) - 1;
        this.maxRows = Math.floor(this.image.height / this.height) - 1;
        this.maxRows === 0
            ? (this.animationState = 2)
            : (this.animationState = 3);
    }
    animate() {
        if (!Time.eventUpdate)
            return;
        switch (this.animationState) {
            case 1:
                this.animateSingleRowOnce();
                break;
            case 2:
                this.animateSingleRowRepeatedly();
                break;
            case 3:
                this.animateMultipleRowsRepeatedly();
                break;
        }
    }
    animateSingleRowOnce() {
        if (this.currentFrame < this.maxFrames) {
            this.currentFrame++;
        }
        else {
            this.animationState = 0;
        }
    }
    animateSingleRowRepeatedly() {
        if (this.currentFrame < this.maxFrames) {
            this.currentFrame++;
        }
        else {
            this.currentFrame = 0;
        }
    }
    animateMultipleRowsRepeatedly() {
        if (this.currentFrame < this.maxFrames) {
            this.currentFrame++;
        }
        else {
            this.currentRow++;
            this.currentFrame = 0;
        }
        if (this.currentRow === this.maxRows &&
            this.currentFrame <= this.maxFrames) {
            this.currentRow = 0;
            this.currentFrame = 0;
        }
    }
    setSpriteSheetRowAndAnimateOnce(animationRow = 0) {
        this.currentRow = animationRow;
        this.animationState = 1;
        return this;
    }
}
//# sourceMappingURL=SpriteAnimation.js.map