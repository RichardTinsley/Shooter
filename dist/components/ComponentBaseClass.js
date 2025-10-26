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
    getComponentInformation() {
        return this.information;
    }
}
//# sourceMappingURL=ComponentBaseClass.js.map