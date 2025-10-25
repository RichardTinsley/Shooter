export class EntityCoordinates {
    constructor() {
        this.position = { x: 0, y: 0 };
        this.scale = 1.5;
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
    setSize(size, scale) {
        this.size = Object.assign({}, size);
        this.scale = scale;
        this.scaleSize = {
            width: size.width * scale,
            height: size.height * scale,
        };
        this.halfWidth = this.scaleSize.width / 2;
        return this;
    }
    setTextSize(text, height) {
        this.size = {
            width: Math.ceil(text.length * (height / 1.85)),
            height: height,
        };
        return this;
    }
}
//# sourceMappingURL=EntityCoordinates.js.map