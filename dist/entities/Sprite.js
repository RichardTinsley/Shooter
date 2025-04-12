import { ALL_ASSETS } from "../constants/assets.js";
export class Sprite {
    constructor(position, fileName, spriteWidth, spriteHeight, scale) {
        this.position = position;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.scale = scale;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.halfWidth = this.width / 2;
        this.drawOffsetX = 0;
        this.drawOffsetY = 0;
        this.animationFrame = 0;
        this.animationRow = 0;
        this.setScale(scale);
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
        this.position = Object.assign({}, position);
        return this;
    }
    getPosition() {
        return this.position;
    }
    setDrawOffsets(offsetX, offsetY) {
        this.drawOffsetX = offsetX;
        this.drawOffsetY = offsetY;
    }
    setScale(scale) {
        this.scale = scale;
        this.width = Math.round(this.spriteWidth * this.scale * 100) / 100;
        this.height = Math.round(this.spriteHeight * this.scale * 100) / 100;
        this.halfWidth = this.width / 2;
        return this;
    }
}
//# sourceMappingURL=Sprite.js.map