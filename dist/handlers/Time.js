const FRAMES = 60;
const SECOND = 1000;
let previousTime = 0;
let eventTimer = 0;
let timeout;
let totalSeconds = 0;
let FPSNormal = 0;
let frames = 0;
let startTime = performance.now();
export class Time {
    constructor() {
        window.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible") {
                Time.startTimer();
            }
            else if (document.visibilityState === "hidden") {
                this.pauseTimer();
            }
        });
    }
    update() {
        const deltaTime = performance.now() - previousTime;
        previousTime = performance.now();
        Time.deltaTimeMultiplier = deltaTime / FRAMES;
        if (eventTimer < FRAMES) {
            eventTimer += deltaTime;
            Time.eventUpdate = false;
        }
        else {
            eventTimer = 0;
            Time.eventUpdate = true;
        }
    }
    static calculateFPSNormal() {
        const t = performance.now();
        const deltaTime = t - startTime;
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
        const minuteString = String(minutes < 10 ? "0" + minutes : minutes);
        const secondString = String(seconds < 10 ? "0" + seconds : seconds);
        return `${hours} : ${minuteString} : ${secondString}`;
    }
    static startTimer() {
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
        Time.startTimer();
    }
}
Time.deltaTimeMultiplier = 0;
Time.eventUpdate = false;
//# sourceMappingURL=Time.js.map