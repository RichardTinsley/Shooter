import { DrawEntity } from "./states/DrawEntity.js";
import { Entity } from "./Entity.js";
export class ImageEntity extends Entity {
    constructor() {
        super();
        this.components = new DrawEntity(this);
    }
}
//# sourceMappingURL=ImageEntity.js.map