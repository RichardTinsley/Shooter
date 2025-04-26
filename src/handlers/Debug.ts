import { SIZES } from "../constants/sizes.js";
import { COLOURS } from "../constants/colours.js";
import { TextFactory } from "../GUI/texts/TextFactory.js";
import { Screen } from "../screens/Screen.js";
import { Mouse } from "./Mouse.js";
import { BattleScreen } from "../screens/BattleScreen.js";
import { drawDot, drawRectangle } from "../utilities/drawShapes.js";
import { Time } from "./Time.js";

export class Debug {
  private isDebugMode: Boolean = true;
  private FPS: any = TextFactory.createTextPlain();

  constructor(public state: Screen, public mouse: Mouse) {
    this.FPS.setPosition({ x: SIZES.TILE, y: SIZES.TILE * 4 });
  }

  switchDebugMode = () => (this.isDebugMode = !this.isDebugMode);

  draw(ctx: CanvasRenderingContext2D): void {
    if (!this.isDebugMode) return;
    const currentState = this.state.getCurrentState();

    if (currentState instanceof BattleScreen) this.drawLevelDebugInfoGrid(ctx);

    this.drawEntitiesDebugInfo(ctx, currentState.getArray());

    this.drawMouseDebugInfo(ctx);
    this.drawPerformanceDebugInfo(ctx);
  }

  update() {
    if (!this.isDebugMode) return;
    this.FPS.setText(`fps: ${Time.calculateFPSNormal()}`);
  }

  drawPerformanceDebugInfo(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = 3;
    drawRectangle(
      ctx,
      { x: SIZES.TILE_HALF, y: SIZES.TILE * 3 },
      SIZES.TILE_HALF * 9,
      SIZES.TILE * 2,
      COLOURS.SHADOW,
      COLOURS.WHITE
    );
    this.FPS.draw(ctx);
  }

  drawMouseDebugInfo(ctx: CanvasRenderingContext2D) {
    drawDot(ctx, this.mouse.getCursor(), COLOURS.RED);
  }

  drawEntitiesDebugInfo(ctx: CanvasRenderingContext2D, entities: Array<any>) {
    entities.forEach((entity) => {
      drawDot(ctx, entity.position, COLOURS.BLUE);

      entity.hitDetection.drawHitbox(ctx);

      entity.waypoints?.forEach((waypoint: any) =>
        drawDot(ctx, waypoint, COLOURS.BRIGHT_GREEN)
      );
      // drawDot(ctx, entity.muzzle, COLOURS.YELLOW);
    });
  }

  drawLevelDebugInfoGrid(ctx: CanvasRenderingContext2D) {
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
    // if (typeof process != 'undefined')
    // console.log(`Node: ${process.memoryUsage().heapUsed / Math.pow(1000, 2)} MB`);
    // if (typeof performance.memory != 'undefined')
    // console.log(`Browser: ${performance.memory.usedJSHeapSize / Math.pow(1000, 2)} MB`);
  }
}
