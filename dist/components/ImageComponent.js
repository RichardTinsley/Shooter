import { EntityComponent } from "../classes/EntityComponent.js";
import { SCREEN } from "../constants/screenSizes.js";
export class ImageComponent extends EntityComponent {
    constructor() {
        super(...arguments);
        this.currentFrame = 0;
        this.currentRow = 0;
        this.direction = 1;
    }
    draw(ctx, coordinates) {
        ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
        ctx.save();
        ctx.translate(coordinates.position.x, coordinates.position.y);
        ctx.scale(this.direction, 1);
        ctx.drawImage(this.image, coordinates.size.width * this.currentFrame, coordinates.size.height * this.currentRow, coordinates.size.width, coordinates.size.height, 0 - coordinates.halfWidth + this.drawOffsetX, 0 - coordinates.scaleSize.height + this.drawOffsetY, coordinates.scaleSize.width, coordinates.scaleSize.height);
        ctx.restore();
    }
    update(coordinates) {
        return;
    }
}
//# sourceMappingURL=ImageComponent.js.map