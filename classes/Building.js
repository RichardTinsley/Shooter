import Projectile from "./Projectile.js";
// class Building extends Sprite {
//     constructor({ position = { x: 0, y: 0 } }) {
//         super({
//         position,
//         imageSrc: './img/tower.png',
//         frames: {
//             max: 19
//         },
//         offset: {
//             x: 0,
//             y: -80
//         }
//         })

//         this.width = 64 * 2
//         this.height = 64
//         this.center = {
//         x: this.position.x + this.width / 2,
//         y: this.position.y + this.height / 2
//         }
//         this.projectiles = []
//         this.radius = 250
//         this.target
//     }

//     draw() {
//         super.draw()
//     }

//     update() {
//         this.draw()
//         if (this.target || (!this.target && this.frames.current !== 0))
//         super.update()

//         if (
//         this.target &&
//         this.frames.current === 6 &&
//         this.frames.elapsed % this.frames.hold === 0
//         )
//         this.shoot()
//     }

//     shoot() {
//         this.projectiles.push(
//         new Projectile({
//             position: {
//             x: this.center.x - 20,
//             y: this.center.y - 110
//             },
//             enemy: this.target
//         })
//         )
//     }
// }

export default class Building {
    constructor({ position = { x: 0, y: 0 } }) {
        this.position = position;
        this.width = 32;
        this.height = 32;
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }
        this.projectiles = [];
        this.radius = 250;
        this.target;
        this.frames = 0;
        this.fireRate = 100;

    }
    draw(ctx){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.position.x, this.position.y, 32, 32);

        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 255, 0.2)';
        ctx.fill();
    }

    update(ctx){
        this.draw(ctx);
        if (this.frames % this.fireRate === 0 && this.target){
            this.projectiles.push(
                new Projectile({
                    position: {
                        x: this.center.x,
                        y: this.center.y
                    },
                    enemy: this.target
                })
            )
        }
        this.frames++;
    }
}