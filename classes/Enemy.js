// import { waypoints } from './mapInfo.js';
import Sprite from './Sprite.js'

export default class Enemy extends Sprite {
    constructor({ position = { x: 0, y: 0 } }, waypoints, speed, activeStatus){
        super({
            position, 
            imageSrc: 'img/01Knight.png', 
            frames: { max: 8 },
            offset: { 
                x: -15, 
                y: -5 
            } 
        })

        this.radius = 20;
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
    }
    draw(ctx){
        super.draw(ctx);
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y - 15, this.radius, 5);
        ctx.strokeRect(this.position.x, this.position.y - 15, this.radius, 5);
        ctx.fillStyle = 'green';
        ctx.fillRect(this.position.x, this.position.y - 15, this.radius * this.health / 100, 5);
        
        ctx.beginPath();
        ctx.ellipse(this.center.x, this.center.y + 12, 8, 15, Math.PI / 2, 0, 2 * Math.PI);
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
            this.image.src = 'img/02Knight.png';    
        else
            this.image.src = 'img/01Knight.png';
    }
}