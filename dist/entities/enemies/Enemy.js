import { EnemyComponents } from "./components/EnemyComponents.js";
import { Walking } from "./states/Walking.js";
export class Enemy {
    constructor() {
        this.components = new EnemyComponents();
        this.walkingState = () => (this.state = new Walking(this.components));
    }
    draw(ctx) {
        this.state.draw(ctx);
    }
    update() {
        this.state.update();
    }
    mouseClick() {
        return;
    }
    mouseOver() {
        return;
    }
}
//# sourceMappingURL=Enemy.js.map