import { SIZES } from "../constants/game.js";
import { COLOURS } from "../constants/colours.js";
import { TextFactory } from "../entities/texts/TextFactory.js";
export class Debug {
    constructor(state, mouse) {
        this.state = state;
        this.mouse = mouse;
        this.isDebugMode = true;
        this.frames = 0;
        this.startTime = performance.now();
        this.FPSNormal = 0;
        this.FPS = TextFactory.createTextPlain();
        this.switchDebugMode = () => {
            this.isDebugMode = !this.isDebugMode;
        };
        this.FPS.setPosition(16, 64);
    }
    draw(ctx) {
        var _a;
        if (!this.isDebugMode)
            return;
        this.drawLevelDebugInfoGrid(ctx);
        this.drawMouseDebugInfo(ctx);
        this.drawMenuDebugInfo(ctx, (_a = this.state.getCurrentState().menu) === null || _a === void 0 ? void 0 : _a.getMenu());
        this.drawPerformanceDebugInfo(ctx);
    }
    update() {
        if (!this.isDebugMode)
            return;
        this.updateCalculateFPSNormal();
        this.updatePerformanceDebugInfo();
    }
    updateCalculateFPSNormal() {
        const t = performance.now();
        const dt = t - this.startTime;
        if (dt > 1000) {
            this.FPSNormal = (this.frames * 1000) / dt;
            this.frames = 0;
            this.startTime = t;
        }
        this.frames++;
    }
    updatePerformanceDebugInfo() {
        const FPS = Math.round(this.FPSNormal * 1000) / 1000;
        this.FPS.setText(`fps: ${FPS}`);
    }
    drawPerformanceDebugInfo(ctx) {
        ctx.fillStyle = COLOURS.SHADOW;
        ctx.fillRect(0, SIZES.TILE * 3, SIZES.TILE * 4, SIZES.TILE * 2);
        this.FPS.draw(ctx);
    }
    drawMenuDebugInfo(ctx, menu) {
        if (!menu)
            return;
        menu.forEach((item) => {
            this.drawSquareHitBox(ctx, item.hitBox);
        });
    }
    drawMouseDebugInfo(ctx) {
        this.drawDot(ctx, this.mouse.getCursor(), COLOURS.RED);
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
    drawEntitiesDebugInfo(ctx, entities) {
        entities.forEach((entity) => {
            this.drawDot(ctx, entity.position, COLOURS.BLUE);
            if (entity.waypoints)
                entity.waypoints.forEach((waypoint) => {
                    this.drawDot(ctx, waypoint, COLOURS.BRIGHT_GREEN);
                });
            if (entity.muzzle)
                this.drawDot(ctx, entity.muzzle, COLOURS.YELLOW);
        });
    }
    drawDot(ctx, item, colour) {
        ctx.fillStyle = colour;
        ctx.fillRect(item.x - 2, item.y - 2, 4, 4);
    }
    drawCircleHitbox(ctx, item) {
        ctx.beginPath();
        ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
        ctx.fillStyle = COLOURS.RED_ALPHA;
        ctx.fill();
        this.drawDot(ctx, item, COLOURS.RED);
    }
    drawSquareHitBox(ctx, item) {
        ctx.fillStyle = COLOURS.RED_ALPHA;
        ctx.fillRect(item.x, item.y, item.width, item.height);
    }
}
//# sourceMappingURL=Debug.js.map