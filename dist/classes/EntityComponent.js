export class EntityComponent {
    constructor() {
        this.drawOffsetX = 0;
        this.drawOffsetY = 0;
    }
    setVisual(visual) {
        this.visual = visual;
        return this;
    }
    setDrawOffsets(drawOffsets) {
        this.drawOffsetX = drawOffsets.width;
        this.drawOffsetY = drawOffsets.height;
        return this;
    }
}
//# sourceMappingURL=EntityComponent.js.map