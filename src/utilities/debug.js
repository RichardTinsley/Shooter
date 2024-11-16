import { ROWS, COLUMNS, TILE_SIZE, TILE_SIZE_HALF } from "../constants/constants.js";
import { drawText } from "./textRender.js";

let frames = 0;
let startTime = performance.now();
let FPSNormal = 0;


export function renderDebugInfo(ctx, towers, enemies, projectiles){
    calculateFPSNormal();
    levelDebugInfo(ctx);
    towerDebugInfo(ctx, towers);
    enemyDebugInfo(ctx, enemies);
    projectileDebugInfo(ctx, projectiles);
    performanceDebugInfo(ctx);
}

function calculateFPSNormal(){
    const t = performance.now();
    const dt = t - startTime;
    
    if(dt > 1000) {
        FPSNormal = frames * 1000 / dt;
        frames = 0;
        startTime = t
    }
    frames++;
}

function levelDebugInfo(ctx){
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

function enemyDebugInfo(ctx, enemies){
    enemies.forEach(enemy => {
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

function towerDebugInfo(ctx, towers){
    towers.forEach(tower => {
        ctx.beginPath();
        ctx.arc(tower.center.x, tower.center.y, tower.range, 0, Math.PI * 2);
        ctx.setLineDash([5, 15]);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.setLineDash([0, 0]);

        ctx.fillStyle = 'rgba(0, 0, 250, 1)';
        ctx.fillRect(tower.position.x - 2, tower.position.y - 2, 4, 4);
        ctx.fillStyle = 'rgba(250, 0, 0, 1)';
        ctx.fillRect(tower.center.x - 2, tower.center.y - 2, 4, 4);
    })
}

function projectileDebugInfo(ctx, projectiles){
    projectiles.forEach(projectile => {
        ctx.beginPath();
        ctx.arc(projectile.center.x, projectile.center.y, projectile.width, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 0, 0, 0.1)';
        ctx.fill();

        ctx.fillStyle = 'rgba(250, 0, 0, 1)';
        ctx.fillRect(projectile.center.x, projectile.center.y, 5, 5);
        ctx.fillStyle = 'rgba(0, 0, 250, 1)';
        ctx.fillRect(projectile.position.x - 2, projectile.position.y - 2, 4, 4);
    })
}

function performanceDebugInfo(ctx){
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(TILE_SIZE, TILE_SIZE * 3, TILE_SIZE * 3, TILE_SIZE * 2);
    const FPS = Math.round(FPSNormal * 1000) / 1000;
    drawText(ctx, 'white', `f p s: ${FPS}`, TILE_SIZE, TILE_SIZE * 4, TILE_SIZE_HALF, 'left', 'middle');
}

