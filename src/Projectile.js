export const ANIMATION_STATE = {
    ANIMATING: 0,
    FINISHED: 1
};

export class Projectile{
    constructor({ 
        sprite,
        position,
        enemy,
        scale,
        speed,
        damage,
    }){
        this.sprite = sprite;
        
        this.scale = scale;
        this.width = this.sprite.width * this.scale;
        this.height = this.sprite.height * this.scale;   
        
        this.position = position;
        this.center = {
            x: this.position.x,
            y: this.position.y
        };
        
        this.maxFrame = (this.sprite.image.width / this.sprite.width) - 1;
        this.maxRow = (this.sprite.image.height / this.sprite.height) - 1;
        
        this.state = ANIMATION_STATE.ANIMATING;
        this.angle;
        this.speed = speed;
        this.velocity = {
            x: 0,
            y: 0
        };
        
        this.damage = damage;       
        this.enemy = enemy;
    }

    renderProjectile(ctx, event){
        switch(this.state){
            case ANIMATION_STATE.ANIMATING:
                this.update(event); 
                this.draw(ctx);
                break
            case ANIMATION_STATE.FINISHED:
                break
        }
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.center.x, this.center.y);
        ctx.rotate(this.angle);
        ctx.drawImage(
            this.sprite.image,
            this.sprite.frame * this.sprite.width,
            this.sprite.row * this.sprite.height,
            this.sprite.width,
            this.sprite.height,
            0 - this.width,
            0 - this.height,
            this.width,
            this.height
        );
        ctx.restore();
    }

    update(event) {
        this.angle = Math.atan2(
            this.enemy.center.y - this.center.y,
            this.enemy.center.x - this.center.x
        );
        this.velocity.x = Math.cos(this.angle) * this.speed;
        this.velocity.y = Math.sin(this.angle) * this.speed;
        this.center.x += this.velocity.x;
        this.center.y += this.velocity.y;

        if(event)
            if(this.sprite.frame < this.maxFrame)
                this.sprite.frame++;
            else{
                if(Math.floor(this.maxRow) !== 0)
                    this.sprite.row++;
                
                this.sprite.frame = 0;
            }
            if(this.sprite.row === this.maxRow && this.sprite.frame < this.maxFrame){
                this.sprite.row = 0;
                this.sprite.frame = 0;
            }
    }

    checkCollision(a, b){
        const dx = a.center.x - b.center.x;
        const dy = a.center.y - b.center.y;
        const distance = Math.hypot(dx, dy);
        const sumOfRadii = a.width / 8 + b.width / 8 ;
        return distance < sumOfRadii; 
    }
}

// LASER LINES        
// ctx.beginPath();
// ctx.moveTo(this.position.x, this.position.y);
// ctx.lineTo(this.center.x, this.center.y);
// ctx.strokeStyle = "red";
// ctx.stroke();

