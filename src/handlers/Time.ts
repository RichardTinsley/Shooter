const SECOND: number = 1000;
const FRAMES: number = 60;

let previousTime: number = 0;
let eventTimer: number = 0;
let totalSeconds: number;
let timeout: number;
let deltaTimeMultiplier: number;

export class Time {
  private static INSTANCE: Time;

  private constructor() {
    window.addEventListener("visibilitychange", () =>
      this.visibilityStateTimer()
    );
  }

  static create() {
    if (!Time.INSTANCE) {
      Time.INSTANCE = new Time();
    }
    return Time.INSTANCE;
  }

  static update(time: number): [event: boolean, deltaTimeMultiplier: number] {
    let event: boolean = false;
    const deltaTime: number = time - previousTime;
    deltaTimeMultiplier = deltaTime / FRAMES; // FOR OBJECT MOVEMENT
    previousTime = time;

    if (eventTimer < FRAMES) {
      eventTimer += deltaTime;
      event = false;
    } else {
      eventTimer = 0;
      event = true;
    }
    return [event, deltaTimeMultiplier];
  }

  static displayTimer() {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let hours = Math.floor(totalSeconds / 60 / 60);
    const minuteString: string = String(minutes < 10 ? "0" + minutes : minutes);
    const secondString: string = String(seconds < 10 ? "0" + seconds : seconds);
    return `${hours} : ${minutes} : ${seconds}`;
  }

  visibilityStateTimer() {
    if (document.visibilityState === "visible") {
      this.startTimer();
    } else if (document.visibilityState === "hidden") {
      this.pauseTimer();
    }
  }

  startTimer() {
    timeout = setInterval(() => {
      totalSeconds++;
    }, 1000);

    console.log("START");
  }

  pauseTimer() {
    clearInterval(timeout);
    console.log("PAUSE");
  }

  resetTimer() {
    totalSeconds = 0;
    clearInterval(timeout);
    this.startTimer();
    // totalSeconds = 8000; //+8000s for over 2 hours
  }
}
