export function oscillate(waveType, frequency = 1, amplitude = 1) {
    const time = Date.now() / 1000;
    const x = time * frequency;
    switch (waveType) {
        case 0:
            return Math.sin(2 * Math.PI * x) * amplitude;
        case 1:
            return Math.cos(2 * Math.PI * x) * amplitude;
        case 2:
            return Math.floor(Math.sin(2 * Math.PI * x)) * amplitude * 2 + amplitude;
        case 3:
            const adj = x < 0 ? amplitude : -amplitude;
            return ((x % frequency) / frequency) * amplitude * 2 + adj;
        case 4:
            const adjTri = x < 0 ? amplitude : -amplitude;
            return ((Math.abs(((x % frequency) / frequency) * amplitude * 2 + adjTri) -
                amplitude / 2) *
                2);
        default:
            return 0;
    }
}
//# sourceMappingURL=math.js.map