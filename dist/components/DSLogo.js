import { EntityComponent } from "../classes/EntityComponent.js";
import { SCREEN } from "../constants/screenSizes.js";
export class DSLogo extends EntityComponent {
    draw(ctx, coordinates) {
        ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
        ctx.drawImage(this.visual, coordinates.position.x + this.drawOffsetX, coordinates.position.y + this.drawOffsetY);
    }
    update(coordinates) {
        return;
    }
}
//# sourceMappingURL=DSLogo.js.map