import { waypoints } from './mapInfo.js';
import Sprite from './Sprite.js'

export default class Enemy extends Sprite {
    constructor({ position = { x: 0, y: 0 } }){
        super({
            position, 
            imageSrc: 'img/01Knight.png', 
            frames: { max: 8 }
        })

        this.position = position;
        this.radius = 45;
        this.waypointIndex = 0;
        this.center = {
            x: this.position.x + this.radius / 2,
            y: this.position.y + this.radius / 2
        };
        this.health = 100;
        this.speedMultiplier = 2;
        this.velocity = { 
            x: 0, 
            y: 0
        }; 
    }
    draw(ctx){
        super.draw(ctx);
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y - 10, this.radius, 5);
        ctx.fillStyle = 'green';
        ctx.fillRect(this.position.x, this.position.y - 10, this.radius * this.health / 100, 5);
    }
    update(ctx){
        this.draw(ctx);
        super.update(ctx);
        const waypoint = waypoints[this.waypointIndex];
        const yDistance = waypoint.y - this.center.y;
        const xDistance = waypoint.x - this.center.x;
        const angle = Math.atan2(yDistance, xDistance);

        this.velocity.x = Math.cos(angle) * this.speedMultiplier;
        this.velocity.y = Math.sin(angle) * this.speedMultiplier;

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
            this.waypointIndex < waypoints.length - 1
        ){
            this.waypointIndex++;
        }
    }
}