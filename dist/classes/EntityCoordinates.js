export class EntityCoordinates {
    getPosition() {
        return this.position;
    }
    setPosition(position) {
        this.position = Object.assign({}, position);
        return this;
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
    getSize() {
        return this.size;
    }
}
//# sourceMappingURL=EntityCoordinates.js.map