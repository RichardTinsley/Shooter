import { checkHitBoxCollision } from "../utilities/collisionDetection.js";
const mouseSize = 3;
export class Mouse {
    constructor(state) {
        this.cursor = {
            x: 0,
            y: 0,
            radius: mouseSize,
            width: mouseSize,
            height: mouseSize,
            style: document.getElementById("canvas").style,
        };
        window.addEventListener("mousemove", (e) => {
            this.cursor.x = e.offsetX;
            this.cursor.y = e.offsetY;
            this.mouseOverMenuButton(state);
        });
        window.addEventListener("click", () => { });
    }
    mouseOverMenuButton(state) {
        state
            .getState()
            .gui.getMenu()
            .forEach((item) => {
            if (!checkHitBoxCollision(this.cursor, item.hitBox))
                item.changeState(state.mainMenuState);
        });
    }
}
//# sourceMappingURL=Mouse.js.map