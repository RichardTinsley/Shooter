const SECOND = 1000;
const FRAMES = 60;
let previousTime = 0;
let eventTimer = 0;
let totalSeconds;
let timeout;
let deltaTimeMultiplier;
export class Time {
    constructor() {
        window.addEventListener("visibilitychange", () => this.visibilityStateTimer());
    }
    static create() {
        if (!Time.INSTANCE) {
            Time.INSTANCE = new Time();
        }
        return Time.INSTANCE;
    }
    static update(time) {
        let event = false;
        const deltaTime = time - previousTime;
        deltaTimeMultiplier = deltaTime / FRAMES;
        previousTime = time;
        if (eventTimer < FRAMES) {
            eventTimer += deltaTime;
            event = false;
        }
        else {
            eventTimer = 0;
            event = true;
        }
        return { update: event, delta: deltaTimeMultiplier };
    }
    static displayTimer() {
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60) % 60;
        let hours = Math.floor(totalSeconds / 60 / 60);
        const minuteString = String(minutes < 10 ? "0" + minutes : minutes);
        const secondString = String(seconds < 10 ? "0" + seconds : seconds);
        return `${hours} : ${minutes} : ${seconds}`;
    }
    visibilityStateTimer() {
        if (document.visibilityState === "visible") {
            this.startTimer();
        }
        else if (document.visibilityState === "hidden") {
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
    }
}
//# sourceMappingURL=Time.js.map