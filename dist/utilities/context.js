import { SCREEN_SIZES } from "../constants/screenSizes.js";
export function context() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    canvas.width = SCREEN_SIZES.SCREEN_WIDTH;
    canvas.height = SCREEN_SIZES.SCREEN_HEIGHT;
    return ctx;
}
//# sourceMappingURL=context.js.map