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
        this.position = { x: 100, y: 100 };
        this.image = ALL_ASSETS.get(fileName);
        this.maxAnimationFrame =
            Math.floor(this.image.width / this.spriteWidth) - 1;
        this.maxAnimationRow =
            Math.floor(this.image.height / this.spriteHeight) - 1;
        console.log(this.maxAnimationFrame, this.maxAnimationRow);
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.spriteWidth * this.animationFrame, this.spriteHeight * this.animationRow, this.spriteWidth, this.spriteHeight, this.position.x - this.halfWidth, this.position.y - this.height, this.width, this.height);
    }
    update() {
        this.animationFrame < this.maxAnimationFrame
            ? this.animationFrame++
            : (this.animationFrame = 0);
    }
    animate() {
        throw new Error("Method not implemented.");
    }
    setPosition(x, y) {
        if (x)
            this.position.x = x;
        if (y)
            this.position.y = y;
        return this;
    }
    getPosition() {
        return this.position;
    }
    setScale(scale) {
    }
}
//# sourceMappingURL=Sprite.js.map