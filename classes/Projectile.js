export class Projectile {
    constructor({ 
        position,
        enemy
    }){
        this.position = position ?? {
            x: 0,
            y: 0
        }
        // this.scale = scale ?? 1;
        this.enemy = enemy;
        
        this.radius = 5;
        this.center = {
            x: this.position.x + this.radius / 2,
            y: this.position.y + this.radius / 2
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.speed = 5;
        this.damage = 1;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();
    }

    update() {
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