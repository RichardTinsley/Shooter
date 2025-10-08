import { EntityDrawState } from "./states/EntityDrawState.js";
export class Entity {
    constructor() {
        this.setDrawState = () => (this.state = new EntityDrawState(this));
    }
    draw(ctx) {
        this.state.draw(ctx);
    }
    update() {
        this.state.update();
    }
}
//# sourceMappingURL=Entity.js.map