const FRAMES = 60;
let previousTime = 0;
let eventTimer = 0;
let timeout;
let totalSeconds = 0;
export class Time {
    constructor() {
        window.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible") {
                this.startTimer();
            }
            else if (document.visibilityState === "hidden") {
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
        const deltaTime = performance.now() - previousTime;
        Time.deltaTimeMultiplier = deltaTime / FRAMES;
        previousTime = performance.now();
        if (eventTimer < FRAMES) {
            eventTimer += deltaTime;
            Time.eventUpdate = false;
        }
        else {
            eventTimer = 0;
            Time.eventUpdate = true;
        }
    }
    static displayTimer() {
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60) % 60;
        let hours = Math.floor(totalSeconds / 60 / 60);
        const minuteString = String(minutes < 10 ? "0" + minutes : minutes);
        const secondString = String(seconds < 10 ? "0" + seconds : seconds);
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
        clearInterval(timeout);
        this.startTimer();
    }
}
Time.deltaTimeMultiplier = 0;
Time.eventUpdate = false;
//# sourceMappingURL=Time.js.map