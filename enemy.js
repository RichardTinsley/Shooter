import { waypoints } from './waypoints.js';

export default class Enemy {
    constructor({ position = { x: 0, y: 0 } }){
        this.position = position;
        this.size = Math.random() * 10;
        this.waypointIndex = 0;
        this.colour = "rgb("+Math.random() * 255+","+Math.random() * 255+"," +Math.random() * 255+" )";
        this.center = {
            x: this.position.x + this.size / 2,
            y: this.position.y + this.size / 2
        };
    }
    draw(ctx){
        ctx.fillStyle = this.colour;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
    update(){
        const waypoint = waypoints[this.waypointIndex];
        const yDistance = waypoint.y - this.center.y;
        const xDistance = waypoint.x - this.center.x;
        const angle = Math.atan2(yDistance, xDistance);
        this.position.x += Math.cos(angle);
        this.position.y += Math.sin(angle);
        this.center = {
            x: this.position.x + this.size / 2,
            y: this.position.y + this.size / 2
        };

        if( Math.round(this.center.x) === waypoint.x && 
            Math.round(this.center.y) === waypoint.y &&
            this.waypointIndex < waypoints.length - 1
        ){
            this.waypointIndex++;
        }
    }
}