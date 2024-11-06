import { TOWER_SIZE, TILE_SIZE_HALF } from "./utilities/constants.js";
import { Tower } from "./Tower.js";
import { assets } from "./AssetHandler.js";

export class TowerHandler{
    constructor(game){
        this.game = game;
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
            this.targetEnemy(tower);
            this.shootEnemy(tower);
        })
    }

    targetEnemy(tower){
        const enemiesInTowerRange = tower.prioritiseEnemiesInTowerRange(this.game.enemyHandler.enemies);
        const selectedEnemy = enemiesInTowerRange.find(enemy => enemy.isSelected);

        if(selectedEnemy)
            tower.target = selectedEnemy;
        else
            tower.target = enemiesInTowerRange[0];
    }

    shootEnemy(tower){
        if(tower.shootTimer > tower.cooldown && tower.target){
            this.game.projectileHandler.add(
                tower.target, 
                tower, 
                assets.get('blueFireball'))
            tower.shootTimer = 0;
        }
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