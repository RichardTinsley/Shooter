export class WaveHandler{
    constructor(){
        this.allEnemiesActive = false;
        this.maxEnemies = 10;
        this.enemyCounter = 0;   
        this.enemySpawnTimer = 0;

        
    }

    draw(ctx){
    }

    update(event, enemies){
        if(!event) 
            return

        this.enemySpawnTimer++;
        this.spawnEnemy();
        this.allEnemiesActiveCheck();
        this.newWaveCheck(enemies);
        this.enemiesPositionCheck(enemies);
        this.playerLivesCheck();
    }

    spawnEnemy(){ // 2% Health and Armour increase depending on round?
        if(this.allEnemiesActive)
            return;

        if (this.enemySpawnTimer % Math.floor(Math.random() * 100) === 0){
            const enemy = this.generateEnemy();
            const waypoints = this.generateEnemyWaypoints();
            const enemyStartingPoint = { ...this.waypoints[0]}; 

            this.addEnemy(enemy, waypoints);
            this.enemyCounter++;
        }
    }

    setSpeed(){
        const enemySpeedMinimum = 0.4; 
        const enemySpeedRange = 1.0;
        return randomPositiveFloat(enemySpeedRange) + enemySpeedMinimum;
    }

    allEnemiesActiveCheck(){
        if (this.enemyCounter === this.maxEnemies)
            this.allEnemiesActive = true;
    }

    newWaveCheck(enemies){
        if (enemies.length === 0 && this.allEnemiesActive === true) {
            this.maxEnemies++;
            this.enemyCounter = 0;
            this.hudElements.waves++;
            this.allEnemiesActive = false;
        }
    }

    enemiesPositionCheck(enemies){
        enemies.forEach(enemy =>{
            if (enemy.position.x > canvas.width || enemy.position.y > canvas.height){
                this.hudElements.hearts -= 1;
                enemy.waypointIndex = 0;
                enemy.position = { 
                    x: enemy.waypoints[enemy.waypointIndex].x, 
                    y: enemy.waypoints[enemy.waypointIndex].y 
                };
            }
        })
    }
    
    generateEnemy(){
        let index;
        if(this.hudElements.waves < 119)
            index = Math.floor(Math.random() * (this.hudElements.waves / 10));
        else 
            index = Math.floor(Math.random() * 12);
        return assets.get(ENEMY_COLOURS[index]);
    }

    generateEnemyWaypoints(){
        return WASTELANDS_WAYPOINTS.map(waypoint => {
            return { 
                    x: (waypoint.x - TILE_SIZE) + Math.round(Math.random() * (TILE_SIZE + TILE_SIZE_HALF + 10)),
                    y: (waypoint.y - TILE_SIZE) + Math.round(Math.random() * (TILE_SIZE + TILE_SIZE_HALF + 10))
                }
            }
        );
    }
}