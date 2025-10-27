import { ComponentBaseClass } from "./ComponentBaseClass.js";
export class ImageComponent extends ComponentBaseClass {
    constructor() {
        super(...arguments);
        this.currentFrame = 0;
        this.currentRow = 0;
        this.direction = 1;
    }
    draw(ctx, information) {
        ctx.save();
        ctx.translate(information.position.x, information.position.y);
        ctx.scale(this.direction, 1);
        ctx.drawImage(information.visual, information.size.width * this.currentFrame, information.size.height * this.currentRow, information.size.width, information.size.height, 0 - information.halfWidth + this.drawOffsetX, 0 - information.scaledSize.height + this.drawOffsetY, information.scaledSize.width, information.scaledSize.height);
        ctx.restore();
    }
    update(information) {
        return;
    }
}
//# sourceMappingURL=Image.js.map