export function oscillate(effect, delta, min, max) {
    effect += delta;
    if (effect <= min || effect >= max)
        delta = -delta;
    return [effect, delta];
}
//# sourceMappingURL=math.js.map