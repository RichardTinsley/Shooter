export class Projectile {
    constructor({ position = { x: 0, y: 0 }, enemy }) {
        super({ position, imageSrc: 'img/projectile.png' });
        this.velocity = {
            x: 0,
            y: 0
        };
        this.enemy = enemy;
        this.radius = 5;
        this.speed = 10;
    }

    update(ctx) {
        this.draw(ctx);
        
        const angle = Math.atan2(
            this.enemy.center.y - this.position.y,
            this.enemy.center.x - this.position.x
        );
    
        this.velocity.x = Math.cos(angle) * this.speed;
        this.velocity.y = Math.sin(angle) * this.speed;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}