import { SIZES } from "../constants/game.js";
import { COLOURS } from "../constants/colours.js";
import { TextFactory } from "../entities/texts/TextFactory.js";
import { MenuButton } from "../GUI/menus/MenuButton.js";
import { Screen } from "../screens/Screen.js";
import { Mouse } from "./Mouse.js";

export class Debug {
  private isDebugMode: Boolean = true;
  private frames: number = 0;
  private startTime: DOMHighResTimeStamp = performance.now();
  private FPSNormal: number = 0;

  private FPS: any = TextFactory.createTextPlain();

  constructor(public state: Screen, public mouse: Mouse) {
    this.FPS.setPosition(16, 64);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (!this.isDebugMode) return;

    this.drawLevelDebugInfoGrid(ctx);
    this.drawMouseDebugInfo(ctx);
    this.drawMenuDebugInfo(ctx, this.state.getCurrentState().menu?.getMenu());
    this.drawPerformanceDebugInfo(ctx);
    // this.drawEntitiesDebugInfo(
    //   ctx,
    //   this.state.getCurrentState().gui.getEntities()
    // );
  }

  update() {
    if (!this.isDebugMode) return;

    this.updateCalculateFPSNormal();
    this.updatePerformanceDebugInfo();
  }

  switchDebugMode = () => {
    this.isDebugMode = !this.isDebugMode;
  };

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
      this.drawSquareHitBox(ctx, item.hitBox);
    });
  }

  drawMouseDebugInfo(ctx: CanvasRenderingContext2D) {
    this.drawDot(ctx, this.mouse.getCursor(), COLOURS.RED);
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

  drawEntitiesDebugInfo(ctx: CanvasRenderingContext2D, entities: Array<any>) {
    entities.forEach((entity) => {
      this.drawDot(ctx, entity.position, COLOURS.BLUE);
      // this.drawCircleHitbox(ctx, entity.center);
      if (entity.waypoints)
        entity.waypoints.forEach((waypoint: any) => {
          this.drawDot(ctx, waypoint, COLOURS.BRIGHT_GREEN);
        });
      if (entity.muzzle) this.drawDot(ctx, entity.muzzle, COLOURS.YELLOW);
    });
  }

  drawDot(ctx: CanvasRenderingContext2D, item: any, colour: string) {
    ctx.fillStyle = colour;
    ctx.fillRect(item.x - 2, item.y - 2, 4, 4);
  }

  drawCircleHitbox(ctx: CanvasRenderingContext2D, item: any) {
    ctx.beginPath();
    ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
    ctx.fillStyle = COLOURS.RED_ALPHA;
    ctx.fill();

    this.drawDot(ctx, item, COLOURS.RED);
  }

  drawSquareHitBox(ctx: CanvasRenderingContext2D, item: any) {
    ctx.fillStyle = COLOURS.RED_ALPHA;
    ctx.fillRect(item.x, item.y, item.width, item.height);
  }

  //   async function measureMemory() {
  //     const memorySample = await performance.measureUserAgentSpecificMemory();
  //     console.log(memorySample);
  //     runMemoryMeasurements();
  //   }
}
