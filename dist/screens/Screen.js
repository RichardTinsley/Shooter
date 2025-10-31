import { SCREEN } from "../constants/screenSizes.js";
export class Screen {
    constructor() {
        this.entities = [];
    }
    draw(ctx) {
        this.entities.forEach((entity) => entity.draw(ctx));
    }
    update() {
        this.entities.forEach((entity) => entity.update());
    }
    clearScreen(ctx) {
        ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
    }
}
//# sourceMappingURL=Screen.js.map