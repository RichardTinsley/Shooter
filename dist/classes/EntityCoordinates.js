export class EntityCoordinates {
    constructor() {
        this.position = { x: 0, y: 0 };
    }
    getPosition() {
        return this.position;
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
        return this;
    }
    getSize() {
        return this.size;
    }
    setSize(size, scale = 1.5) {
        this.size = Object.assign({}, size);
        this.scale = scale;
        this.scaleSize = {
            width: size.width * scale,
            height: size.height * scale,
        };
        return this;
    }
}
//# sourceMappingURL=EntityCoordinates.js.map