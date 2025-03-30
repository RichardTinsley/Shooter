const SECOND: number = 1000;
const FRAMES: number = 60;

let previousTime: number = 0;
let eventTimer: number = 0;
let totalSeconds: number;
let timeout: number;
let deltaTimeMultiplier: number;

export class Time {
  private event: boolean = false;
  constructor() {
    window.addEventListener("visibilitychange", () =>
      this.visibilityStateTimer()
    );
  }

  update(time: number) {
    this.eventUpdate(time);
  }

  eventUpdate(time: number) {
    const deltaTime: number = time - previousTime;
    deltaTimeMultiplier = deltaTime / FRAMES; // FOR OBJECT MOVEMENT
    previousTime = time;

    if (eventTimer < FRAMES) {
      eventTimer += deltaTime;
      this.event = false;
    } else {
      eventTimer = 0;
      this.event = true;
    }
  }

  static displayTimer() {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let hours = Math.floor(totalSeconds / 60 / 60);
    // minutes = minutes < 10 ? "0" + minutes : minutes;
    // seconds = seconds < 10 ? "0" + seconds : seconds;
    return hours + ":" + minutes + ":" + seconds;
  }

  visibilityStateTimer() {
    if (document.visibilityState === "visible") this.startTimer();
    else if (document.visibilityState === "hidden") this.pauseTimer();
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
    clearInterval(timeout);
    this.startTimer();
    // totalSeconds = 8000; //+8000s for over 2 hours
  }
}
