import { ALL_ASSETS } from "../constants/assets.js";
export class Sprite {
    constructor(fileName, spriteWidth, spriteHeight) {
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.scale = 1;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.halfWidth = this.width / 2;
        this.animationFrame = 0;
        this.animationRow = 0;
        this.image = ALL_ASSETS.get(fileName);
        this.maxAnimationFrame =
            Math.floor(this.image.width / this.spriteWidth) - 1;
        this.maxAnimationRow =
            Math.floor(this.image.height / this.spriteHeight) - 1;
        this.maxAnimationRow === 0
            ? (this.state = 0)
            : (this.state = 1);
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.spriteWidth * this.animationFrame, this.spriteHeight * this.animationRow, this.spriteWidth, this.spriteHeight, this.position.x - this.halfWidth, this.position.y - this.height, this.width, this.height);
    }
    update() {
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
            this.animationFrame < this.maxAnimationFrame) {
            this.animationRow = 0;
            this.animationFrame = 0;
        }
    }
    setPosition(x, y) {
        this.position = { x: x, y: y };
        return this;
    }
    getPosition() {
        return this.position;
    }
    setScale(scale) {
        this.scale = scale;
        this.width = Math.round(this.spriteWidth * this.scale * 100) / 100;
        this.height = Math.round(this.spriteHeight * this.scale * 100) / 100;
        return this;
    }
}
//# sourceMappingURL=Sprite.js.map