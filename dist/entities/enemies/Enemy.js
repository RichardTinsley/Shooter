import { Mouse, STYLES } from "../../handlers/Mouse.js";
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
        Mouse.mouseOver(this, STYLES.ENEMY);
    }
    mouseClick() {
        if (Mouse.selectedEnemy === this)
            if (Mouse.selectedEnemy) {
            }
        Mouse.selectedEnemy = this;
    }
    setState(state) {
        this.components.mouseOverEnemy.setState(state);
    }
}
//# sourceMappingURL=Enemy.js.map