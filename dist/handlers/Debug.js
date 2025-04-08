import { SIZES } from "../constants/game.js";
import { COLOURS } from "../constants/colours.js";
import { TextFactory } from "../GUI/texts/TextFactory.js";
import { PlayScreen } from "../screens/PlayScreen.js";
import { drawDot, drawRectangle } from "../utilities/drawShapes.js";
import { Time } from "./Time.js";
export class Debug {
    constructor(state, mouse) {
        this.state = state;
        this.mouse = mouse;
        this.isDebugMode = true;
        this.FPS = TextFactory.createTextPlain();
        this.switchDebugMode = () => (this.isDebugMode = !this.isDebugMode);
        this.FPS.setPosition({ x: SIZES.TILE, y: SIZES.TILE * 4 });
    }
    draw(ctx) {
        if (!this.isDebugMode)
            return;
        const currentState = this.state.getCurrentState();
        if (currentState instanceof PlayScreen)
            this.drawLevelDebugInfoGrid(ctx);
        this.drawEntitiesDebugInfo(ctx, currentState.getArray());
        this.drawMouseDebugInfo(ctx);
        this.drawPerformanceDebugInfo(ctx);
    }
    update() {
        if (!this.isDebugMode)
            return;
        this.FPS.setText(`fps: ${Time.calculateFPSNormal()}`);
    }
    drawPerformanceDebugInfo(ctx) {
        ctx.lineWidth = 3;
        drawRectangle(ctx, { x: SIZES.TILE_HALF, y: SIZES.TILE * 3 }, SIZES.TILE_HALF * 9, SIZES.TILE * 2, COLOURS.SHADOW, COLOURS.WHITE);
        this.FPS.draw(ctx);
    }
    drawMouseDebugInfo(ctx) {
        drawDot(ctx, this.mouse.getCursor(), COLOURS.RED);
    }
    drawEntitiesDebugInfo(ctx, entities) {
        entities.forEach((entity) => {
            var _a;
            drawDot(ctx, entity.position, COLOURS.BLUE);
            entity.hitDetection.drawHitbox(ctx);
            (_a = entity.waypoints) === null || _a === void 0 ? void 0 : _a.forEach((waypoint) => drawDot(ctx, waypoint, COLOURS.BRIGHT_GREEN));
        });
    }
    drawLevelDebugInfoGrid(ctx) {
        ctx.strokeStyle = COLOURS.LINES;
        ctx.lineWidth = 1;
        for (let row = 0; row < SIZES.ROWS; row++) {
            ctx.beginPath();
            ctx.moveTo(0, row * SIZES.TILE);
            ctx.lineTo(SIZES.GAME_WIDTH, row * SIZES.TILE);
            ctx.stroke();
            ctx.closePath();
        }
        for (let column = 0; column < SIZES.COLUMNS; column++) {
            ctx.beginPath();
            ctx.moveTo(column * SIZES.TILE, 0);
            ctx.lineTo(column * SIZES.TILE, SIZES.GAME_HEIGHT);
            ctx.stroke();
            ctx.closePath();
        }
    }
    logMemory() {
    }
}
//# sourceMappingURL=Debug.js.map