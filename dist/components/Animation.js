import { ImageComponent } from "./Image.js";
export var Animate;
(function (Animate) {
    Animate[Animate["Finished"] = 0] = "Finished";
    Animate[Animate["RowOnce"] = 1] = "RowOnce";
    Animate[Animate["RowRepeat"] = 2] = "RowRepeat";
    Animate[Animate["RowsRepeat"] = 3] = "RowsRepeat";
})(Animate || (Animate = {}));
export class AnimationComponent extends ImageComponent {
    constructor() {
        super();
    }
    update() {
        switch (this.animationState) {
            case Animate.RowOnce:
                this.animateSingleRowOnce();
                break;
            case Animate.RowRepeat:
                this.animateSingleRowRepeatedly();
                break;
            case Animate.RowsRepeat:
                this.animateMultipleRowsRepeatedly();
                break;
        }
    }
    initialise() {
        this.maxRows === 0
            ? (this.animationState = Animate.RowRepeat)
            : (this.animationState = Animate.RowsRepeat);
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
            this.animationState = Animate.Finished;
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
        if (this.currentRow === this.maxRows && this.currentFrame <= this.maxFrames) {
            this.currentRow = 0;
            this.currentFrame = 0;
        }
    }
}
//# sourceMappingURL=Animation.js.map