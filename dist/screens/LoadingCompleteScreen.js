import { TextFactory } from "../texts/TextFactory.js";
import { LoadingScreenBase } from "./LoadingScreenBase.js";
export class LoadingCompleteScreen extends LoadingScreenBase {
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
//# sourceMappingURL=LoadingCompleteScreen.js.map