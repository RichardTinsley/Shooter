const FRAMES: number = 60;
const SECOND: number = 1000;

let previousTime: number = 0;
let eventTimer: number = 0;
let timeout: number;
let totalSeconds: number = 0; //+8000s for over 2 hours

let FPSNormal: number = 0;
let frames: number = 0;
let startTime: DOMHighResTimeStamp = performance.now();

export class Time {
  private static INSTANCE: Time;
  static deltaTimeMultiplier: number = 0;
  static eventUpdate: boolean = false;

  private constructor() {
    window.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        this.startTimer();
      } else if (document.visibilityState === "hidden") {
        this.pauseTimer();
      }
    });
  }
  /// DELETE SINGLETON??
  static create() {
    if (!Time.INSTANCE) {
      Time.INSTANCE = new Time();
    }
    return Time.INSTANCE;
  }

  update() {
    const deltaTime: number = performance.now() - previousTime;
    previousTime = performance.now();

    Time.deltaTimeMultiplier = deltaTime / FRAMES;

    if (eventTimer < FRAMES) {
      eventTimer += deltaTime;
      Time.eventUpdate = false;
    } else {
      eventTimer = 0;
      Time.eventUpdate = true;
    }
  }

  static calculateFPSNormal(): number {
    const t: DOMHighResTimeStamp = performance.now();
    const deltaTime: number = t - startTime;

    if (deltaTime > SECOND) {
      FPSNormal = (frames * SECOND) / deltaTime;
      frames = 0;
      startTime = t;
    }
    frames++;
    return Math.round(FPSNormal * SECOND) / SECOND;
  }

  static displayTimer() {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let hours = Math.floor(totalSeconds / 60 / 60);
    const minuteString: string = String(minutes < 10 ? "0" + minutes : minutes);
    const secondString: string = String(seconds < 10 ? "0" + seconds : seconds);
    return `${hours} : ${minuteString} : ${secondString}`;
  }

  startTimer() {
    timeout = setInterval(() => {
      totalSeconds++;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(timeout);
  }

  resetTimer() {
    totalSeconds = 0;
    clearInterval(timeout); /// DELETE?
    this.startTimer(); /// DELETE?
  }
}
