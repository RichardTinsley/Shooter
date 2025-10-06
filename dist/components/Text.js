import { Component } from "../classes/Component.js";
import { FadeText } from "./TextStates/FadeText.js";
import { NormalText } from "./TextStates/NormalText.js";
import { PulsateText } from "./TextStates/PulsateText.js";
export class Text extends Component {
    constructor() {
        super();
        this.setNormalText = () => (this.state = new NormalText(this));
        this.setFadeText = () => (this.state = new FadeText(this));
        this.setPulsateText = () => (this.state = new PulsateText(this));
    }
    draw(ctx) {
        this.state.draw(ctx);
    }
    update() {
        this.state.update();
    }
}
//# sourceMappingURL=Text.js.map