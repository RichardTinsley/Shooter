import { Component } from "../classes/Component.js";
import { FadeText } from "./TextStates/FadeText.js";
import { NormalText } from "./TextStates/NormalText.js";
export class Text extends Component {
    constructor() {
        super();
        this.setNormalText = () => (this.state = new NormalText(this));
        this.setFadeText = () => (this.state = new FadeText(this));
    }
    draw(ctx) {
        this.state.draw(ctx);
    }
    update() {
        this.state.update();
    }
}
//# sourceMappingURL=Text.js.map