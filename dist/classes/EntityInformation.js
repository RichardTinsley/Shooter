export class EntityInformation {
    constructor() {
        this.information = {
            image: document.getElementById("dslogo"),
            position: { x: 0, y: 0 },
            destination: { x: 0, y: 0 },
            size: { width: 0, height: 0 },
            scaledSize: { width: 0, height: 0 },
            speed: 0,
            scale: 0,
            halfWidth: 0,
        };
    }
    setInformation(position, size, scale) {
        this.information.position = Object.assign({}, position);
        this.information.destination = Object.assign({}, position);
        this.information.size = Object.assign({}, size);
        this.information.scale = scale;
        this.information.scaledSize = {
            width: size.width * scale,
            height: size.height * scale,
        };
        this.information.halfWidth = this.information.scaledSize.width / 2;
        return this;
    }
    getInformation() {
        return this.information;
    }
    setImage(image) {
        this.information.image = image;
        return this;
    }
}
//# sourceMappingURL=EntityInformation.js.map