export class Projectile {
    constructor({ 
        position,
        enemy,
        scale,
        damage
    }){
        this.position = position ?? {
            x: 0,
            y: 0
        }
        this.scale = scale ?? 1;
        this.enemy = enemy;
        this.damage = damage;
        
        this.radius = 5;
        this.center = {
            x: this.position.x + this.radius / 2,
            y: this.position.y + this.radius / 2
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.speed = 150;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius * this.scale, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();

        const angle = Math.atan2(
            this.center.y - this.position.y,
            this.center.x - this.position.x
        );
        // LASER LINES        
        // ctx.beginPath();
        // ctx.moveTo(this.position.x, this.position.y);
        // ctx.lineTo(this.center.x, this.center.y);
        // ctx.strokeStyle = "red";
        // ctx.stroke();
    }

    update(deltaTime) {
        const scaledSpeed = this.speed * (deltaTime / 1000);

        const angle = Math.atan2(
            this.enemy.center.y - this.center.y,
            this.enemy.center.x - this.center.x
        );
        this.velocity.x = Math.cos(angle) * scaledSpeed;
        this.velocity.y = Math.sin(angle) * scaledSpeed;
        this.center.x += this.velocity.x;
        this.center.y += this.velocity.y;
    }
}