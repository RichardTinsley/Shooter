export function oscillate(waveType, startTime, frequency, amplitude) {
    const time = (Date.now() - startTime) / 1000;
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
            return (Math.abs(((x % frequency) / frequency) * amplitude * 2 + adj) - amplitude / 2) * 2;
        default:
            return 0;
    }
}
//# sourceMappingURL=oscillation.js.map