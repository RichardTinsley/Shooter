import { ALL_ASSETS } from "../constants/assets.js";
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
        ctx.drawImage(this.image, this.width * this.animationFrame, this.height * this.animationRow, this.width, this.height, this.position.x - this.halfWidth + this.drawOffsetX, this.position.y - this.height + this.drawOffsetY, this.scaledWidth, this.scaledHeight);
    }
    setImage(fileName) {
        this.image = ALL_ASSETS.get(fileName);
        return this;
    }
    setPosition(position) {
        this.position = position;
        return this;
    }
    getPosition() {
        return this.position;
    }
    setDrawOffsets(offsetX, offsetY) {
        this.drawOffsetX = offsetX;
        this.drawOffsetY = offsetY;
        return this;
    }
    setScale(scale) {
        this.scaledWidth = Math.round(this.width * scale * 100) / 100;
        this.scaledHeight = Math.round(this.height * scale * 100) / 100;
        this.halfWidth = this.width / 2;
        return this;
    }
    getScaledWidth() {
        return this.scaledWidth;
    }
    getScaledHeight() {
        return this.scaledHeight;
    }
}
//# sourceMappingURL=Sprite.js.map