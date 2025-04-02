import { ALL_ASSETS } from "../constants/assets.js";
import { checkCircleCollision } from "../utilities/collisionDetection.js";
export class Sprite {
    constructor(position, fileName, spriteWidth, spriteHeight) {
        this.position = position;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.scale = 1;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.halfWidth = this.width / 2;
        this.drawPositionX = this.position.x - this.halfWidth;
        this.drawPositionY = this.position.y - this.height;
        this.drawOffsetY = 0;
        this.hitCircleOffsetX = 0;
        this.hitCircle = {
            x: this.position.x,
            y: this.position.y - this.height / 2,
            radius: this.halfWidth,
        };
        this.animationFrame = 0;
        this.animationRow = 0;
        this.image = ALL_ASSETS.get(fileName);
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.spriteWidth * this.animationFrame, this.spriteHeight * this.animationRow, this.spriteWidth, this.spriteHeight, this.drawPositionX, this.drawPositionY, this.width, this.height);
    }
    update() { }
    setImage(fileName) {
        ALL_ASSETS.get(fileName);
        return this;
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
        return this;
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
    checkCollision(cursor) {
        return checkCircleCollision(cursor, this.hitCircle, cursor.radius, this.hitCircle.radius);
    }
    mouseOver(state) {
        return;
    }
}
//# sourceMappingURL=Sprite.js.map