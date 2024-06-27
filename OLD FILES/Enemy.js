import Sprite from './Sprite.js'

export default class Enemy extends Sprite {
    constructor({ 
        position = { 
            x: 0, 
            y: 0 
        } }, 
        imageSrc, 
        imageSrc2, 
        enemyID, 
        waypoints, 
        speed, 
        activeStatus
    ){

        super({
            position,
            imageSrc, 
            frames: { max: 8 },
            offset: { 
                x: -25, 
                y: -25 
            } 
        })
        this.enemyID = enemyID;
        this.imageRightSrc = imageSrc;
        this.imageLeft = new Image();
        this.imageLeft.src = imageSrc2;
        this.radius = 25;
        this.waypoints = waypoints;
        this.waypointIndex = 0;
        this.center = {
            x: this.position.x + this.radius / 2,
            y: this.position.y + this.radius / 2
        };
        this.health = 100;
        this.speed = speed;
        this.velocity = { 
            x: 0, 
            y: 0
        }; 

        this.activeStatus = activeStatus;
        this.priorityDistance;
    }

    draw(ctx){
        super.draw(ctx);
        ctx.fillStyle = 'red';
        ctx.fillRect(this.center.x + this.offset.x, this.center.y + this.offset.y - 20, this.radius, 5);
        ctx.strokeRect(this.center.x + this.offset.x, this.center.y + this.offset.y - 20, this.radius, 5);
        ctx.fillStyle = 'green';
        ctx.fillRect(this.center.x + this.offset.x, this.center.y + this.offset.y - 20, this.radius * this.health / 100, 5);
        
        ctx.beginPath();
        ctx.ellipse(this.center.x + this.offset.x + 12, this.center.y + this.offset.y + 16, 8, 15, Math.PI / 2, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fill();
    }
    update(ctx){
        super.update(ctx);
        this.draw(ctx)
        const waypoint = this.waypoints[this.waypointIndex];
        const yDistance = waypoint.y - this.center.y;
        const xDistance = waypoint.x - this.center.x;
        const angle = Math.atan2(yDistance, xDistance);
        this.priorityDistance = Math.round(Math.abs(xDistance) + Math.abs(yDistance));

        this.velocity.x = Math.cos(angle) * this.speed;
        this.velocity.y = Math.sin(angle) * this.speed;
        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.center = {
            x: this.position.x + this.radius / 2,
            y: this.position.y + this.radius / 2
        };
        
        if( Math.abs(Math.round(this.center.x) - Math.round(waypoint.x)) <
            Math.abs(this.velocity.x) && 
            Math.abs(Math.round(this.center.y) - Math.round(waypoint.y)) <
            Math.abs(this.velocity.y) &&
            this.waypointIndex < this.waypoints.length - 1
        ){
            this.waypointIndex++;
        }

        if(xDistance < 0)
            this.image.src = this.imageLeft.src;
        else
            this.image.src = this.imageRightSrc;    
    }
}