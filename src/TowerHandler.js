import { TOWER_SIZE, TILE_SIZE_HALF } from "./constants/constants.js";
import { Tower } from "./Tower.js";

export class TowerHandler{
    constructor(enemyHandler, projectileHandler){
        this.enemyHandler = enemyHandler;
        this.projectileHandler = projectileHandler;
        this.towers = [];
    }

    draw(ctx){
        this.towers.forEach(tower => {
            tower.draw(ctx);
        })
    }

    update(event){
        this.towers.forEach(tower => {
            tower.update(event);
            tower.targetEnemy(this.enemyHandler.enemies);
            tower.shootEnemy(this.projectileHandler);
        });
    }

    add(tower, activeTile){
        const damage = 50;
        const range = 150;
        const cooldown = 10;
        this.towers.push(new Tower({
            sprite: { 
                image: tower, 
                frame: 0, 
                row: 0,
                width: TOWER_SIZE, 
                height: TOWER_SIZE 
            },
            position: { 
                x: activeTile.position.x - TILE_SIZE_HALF,
                y: activeTile.position.y - TILE_SIZE_HALF  
            },
            damage: damage,
            range: range,
            cooldown: cooldown
        }));
    }
}