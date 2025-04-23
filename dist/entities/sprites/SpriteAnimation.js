import { Time } from "../../handlers/Time.js";
import { Sprite } from "./Sprite.js";
export var ANIMATE;
(function (ANIMATE) {
    ANIMATE[ANIMATE["FINISHED"] = 0] = "FINISHED";
    ANIMATE[ANIMATE["ROW_ONCE"] = 1] = "ROW_ONCE";
    ANIMATE[ANIMATE["ROW_REPEATEDLY"] = 2] = "ROW_REPEATEDLY";
    ANIMATE[ANIMATE["ROWS_REPEATEDLY"] = 3] = "ROWS_REPEATEDLY";
})(ANIMATE || (ANIMATE = {}));
export class SpriteAnimation extends Sprite {
    constructor() {
        super();
    }
    update() {
        if (!Time.eventUpdate)
            return;
        switch (this.animationState) {
            case ANIMATE.ROW_ONCE:
                this.animateSingleRowOnce();
                break;
            case ANIMATE.ROW_REPEATEDLY:
                this.animateSingleRowRepeatedly();
                break;
            case ANIMATE.ROWS_REPEATEDLY:
                this.animateMultipleRowsRepeatedly();
                break;
        }
    }
    initialise() {
        this.maxFrames = Math.floor(this.image.width / this.spriteWidth) - 1;
        this.maxRows = Math.floor(this.image.height / this.spriteHeight) - 1;
        this.maxRows === 0
            ? (this.animationState = ANIMATE.ROW_REPEATEDLY)
            : (this.animationState = ANIMATE.ROWS_REPEATEDLY);
        return this;
    }
    setSpriteSheetRowAndAnimateOnce(row = 0, state) {
        this.currentRow = row;
        this.animationState = state;
        return this;
    }
    animateSingleRowOnce() {
        if (this.currentFrame < this.maxFrames) {
            this.currentFrame++;
        }
        else {
            this.animationState = ANIMATE.FINISHED;
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
}
//# sourceMappingURL=SpriteAnimation.js.map