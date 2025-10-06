import { SCREEN } from "../constants/screenSizes.js";
export function context() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    canvas.width = SCREEN.WIDTH;
    canvas.height = SCREEN.HEIGHT;
    return ctx;
}
//# sourceMappingURL=context.js.map