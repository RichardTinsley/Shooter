import { Loading } from "./states/Loading.js";
export class Screen {
    constructor() {
        this.screen = new Loading(this);
    }
    draw(ctx) {
        this.screen.draw(ctx);
    }
    update() {
        this.screen.update();
    }
}
//# sourceMappingURL=Screen.js.map