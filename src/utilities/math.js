import * as OBJECTS from "../constants/objects.js"
// LINE COLLISION??
export function checkCircleCollision(a, b){
    const dx = a.center.x - b.center.x;
    const dy = a.center.y - b.center.y;
    const distance = Math.hypot(dx, dy);
    const sumOfRadii = a.center.radius + b.center.radius;
    return distance < sumOfRadii; 
}

export function checkBoxCollision(a, b){ // a = MOUSE
    return(
        a.center.x > b.position.x + b.width ||
        a.center.x + a.width < b.position.x ||
        a.center.y > b.position.y + b.height ||
        a.center.y + a.height < b.position.y
    );
}

export function findAngleOfDirection(a, b){
    const dy = a.y - b.y;
    const dx = a.x - b.x;
    return Math.atan2(dy, dx);
}

export function giveDirection(angle){
    if(angle < 1.57 && angle > -1.57)
        return OBJECTS.ANIMATION.RIGHT;
    else
        return OBJECTS.ANIMATION.LEFT;
}

export function randomPositiveFloat(range){
    const randomNumber = Math.random() * range;
    return Math.round(randomNumber * 100) / 100
}

export function randomPositiveOrNegativeNumber(range){
    const positiveOrNegative = Math.ceil((Math.random() - 0.5) * 2) < 1 ? -1 : 1
    return Math.floor(Math.random() * range) * positiveOrNegative;
}

export function generateEnemySpeed(enemySpeedMaximum){
    const enemySpeedMinimum = 0.5; 
    return randomPositiveFloat(enemySpeedMaximum) + enemySpeedMinimum;
}