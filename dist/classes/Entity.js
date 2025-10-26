import { DrawEntityComponents } from "./states/DrawEntityComponents.js";
export class Entity {
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
        this.setDrawComponents = () => {
            this.components = new DrawEntityComponents();
            this.components.setAllComponentInformation(this.information);
            return this;
        };
    }
    setEntityInformation(position, size, scale) {
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
    setImage(image) {
        this.information.image = image;
        return this;
    }
    getComponents() {
        return this.components;
    }
}
//# sourceMappingURL=Entity.js.map