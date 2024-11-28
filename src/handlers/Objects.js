import { Enemy } from "../objects/Enemy.js";

export class Objects{
    constructor(emptyTowerSpots){
        this.towers = emptyTowerSpots();
        this.enemies = [];

        this.waypoints = [{x: 200, y: 700}];

        this.testEnemy = new Enemy({
            position: {
                x: 400,
                y: 400
            },
            speed: 1,
            waypoints: this.waypoints
        })

        this.enemies.push(this.testEnemy);
    }

    draw(ctx){
        this.towers.forEach(tower => tower.draw(ctx));
        this.enemies.forEach(enemy => enemy.draw(ctx));
    }

    update(event){
        this.towers.forEach(tower => tower.update(event));
        this.enemies.forEach(enemy => enemy.update(event));
    }
}