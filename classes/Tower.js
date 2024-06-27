import Projectile from "./Projectile.js";

export default class Tower {
    constructor({
        game, 
        sprite, 
        position, 
        scale,
    }){
        this.game = game;
        this.sprite = sprite ?? { 
            imageLeft: "",
            imageRight: "", 
            x: 0, 
            y: 0, 
            width: TILE_SIZE, 
            height: TILE_SIZE 
        };
        this.position = position ?? {
            x: 0,
            y: 0
        }
        this.scale = scale ?? 1;

        this.width = this.sprite.width;
        this.height = this.sprite.height;  
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        };
        this.towers = [];
        this.projectiles = [];
        this.target;

        this.radius = 200;
        this.fireRate = 100;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 0, 0, 0.1)';
        ctx.fill();
    }
    update() {
        // if (this.target || (!this.target && this.frames.current !== 0)) // pauses tower

        if (
            this.target &&
            this.frames.current === 1 &&
            this.frames.elapsed % this.frames.hold === 0
        )
        this.shoot();
    }

    shoot() {
        this.projectiles.push(
            new Projectile({
                position: {
                    x: this.center.x - 15,
                    y: this.center.y - 45
                },
                enemy: this.target
            })
        )
    }
}

//     this.towers.forEach((tower) => {
//         tower.update(ctx);
//         tower.target = null;
//         const validEnemies = enemies.filter(enemy => {
//                 const xDifference = enemy.center.x - tower.center.x;
//                 const yDifference = enemy.center.y - tower.center.y;
//                 const distance = Math.hypot(xDifference, yDifference);
//                 return distance < enemy.radius + tower.radius;
//         }).sort((a, b) => {
//             if (a.waypointIndex > b.waypointIndex) return -1;
//             if (a.waypointIndex < b.waypointIndex) return 1;
//             if (a.priorityDistance < b.priorityDistance) return -1;
//             if (a.priorityDistance > b.priorityDistance) return 1;
//             return 0;
//         });

//         tower.target = validEnemies[0];
//         for (let i = tower.projectiles.length - 1; i >= 0; i-- ){
//             const projectile = tower.projectiles[i];

//             projectile.update(ctx);
//             const xDifference = projectile.enemy.center.x - projectile.position.x;
//             const yDifference = projectile.enemy.center.y - projectile.position.y;
//             const distance = Math.hypot(xDifference, yDifference);

//             if (distance < projectile.enemy.radius + projectile.radius){
//                 projectile.enemy.health -= 20;

//                 if(projectile.enemy.health <= 0){
//                     const enemyIndex = enemies.findIndex((enemy) => {
//                         return projectile.enemy === enemy;
//                     });
//                     if (enemyIndex > -1){
//                         enemies.splice(enemyIndex, 1);
//                         coins += 25;
//                     }
//                 }
//                 explosions.push(
//                     new Sprite({
//                         position: { x: projectile.position.x, y: projectile.position.y },
//                         imageSrc: './img/explosion.png',
//                         frames: { max: 12 },
//                         offset: { x: - 80, y: -80 }
//                     })
//                 )
//                 tower.projectiles.splice(i, 1);
//             }
//         }
//     })