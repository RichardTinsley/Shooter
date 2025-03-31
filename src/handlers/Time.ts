const FRAMES: number = 60;

let previousTime: number = 0;
let eventTimer: number = 0;
let timeout: number;

export class Time {
  private static INSTANCE: Time;
  static totalSeconds: number = 0; //+8000s for over 2 hours
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

  static create() {
    if (!Time.INSTANCE) {
      Time.INSTANCE = new Time();
    }
    return Time.INSTANCE;
  }

  update() {
    const deltaTime: number = Math.round(performance.now()) - previousTime;
    Time.deltaTimeMultiplier = deltaTime / FRAMES;
    previousTime = Math.round(performance.now());

    if (eventTimer < FRAMES) {
      eventTimer += deltaTime;
      Time.eventUpdate = false;
    } else {
      eventTimer = 0;
      Time.eventUpdate = true;
    }
  }

  static displayTimer() {
    let seconds = Time.totalSeconds % 60;
    let minutes = Math.floor(Time.totalSeconds / 60) % 60;
    let hours = Math.floor(Time.totalSeconds / 60 / 60);
    const minuteString: string = String(minutes < 10 ? "0" + minutes : minutes);
    const secondString: string = String(seconds < 10 ? "0" + seconds : seconds);
    return `${hours} : ${minuteString} : ${secondString}`;
  }

  startTimer() {
    timeout = setInterval(() => {
      Time.totalSeconds++;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(timeout);
  }

  resetTimer() {
    Time.totalSeconds = 0;
    clearInterval(timeout);
    this.startTimer();
  }
}
