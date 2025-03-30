const SECOND = 1000;
const FRAMES = 60;
let previousTime = 0;
let eventTimer = 0;
let totalSeconds;
let timeout;
let deltaTimeMultiplier;
export class Time {
    constructor() {
        this.event = false;
        window.addEventListener("visibilitychange", () => this.visibilityStateTimer());
    }
    update(time) {
        this.eventUpdate(time);
    }
    eventUpdate(time) {
        const deltaTime = time - previousTime;
        deltaTimeMultiplier = deltaTime / FRAMES;
        previousTime = time;
        if (eventTimer < FRAMES) {
            eventTimer += deltaTime;
            this.event = false;
        }
        else {
            eventTimer = 0;
            this.event = true;
        }
    }
    static displayTimer() {
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60) % 60;
        let hours = Math.floor(totalSeconds / 60 / 60);
        return hours + ":" + minutes + ":" + seconds;
    }
    visibilityStateTimer() {
        if (document.visibilityState === "visible")
            this.startTimer();
        else if (document.visibilityState === "hidden")
            this.pauseTimer();
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
//# sourceMappingURL=Time.js.map