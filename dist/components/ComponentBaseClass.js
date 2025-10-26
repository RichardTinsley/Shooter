export class ComponentBaseClass {
    constructor() {
        this.drawOffsetX = 0;
        this.drawOffsetY = 0;
    }
    setDrawOffsets(offsetX, offsetY) {
        this.drawOffsetX = offsetX;
        this.drawOffsetY = offsetY;
        return this;
    }
    setComponentInformation(information) {
        this.information = information;
        return this;
    }
}
//# sourceMappingURL=ComponentBaseClass.js.map