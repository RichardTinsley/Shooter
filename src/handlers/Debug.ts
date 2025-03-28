import { SIZES } from "../constants/game.js";
import { COLOURS } from "../constants/colours.js";
import { TextFactory } from "../texts/TextFactory.js";
import { MenuButton } from "../components/MenuButton.js";
import { State } from "../states/State.js";

export class Debug {
  private isDebugMode: Boolean = true;
  private frames: number = 0;
  private startTime: DOMHighResTimeStamp = performance.now();
  private FPSNormal: number = 0;

  private FPS: any = TextFactory.createTextPlain();

  constructor(public state: State) {
    this.FPS.setPosition(16, 64);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (!this.isDebugMode) return;

    this.drawPerformanceDebugInfo(ctx);
    this.drawMenuDebugInfo(ctx, this.state.getState().gui.getMenu());
  }

  update() {
    if (!this.isDebugMode) return;

    this.calculateFPSNormal();
    this.performanceDebugInfo();
  }

  switchDebugMode = () => {
    this.isDebugMode = !this.isDebugMode;
  };

  calculateFPSNormal() {
    const t: DOMHighResTimeStamp = performance.now();
    const dt: number = t - this.startTime;

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

  drawPerformanceDebugInfo(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = COLOURS.SHADOW;
    ctx.fillRect(0, SIZES.TILE * 3, SIZES.TILE * 4, SIZES.TILE * 2);
    this.FPS.draw(ctx);
  }

  drawMenuDebugInfo(ctx: CanvasRenderingContext2D, menu: Array<MenuButton>) {
    menu.forEach((item) => {
      this.drawSquareHitBox(ctx, item.hitBox);
    });
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
