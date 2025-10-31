import { GUIEntityFactory } from "../factories/GUIEntityFactory.js";
import { MenuButtonFactory } from "../factories/MenuButtonFactory.js";
import { Screen } from "./Screen.js";
export class BeginScreen extends Screen {
    constructor(state) {
        super();
        this.state = state;
        const entityFactory = new GUIEntityFactory();
        const menuButtonFactory = new MenuButtonFactory();
        this.entities.push(entityFactory.DSLogo());
        this.entities.push(entityFactory.DSTitle());
        this.entities.push(menuButtonFactory.BeginButton());
    }
    draw(ctx) {
        this.clearScreen(ctx);
        super.draw(ctx);
    }
}
//# sourceMappingURL=BeginScreen.js.map