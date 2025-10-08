import { Entity } from "./Entity.js";
export class ImageEntity extends Entity {
    draw(ctx) {
        this.image.draw(ctx, this.EntityStatus);
    }
    update() { }
    setImage(image) {
        this.image = image;
        return this;
    }
}
//# sourceMappingURL=ImageEntity.js.map