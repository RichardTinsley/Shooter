export function oscillate(effect, delta, min, max) {
    if (effect <= min || effect > max)
        delta = -delta;
    effect += delta;
    return [effect, delta];
}
//# sourceMappingURL=math.js.map