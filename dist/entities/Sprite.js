import { ALL_ASSETS } from "../constants/assets.js";
export class Sprite {
    constructor(fileName, spriteWidth, spriteHeight) {
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.halfWidth = this.width / 2;
        this.drawOffsetX = 0;
        this.drawOffsetY = 0;
        this.animationFrame = 0;
        this.animationRow = 0;
        this.image = ALL_ASSETS.get(fileName);
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.spriteWidth * this.animationFrame, this.spriteHeight * this.animationRow, this.spriteWidth, this.spriteHeight, this.position.x - this.halfWidth + this.drawOffsetX, this.position.y - this.height + this.drawOffsetY, this.width, this.height);
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
    setSpriteDrawOffsets(offsetX, offsetY) {
        this.drawOffsetX = offsetX;
        this.drawOffsetY = offsetY;
        return this;
    }
}
//# sourceMappingURL=Sprite.js.map