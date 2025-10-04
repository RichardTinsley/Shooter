export class Component {
    constructor() {
        this.drawOffsetX = 0;
        this.drawOffsetY = 0;
    }
    setPositionPointer(position) {
        this.position = position;
        return this;
    }
    setSizePointer(size) {
        this.size = size;
        return this;
    }
    setDrawOffsets(offsetX, offsetY) {
        this.drawOffsetX = offsetX;
        this.drawOffsetY = offsetY;
        return this;
    }
}
//# sourceMappingURL=Component.js.map