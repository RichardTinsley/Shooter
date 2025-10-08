export class EntityDrawState {
    constructor(entity) {
        this.entity = entity;
    }
    draw(ctx) {
        this.entity.visual.draw(ctx, this.entity.coordinates);
    }
    update() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=EntityDrawState.js.map