import { assets } from "./AssetLoader.js";
import { TOWER_SIZE, TILE_SIZE_HALF, TILE_SIZE } from "./constants/constants.js";
import { Tower } from "./Tower.js";

export class TowerHandler{
    constructor(enemyHandler, projectileHandler, tileMap){
        this.enemyHandler = enemyHandler;
        this.projectileHandler = projectileHandler;
        this.towers = [];
        this.towerPlacementSpots(tileMap);
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

    towerPlacementSpots(tileMap){
        tileMap.forEach((row, y) => {
            row.forEach((symbol, x) => {
                if (symbol == 19)
                    this.towers.push(new Tower({
                        sprite: { 
                            image: assets.get('towerSpot'), 
                            frame: 0, 
                            row: 0,
                            width: TILE_SIZE, 
                            height: TILE_SIZE 
                        }, 
                        position: { 
                            x: x * TILE_SIZE, 
                            y: y * TILE_SIZE 
                        } 
                    })
                ) 
            })
        })
    }

    add(tower, activeTower){
        let foundIndex = this.towers.findIndex(tower => tower === activeTower);

        const damage = 50;
        const range = 150;
        const cooldown = 10;
        const newTower = new Tower({
            sprite: { 
                image: tower, 
                frame: 0, 
                row: 0,
                width: TOWER_SIZE, 
                height: TOWER_SIZE 
            },
            position: { 
                x: activeTower.position.x - TILE_SIZE_HALF,
                y: activeTower.position.y - TILE_SIZE_HALF  
            },
            damage: damage,
            range: range,
            cooldown: cooldown,
        });
        
        this.towers.splice(foundIndex, 1, newTower);
    }
}