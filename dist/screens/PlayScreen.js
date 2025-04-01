import { Lavoney } from "../entities/levels/Lavoney.js";
export class PlayScreen {
    constructor(screen) {
        this.screen = screen;
        this.entities = [];
        this.level = new Lavoney();
    }
    draw(ctx) {
        this.level.draw(ctx);
        this.entities.forEach((entity) => entity.draw(ctx));
    }
    update() {
        this.level.update();
        this.entities.forEach((entity) => entity.update());
    }
}
//# sourceMappingURL=PlayScreen.js.map