import { ComponentBaseClass } from "./ComponentBaseClass.js";
export class ImageComponent extends ComponentBaseClass {
    constructor() {
        super(...arguments);
        this.currentFrame = 0;
        this.currentRow = 0;
        this.direction = 1;
    }
    draw(ctx) {
        ctx.save();
        ctx.translate(this.information.position.x, this.information.position.y);
        ctx.scale(this.direction, 1);
        ctx.drawImage(this.information.image, this.information.size.width * this.currentFrame, this.information.size.height * this.currentRow, this.information.size.width, this.information.size.height, 0 - this.information.halfWidth + this.drawOffsetX, 0 - this.information.scaledSize.height + this.drawOffsetY, this.information.scaledSize.width, this.information.scaledSize.height);
        ctx.restore();
    }
    update() {
        return;
    }
}
//# sourceMappingURL=Image.js.map