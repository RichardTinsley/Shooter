import { ALL_ASSETS } from "../../constants/assets.js";
export class Sprite {
    constructor(fileName, width, height) {
        this.width = width;
        this.height = height;
        this.scaledWidth = this.width;
        this.scaledHeight = this.height;
        this.halfWidth = this.width / 2;
        this.drawOffsetX = 0;
        this.drawOffsetY = 0;
        this.animationFrame = 0;
        this.animationRow = 0;
        this.image = ALL_ASSETS.get(fileName);
    }
    draw(ctx) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.scale(this.direction, 1);
        ctx.drawImage(this.image, this.width * this.animationFrame, this.height * this.animationRow, this.width, this.height, 0 - this.halfWidth + this.drawOffsetX, 0 - this.scaledHeight + this.drawOffsetY, this.scaledWidth, this.scaledHeight);
        ctx.restore();
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
        this.drawOffsetX = offsetX * this.getScaledWidth();
        this.drawOffsetY = offsetY * this.getScaledHeight();
        return this;
    }
    setScale(scale) {
        this.scaledWidth = Math.round(this.width * scale * 100) / 100;
        this.scaledHeight = Math.round(this.height * scale * 100) / 100;
        this.halfWidth = this.scaledWidth / 2;
        return this;
    }
    getScaledWidth() {
        return this.scaledWidth;
    }
    getScaledHeight() {
        return this.scaledHeight;
    }
    getWidth() {
        return this.width;
    }
}
//# sourceMappingURL=Sprite.js.map