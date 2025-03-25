import { SIZES } from "../constants/game.js";
import { COLOURS } from "../constants/colours.js";
import { TextFactory, TEXTS } from "../texts/TextFactory.js";

export class Debug {
  private isDebugMode: Boolean = true;
  private frames: number = 0;
  private startTime: DOMHighResTimeStamp = performance.now();
  private FPSNormal: number = 0;

  private FPS: any = TextFactory.createText(TEXTS.PLAIN);

  constructor() {
    this.FPS.setPosition(16, 64);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (!this.isDebugMode) return;

    ctx.fillStyle = COLOURS.SHADOW;
    ctx.fillRect(0, SIZES.TILE * 3, SIZES.TILE * 4, SIZES.TILE * 2);
    this.FPS.draw(ctx);
  }

  update() {
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
    this.logMemory();
  }

  logMemory() {
    // if (typeof process != 'undefined')
    // console.log(`Node: ${process.memoryUsage().heapUsed / Math.pow(1000, 2)} MB`);
    // if (typeof performance.memory != 'undefined')
    // console.log(
    //   `Browser: ${performance.memory.usedJSHeapSize / Math.pow(1000, 2)} MB`
    // );
  }
}
