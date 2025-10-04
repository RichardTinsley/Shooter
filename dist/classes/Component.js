export class Component {
    constructor() {
        this.drawOffsetX = 0;
        this.drawOffsetY = 0;
    }
    getSharedPosition() {
        return this.position;
    }
    setSharedPosition(position) {
        this.position = position;
        return this;
    }
    getSharedSize() {
        return this.size;
    }
    setSharedSize(size) {
        this.size = size;
        return this;
    }
    setDrawOffsets(offsetY, offsetX = this.size.width / 2) {
        this.drawOffsetX = offsetX;
        this.drawOffsetY = offsetY;
        return this;
    }
}
//# sourceMappingURL=Component.js.map