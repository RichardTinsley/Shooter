import { SIZES } from "../constants/game.js";
import { COLOURS } from "../constants/colours.js";
import { TextFactory } from "../entities/texts/TextFactory.js";
import { MenuButton } from "../GUI/menus/MenuButton.js";
import { Screen } from "../screens/Screen.js";
import { Mouse } from "./Mouse.js";
import { PlayScreen } from "../screens/PlayScreen.js";
import {
  drawDot,
  drawCircleHitbox,
  drawSquareHitBox,
} from "../utilities/drawShapes.js";
import { Time } from "./Time.js";

export class Debug {
  private isDebugMode: Boolean = true;
  private FPS: any = TextFactory.createTextPlain();

  constructor(public state: Screen, public mouse: Mouse) {
    this.FPS.setPosition({ x: SIZES.TILE_HALF / 2, y: SIZES.TILE * 4 });
  }

  switchDebugMode = () => (this.isDebugMode = !this.isDebugMode);

  draw(ctx: CanvasRenderingContext2D): void {
    if (!this.isDebugMode) return;
    const currentState = this.state.getCurrentState();

    if (currentState instanceof PlayScreen) this.drawLevelDebugInfoGrid(ctx);

    this.drawEntitiesDebugInfo(ctx, currentState.getArray());

    this.drawMouseDebugInfo(ctx);
    this.drawPerformanceDebugInfo(ctx);
  }

  update() {
    if (!this.isDebugMode) return;
    this.FPS.setText(`fps: ${Time.calculateFPSNormal()}`);
  }

  drawPerformanceDebugInfo(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = COLOURS.SHADOW;
    ctx.fillRect(0, SIZES.TILE * 3, SIZES.TILE * 4, SIZES.TILE * 2);
    this.FPS.draw(ctx);
  }

  drawMouseDebugInfo(ctx: CanvasRenderingContext2D) {
    drawDot(ctx, this.mouse.getCursor(), COLOURS.RED);
  }

  drawEntitiesDebugInfo(ctx: CanvasRenderingContext2D, entities: Array<any>) {
    entities.forEach((entity) => {
      drawDot(ctx, entity.position, COLOURS.BLUE);

      entity.drawHitbox(ctx);

      entity.waypoints?.forEach((waypoint: any) => {
        drawDot(ctx, waypoint, COLOURS.BRIGHT_GREEN);
      });
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
}
