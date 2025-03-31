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
        if (!this.isDebugMode)
            return;
        this.drawPerformanceDebugInfo(ctx);
        this.drawMouseDebugInfo(ctx);
        this.drawMenuDebugInfo(ctx, this.state.getCurrentState().gui.getMenu());
        this.drawEntitiesDebugInfo(ctx, this.state.getCurrentState().gui.getEntities());
    }
    update() {
        if (!this.isDebugMode)
            return;
        this.calculateFPSNormal();
        this.performanceDebugInfo();
    }
    calculateFPSNormal() {
        const t = performance.now();
        const dt = t - this.startTime;
        if (dt > 1000) {
            this.FPSNormal = (this.frames * 1000) / dt;
            this.frames = 0;
            this.startTime = t;
        }
        this.frames++;
    }
    performanceDebugInfo() {
        const FPS = Math.round(this.FPSNormal * 1000) / 1000;
        this.FPS.setText(`fps: ${FPS}`);
    }
    drawPerformanceDebugInfo(ctx) {
        ctx.fillStyle = COLOURS.SHADOW;
        ctx.fillRect(0, SIZES.TILE * 3, SIZES.TILE * 4, SIZES.TILE * 2);
        this.FPS.draw(ctx);
    }
    drawMenuDebugInfo(ctx, menu) {
        menu.forEach((item) => {
            this.drawSquareHitBox(ctx, item.hitBox);
        });
    }
    drawMouseDebugInfo(ctx) {
        this.drawDot(ctx, this.mouse.getCursor(), COLOURS.RED);
    }
    levelDebugInfoGrid(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = COLOURS.LINES;
        ctx.lineWidth = 1;
        for (let row = 0; row < SIZES.ROWS; row++)
            for (let column = 0; column < SIZES.COLUMNS; column++)
                ctx.strokeRect(column * SIZES.TILE, row * SIZES.TILE, SIZES.TILE, SIZES.TILE);
        ctx.closePath();
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