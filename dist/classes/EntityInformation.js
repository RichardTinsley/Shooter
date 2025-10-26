export class EntityInformation {
    setInformation(position, size, scale) {
        this.position = Object.assign({}, position);
        this.destination = Object.assign({}, position);
        this.size = Object.assign({}, size);
        this.scale = scale;
        this.scaledSize = {
            width: size.width * scale,
            height: size.height * scale,
        };
        this.halfWidth = this.scaledSize.width / 2;
        return this;
    }
    getInformation() {
        return this;
    }
    setImage(image) {
        this.image = image;
        return this;
    }
}
//# sourceMappingURL=EntityInformation.js.map