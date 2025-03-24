export function oscillate(effect, delta, min, max) {
    if (effect <= min || effect > max)
        delta = -delta;
    effect += delta;
    return [effect, delta];
}
export function oscillate2(waveType, frequency, amplitude, time) {
    waveType = waveType || "cos";
    frequency = frequency || 1;
    amplitude = amplitude || 1;
    time = time || Date.now() / 1000;
    waveType = waveType.toLowerCase();
    const x = time * frequency;
    switch (waveType) {
        case "sin":
            return Math.sin(2 * Math.PI * x) * amplitude;
        case "cos":
            return Math.cos(2 * Math.PI * x) * amplitude;
        case "square":
            return Math.floor(Math.sin(2 * Math.PI * x)) * amplitude * 2 + amplitude;
        case "sawtooth":
            const adj = x < 0 ? amplitude : -amplitude;
            return ((x % frequency) / frequency) * amplitude * 2 + adj;
        case "triangle":
            const adjTri = x < 0 ? amplitude : -amplitude;
            return ((Math.abs(((x % frequency) / frequency) * amplitude * 2 + adjTri) -
                amplitude / 2) *
                2);
        default:
            return 0;
    }
}
//# sourceMappingURL=math.js.map