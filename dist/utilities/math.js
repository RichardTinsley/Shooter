export function oscillate(waveType, frequency, amplitude) {
    const time = Date.now() / 1000;
    const x = time * frequency;
    const adj = x < 0 ? amplitude : -amplitude;
    switch (waveType) {
        case 0:
            return Math.sin(2 * Math.PI * x) * amplitude;
        case 1:
            return Math.cos(2 * Math.PI * x) * amplitude;
        case 2:
            return Math.floor(Math.sin(2 * Math.PI * x)) * amplitude * 2 + amplitude;
        case 3:
            return ((x % frequency) / frequency) * amplitude * 2 + adj;
        case 4:
            return ((Math.abs(((x % frequency) / frequency) * amplitude * 2 + adj) -
                amplitude / 2) *
                2);
        default:
            return 0;
    }
}
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export function randomFloat(min, max) {
    return ~~((Math.random() * (max - min) + min) * 100) / 100;
}
//# sourceMappingURL=math.js.map