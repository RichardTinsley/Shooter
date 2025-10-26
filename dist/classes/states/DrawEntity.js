import { Components } from "../../factories/ComponentFactory.js";
import { RenderComponents } from "../RenderComponents.js";
export class DrawEntity extends RenderComponents {
    constructor(entity) {
        super();
        this.setComponent(Components.IMAGE);
    }
}
//# sourceMappingURL=DrawEntity.js.map