import { SCREEN } from "../constants/screenSizes.js";
import { EntityFactory } from "../factories/EntityFactory.js";
import { Screen } from "./Screen.js";
export class BeginScreen extends Screen {
    constructor(state) {
        super();
        this.state = state;
        const entityFactory = new EntityFactory();
        this.entities.push(entityFactory.DSLogo());
        this.entities.push(entityFactory.DSTitle());
    }
    draw(ctx) {
        ctx.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
        super.draw(ctx);
    }
}
//# sourceMappingURL=BeginScreen.js.map