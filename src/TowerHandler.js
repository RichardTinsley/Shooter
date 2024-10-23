
const towersURL = './images/towers/';


    export class TowerHandler{
        constructor(){
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

            const enemiesInTowerRange = tower.prioritiseEnemiesInTowerRange(tower, this.enemies);
            const selectedEnemy = enemiesInTowerRange.find(enemy => enemy.isSelected);

            if(selectedEnemy)
                tower.target = selectedEnemy;
            else
                tower.target = enemiesInTowerRange[0];

            if(tower.shootTimer > tower.cooldown && tower.target){
                tower.populateProjectilesArray(tower.target, this.projectiles);
                tower.shootTimer = 0;
            }
        })
    }

    populateTowersArray(tower, towers, activeTile){
        towers.push(new Tower({
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
            scale: 1,
            projectile: tower.projectile
        }));
    }
}