import { drawShadow } from "../../../utilities/drawShapes.js";
export class Walking {
    constructor(components) {
        this.components = components;
    }
    draw(ctx) {
        drawShadow(ctx, this.components.position, this.components.shadowWidth);
        this.components.mouseOverEnemy.draw(ctx);
        this.components.sprite.draw(ctx);
        this.components.healthBar.draw(ctx);
    }
    update() {
        this.components.sprite.update();
        this.components.movement.update(this.components);
    }
}
//# sourceMappingURL=Walking.js.map