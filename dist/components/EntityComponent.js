export class ComponentBaseClass {
    constructor() {
        this.drawOffsetX = 0;
        this.drawOffsetY = 0;
    }
    setDrawOffsets(drawOffsets) {
        this.drawOffsetX = drawOffsets.width;
        this.drawOffsetY = drawOffsets.height;
        return this;
    }
}
//# sourceMappingURL=EntityComponent.js.map