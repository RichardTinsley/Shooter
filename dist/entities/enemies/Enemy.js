import { MovingSprite } from "../MovingSprite.js";
export class Enemy extends MovingSprite {
    draw(ctx) {
        this.contextSave(ctx);
        super.draw(ctx);
        this.contextRestore(ctx);
    }
    update() { }
    checkWaypointArrival() {
    }
    checkEndpointArrival() {
    }
    checkEnemyHealth() {
    }
    updateDeathAnimation() {
    }
    updatePriorityDistance() {
    }
}
//# sourceMappingURL=Enemy.js.map