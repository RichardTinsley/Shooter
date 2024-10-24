import { ROWS, COLUMNS, TILE_SIZE, TILE_SIZE_HALF } from "./Constants.js";

export class DebugHandler{
    constructor(game){
        this.game = game;

        this.frames = 0;
        this.startTime = performance.now();
        this.FPSNormal = 0;
    }

    renderDebugInfo(ctx){
        this.calculateFPSNormal();
        this.levelDebugInfo(ctx);
        this.towerDebugInfo(ctx);
        this.enemyDebugInfo(ctx);
        this.projectileDebugInfo(ctx);
        this.performanceDebugInfo(ctx);
    }
    
    calculateFPSNormal(){
        const t = performance.now();
        const dt = t - this.startTime;
        
        if(dt > 1000) {
            this.FPSNormal = this.frames * 1000 / dt;
            this.frames = 0;
            this.startTime = t
        }
        this.frames++;
    }

    levelDebugInfo(ctx){
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 0, 0, .5)';
        ctx.lineWidth = 1;
        for (let row = 0; row < ROWS; row++)
            for (let column = 0; column < COLUMNS; column++)
                ctx.strokeRect(
                    column * TILE_SIZE,
                    row * TILE_SIZE,
                    TILE_SIZE,
                    TILE_SIZE
                );   
    }
    
    enemyDebugInfo(ctx){
        this.game.enemyHandler.enemies.forEach(enemy => {
            ctx.beginPath();
            ctx.fillStyle = 'rgba(0, 0, 250, 1)';
            ctx.fillRect(enemy.position.x - 2, enemy.position.y - 2, 4, 4);

            ctx.fillStyle = 'rgba(250, 0, 0, 0.1)';
            ctx.arc(enemy.center.x, enemy.center.y, enemy.halfWidth, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.fillStyle = 'rgba(250, 0, 0, 1)';
            ctx.fillRect(enemy.center.x - 2, enemy.center.y - 2, 4, 4);
        })
    }
    
    towerDebugInfo(ctx){
        this.game.towerHandler.towers.forEach(tower => {
            ctx.beginPath();
            ctx.arc(tower.center.x, tower.center.y, tower.range, 0, Math.PI * 2);
            ctx.setLineDash([5, 15]);
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'white';
            ctx.stroke();
            ctx.setLineDash([0, 0]);
        })
    }

    projectileDebugInfo(ctx){
        this.game.projectileHandler.projectiles.forEach(projectile => {
            ctx.beginPath();
            ctx.arc(projectile.center.x, projectile.center.y, projectile.range, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(200, 0, 0, 0.1)';
            ctx.fill();
            ctx.fillStyle = 'rgba(250, 0, 0, 1)';
            ctx.fillRect(projectile.center.x, projectile.center.y, 5, 5);
        })
    }
    
    performanceDebugInfo(ctx){
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(TILE_SIZE, TILE_SIZE * 3, TILE_SIZE * 3, TILE_SIZE * 2);
        const FPS = Math.round(this.FPSNormal * 1000) / 1000;
        this.game.textHandler.drawText(ctx, `f p s: ${FPS}`, TILE_SIZE, TILE_SIZE * 4, TILE_SIZE_HALF, 'left');
    }
}