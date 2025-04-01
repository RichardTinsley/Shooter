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

export class Debug {
  private isDebugMode: Boolean = true;
  private frames: number = 0;
  private startTime: DOMHighResTimeStamp = performance.now();
  private FPSNormal: number = 0;

  private FPS: any = TextFactory.createTextPlain();

  constructor(public state: Screen, public mouse: Mouse) {
    this.FPS.setPosition({ x: SIZES.TILE_HALF / 2, y: SIZES.TILE * 4 });
  }

  switchDebugMode = () => {
    this.isDebugMode = !this.isDebugMode;
  };

  draw(ctx: CanvasRenderingContext2D): void {
    if (!this.isDebugMode) return;

    if (this.state.getCurrentState() instanceof PlayScreen) {
      this.drawLevelDebugInfoGrid(ctx);
      this.drawEntitiesDebugInfo(ctx, this.state.getCurrentState().getArray());
    }

    this.drawMouseDebugInfo(ctx);
    this.drawMenuDebugInfo(
      ctx,
      this.state.getCurrentState().menu?.getMenuItemsArray()
    );
    this.drawPerformanceDebugInfo(ctx);
  }

  update() {
    if (!this.isDebugMode) return;

    this.updateCalculateFPSNormal();
    this.updatePerformanceDebugInfo();
  }

  updateCalculateFPSNormal() {
    const t: DOMHighResTimeStamp = performance.now();
    const dt: number = t - this.startTime;

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

  drawPerformanceDebugInfo(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = COLOURS.SHADOW;
    ctx.fillRect(0, SIZES.TILE * 3, SIZES.TILE * 4, SIZES.TILE * 2);
    this.FPS.draw(ctx);
  }

  drawMenuDebugInfo(ctx: CanvasRenderingContext2D, menu: Array<MenuButton>) {
    if (!menu) return;
    menu.forEach((item) => {
      drawSquareHitBox(ctx, item.hitBox);
    });
  }

  drawMouseDebugInfo(ctx: CanvasRenderingContext2D) {
    drawDot(ctx, this.mouse.getCursor(), COLOURS.RED);
  }

  drawEntitiesDebugInfo(ctx: CanvasRenderingContext2D, entities: Array<any>) {
    entities.forEach((entity) => {
      drawDot(ctx, entity.position, COLOURS.BLUE);
      drawCircleHitbox(ctx, entity.hitCircle, drawDot);

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
