// explosions.push(
//     new Sprite({
//         position: { x: projectile.position.x, y: projectile.position.y },
//         imageSrc: './img/explosion.png',
//         frames: { max: 12 },
//         offset: { x: - 80, y: -80 }
//     })
// )

// const explosions = [];
// function animate(){
//     for (let i = explosions.length - 1; i >= 0; i--) {
//         const explosion = explosions[i];
//         explosion.draw(ctx);
//         explosion.update(ctx);
//         if (explosion.frames.current >= explosion.frames.max - 1) {
//             explosions.splice(i, 1);
//         }
//     }
// }