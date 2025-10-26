import { ComponentBaseClass } from "./ComponentBaseClass.js";
export class ImageComponent extends ComponentBaseClass {
    constructor() {
        super(...arguments);
        this.currentFrame = 0;
        this.currentRow = 0;
        this.direction = 1;
    }
    draw(ctx, coordinates) {
        ctx.save();
        ctx.translate(coordinates.position.x, coordinates.position.y);
        ctx.scale(this.direction, 1);
        ctx.drawImage(this.image, coordinates.size.width * this.currentFrame, coordinates.size.height * this.currentRow, coordinates.size.width, coordinates.size.height, 0 - coordinates.halfWidth + coordinates.drawOffsetX, 0 - coordinates.scaledSize.height + coordinates.drawOffsetY, coordinates.scaledSize.width, coordinates.scaledSize.height);
        ctx.restore();
    }
    update(coordinates) {
        return;
    }
    setImage(image) {
        this.image = image;
        return this;
    }
}
//# sourceMappingURL=Image.js.map