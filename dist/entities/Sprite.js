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
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.spriteWidth * this.animationFrame, this.spriteHeight * this.animationRow, this.spriteWidth, this.spriteHeight, this.drawPositionX, this.drawPositionY, this.width, this.height);
    }
    update(event) {
        return;
    }
    setImage(fileName) {
        ALL_ASSETS.get(fileName);
        return this;
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
        this.updateSpriteDrawPosition();
        return this;
    }
    updateSpriteDrawPosition() {
        this.drawPositionX = this.position.x - this.halfWidth;
        this.drawPositionY = this.position.y - this.height;
    }
    getPosition() {
        return this.position;
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