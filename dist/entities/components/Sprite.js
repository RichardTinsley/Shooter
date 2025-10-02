import { ALL_ASSETS } from "../../constants/assets.js";
export class Sprite {
    constructor() {
        this.scaledWidth = this.spriteWidth;
        this.scaledHeight = this.spriteHeight;
        this.halfWidth = this.spriteWidth / 2;
        this.drawOffsetX = 0;
        this.drawOffsetY = 0;
        this.currentFrame = 0;
        this.currentRow = 0;
    }
    draw(ctx) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.scale(this.direction, 1);
        ctx.drawImage(this.image, this.spriteWidth * this.currentFrame, this.spriteHeight * this.currentRow, this.spriteWidth, this.spriteHeight, 0 - this.halfWidth + this.drawOffsetX, 0 - this.scaledHeight + this.drawOffsetY, this.scaledWidth, this.scaledHeight);
        ctx.restore();
    }
    setImage(fileName, width, height) {
        this.image = ALL_ASSETS.get(fileName);
        this.spriteWidth = width;
        this.spriteHeight = height;
        return this;
    }
    setPosition(position) {
        this.position = position;
        return this;
    }
    getPosition() {
        return this.position;
    }
    setDirection(direction) {
        this.direction = direction;
    }
    setDrawOffsets(offsetX, offsetY) {
        this.drawOffsetX = offsetX * this.getWidth();
        this.drawOffsetY = offsetY * this.getHeight();
        return this;
    }
    setScale(scale) {
        this.scaledWidth = Math.round(this.spriteWidth * scale);
        this.scaledHeight = Math.round(this.spriteHeight * scale);
        this.halfWidth = this.scaledWidth / 2;
        return this;
    }
    getWidth() {
        return this.scaledWidth;
    }
    getHeight() {
        return this.scaledHeight;
    }
}
//# sourceMappingURL=Sprite.js.map