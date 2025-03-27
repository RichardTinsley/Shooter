import { TextFactory } from "../texts/TextFactory.js";
import { LoadScreenBase } from "./LoadScreenBase.js";
export class LoadedScreen extends LoadScreenBase {
    constructor() {
        super();
        this.begin = TextFactory.createBeginText();
    }
    draw(ctx) {
        super.draw(ctx);
        this.begin.draw(ctx);
    }
    update() {
        this.begin.update();
    }
}
//# sourceMappingURL=LoadedScreen.js.map