import { ANIMATION_STATES } from "../constants/animation";

export function checkCollision(a, b){
    const dx = a.hitBox.x - b.hitBox.x;
    const dy = a.hitBox.y - b.hitBox.y;
    const distance = Math.hypot(dx, dy);
    const sumOfRadii = a.hitBox.radius + b.hitBox.radius;
    return distance < sumOfRadii; 
}

export function findAngleOfDirection(a, b){
    const dy = a.y - b.y;
    const dx = a.x - b.x;
    return Math.atan2(dy, dx);
}

export function giveDirection(angle){
    if(angle < 1.57 && angle > -1.57)
        return ANIMATION_STATES.RIGHT;
    else
        return ANIMATION_STATES.LEFT;
}

export function randomPositiveFloat(range){
    const randomNumber = Math.random() * range;
    return Math.round(randomNumber * 100) / 100
}

export function randomPositiveOrNegativeNumber(range){
    const positiveOrNegative = Math.ceil((Math.random() - 0.5) * 2) < 1 ? -1 : 1
    return Math.floor(Math.random() * range) * positiveOrNegative;
}