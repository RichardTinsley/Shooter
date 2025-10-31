export function checkCircleCollision(a, b, aRadius, bRadius) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const distance = Math.hypot(dx, dy);
    const sumOfRadii = aRadius + bRadius;
    return distance < sumOfRadii;
}
export function checkSquareCollision(a, b) {
    return !(a.x > b.x + b.width ||
        a.x + a.width < b.x ||
        a.y > b.y + b.height ||
        a.y + a.height < b.y);
}
//# sourceMappingURL=collisionDetection.js.map