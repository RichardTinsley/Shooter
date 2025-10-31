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
}
//# sourceMappingURL=Screen.js.map