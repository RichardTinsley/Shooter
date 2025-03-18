import { SIZES } from "../constants/game.js";
export function context() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    canvas.width = SIZES.GAME_WIDTH;
    canvas.height = SIZES.GAME_HEIGHT;
    return ctx;
}
//# sourceMappingURL=context.js.map