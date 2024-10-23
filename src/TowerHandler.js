import { Tower, TOWER_SIZE } from "./Tower.js";
import { HALF_TILE_SIZE } from "./Tile.js";
import { ENEMY_STATE } from "./Enemy.js";

const towersURL = './images/towers/';

export class TowerHandler{
    constructor(game){
        this.game = game;
        this.towers = [];
            
            this.sapphireTower = {
                image: new Image(),
                projectile: this.blueFireball
            }
            this.sapphireTower.image.src = `${towersURL}sapphire1.png`;
    }

    renderTowers(ctx, event){
        this.towers.forEach(tower => {
            tower.update(event);
            tower.draw(ctx);

            const enemiesInTowerRange = this.prioritiseEnemiesInTowerRange(tower);
            const selectedEnemy = enemiesInTowerRange.find(enemy => enemy.isSelected);

            if(selectedEnemy)
                tower.target = selectedEnemy;
            else
                tower.target = enemiesInTowerRange[0];

            if(tower.shootTimer > tower.cooldown && tower.target){
                this.game.projectileHandler.populateProjectilesArray(tower.target, tower);
                tower.shootTimer = 0;
            }
        })
    }

    prioritiseEnemiesInTowerRange(tower){
        return this.game.enemyHandler.enemies.filter(enemy => {
            if(enemy.state === ENEMY_STATE.WALKING || enemy.state === ENEMY_STATE.RUNNING){
                const xDifference = enemy.center.x - tower.center.x;
                const yDifference = enemy.center.y - tower.center.y;
                const distance = Math.hypot(xDifference, yDifference);
                return distance < enemy.width / 10 + tower.range;
            }
        }).sort((a, b) => {
            if (a.waypointIndex > b.waypointIndex) return -1;
            if (a.waypointIndex < b.waypointIndex) return 1;
            if (a.priorityDistance < b.priorityDistance) return -1;
            if (a.priorityDistance > b.priorityDistance) return 1;
            return 0;
        });
    }

    populateTowersArray(tower, activeTile){
        const damage = 50;
        const range = 150;
        const cooldown = 10;

        this.towers.push(new Tower({
            sprite: { 
                image: tower.image, 
                frame: 0, 
                row: 0,
                width: TOWER_SIZE, 
                height: TOWER_SIZE 
            },
            position: { 
                x: activeTile.position.x - HALF_TILE_SIZE,
                y: activeTile.position.y - HALF_TILE_SIZE  
            },
            projectile: tower.projectile,
            damage: damage,
            range: range,
            cooldown: cooldown
        }));
    }
}