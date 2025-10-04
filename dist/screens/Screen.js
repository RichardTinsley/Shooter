import { Loading } from "./states/Loading.js";
export class Screen {
    constructor() {
        this.state = new Loading(this);
    }
    draw(ctx) {
        this.state.draw(ctx);
    }
    update() {
        this.state.update();
    }
}
//# sourceMappingURL=Screen.js.map