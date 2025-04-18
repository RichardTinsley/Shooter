import { Time } from "../handlers/Time.js";
export var DIRECTION;
(function (DIRECTION) {
    DIRECTION[DIRECTION["LEFT"] = -1] = "LEFT";
    DIRECTION[DIRECTION["RIGHT"] = 1] = "RIGHT";
})(DIRECTION || (DIRECTION = {}));
export function setAngle(position, destination) {
    const dy = destination.y - position.y;
    const dx = destination.x - position.x;
    return Math.atan2(dy, dx);
}
export function getDirection(angle) {
    if (angle < 1.57 && angle > -1.57)
        return DIRECTION.RIGHT;
    else
        return DIRECTION.LEFT;
}
export function updatePosition(position, angle, speed) {
    position.x += Math.cos(angle) * speed * Time.deltaTimeMultiplier;
    position.y += Math.sin(angle) * speed * Time.deltaTimeMultiplier;
}
//# sourceMappingURL=entityMovement.js.map