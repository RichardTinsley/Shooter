export class Projectile {
    constructor({ 
        sprite,
        position,
        enemy,
        scale,
        damage
    }){
        this.sprite = sprite ?? { 
            image: "", 
            x: 0, 
            y: 0, 
            width: 0, 
            height: 0 
        };
        this.position = position ?? {
            x: 0,
            y: 0
        }
        this.scale = scale ?? 1;

        this.width = this.sprite.width * this.scale;
        this.height = this.sprite.height * this.scale;   

        this.maxFrame = (this.sprite.image.width / this.sprite.width) - 1;
        this.maxRow = (this.sprite.image.height / this.sprite.height) - 1;

        this.enemy = enemy;
        this.damage = damage;
        
        this.angle = 0;
        this.center = {
            x: this.position.x,
            y: this.position.y - 64
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.speed = 2;
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.center.x, this.center.y);
        ctx.rotate(this.angle);
        ctx.drawImage(
            this.sprite.image,
            this.sprite.x * this.sprite.width,
            this.sprite.y * this.sprite.height,
            this.sprite.width,
            this.sprite.height,
            0 / 2,
            0,
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
            if(this.sprite.x < this.maxFrame)
                this.sprite.x++;
            else{
                if(Math.floor(this.maxRow) !== 0)
                    this.sprite.y++;
                
                this.sprite.x = 0;
            }
            if(this.sprite.y === this.maxRow && this.sprite.x < this.maxFrame){
                this.sprite.y = 0;
                this.sprite.x = 0;
            }
    }
}

// LASER LINES        
// ctx.beginPath();
// ctx.moveTo(this.position.x, this.position.y);
// ctx.lineTo(this.center.x, this.center.y);
// ctx.strokeStyle = "red";
// ctx.stroke();