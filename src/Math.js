
export function checkCollision(a, b){
    const dx = a.center.x - b.center.x;
    const dy = a.center.y - b.center.y;
    const distance = Math.hypot(dx, dy);
    const sumOfRadii = a.width / 8 + b.width / 8 ;
    return distance < sumOfRadii; 
}

export function randomPositiveOrNegativeNumber(range){
    const positiveOrNegative = Math.ceil((Math.random() - 0.5) * 2) < 1 ? -1 : 1
    return Math.floor(Math.random() * range) * positiveOrNegative;
}