import { ROWS, COLUMNS, TILE_SIZE, TILE_SIZE_HALF } from "../constants/game.js";
import { drawText } from "./textRender.js";

let frames = 0;
let startTime = performance.now();
let FPSNormal = 0;

export function renderDebugInfo(ctx, towers, enemies, projectiles){
    levelDebugInfoGrid(ctx);
    towerDebugInfo(ctx, towers);
    enemyDebugInfo(ctx, enemies);
    projectileDebugInfo(ctx, projectiles);
}

export function renderPerformanceDebugInfo(ctx, mouse){
    calculateFPSNormal();
    performanceDebugInfo(ctx);
    mouseDebugInfo(ctx, mouse);
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

function levelDebugInfoGrid(ctx){
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

function mouseDebugInfo(ctx, mouse){
    drawHitBox(ctx, mouse);
}

function enemyDebugInfo(ctx, enemies){
    enemies.forEach(enemy => {
        drawPositionDot(ctx, enemy);
        drawCenterDot(ctx, enemy);
        drawHitBox(ctx, enemy);
    })
}

function towerDebugInfo(ctx, towers){
    towers.forEach(tower => {
        drawHitBox(ctx, tower);
        drawPositionDot(ctx, tower);
        drawCenterDot(ctx, tower);
    })
}

function projectileDebugInfo(ctx, projectiles){
    projectiles.forEach(projectile => {
        drawHitBox(ctx, projectile);
        drawPositionDot(ctx, projectile);
    })
}

function performanceDebugInfo(ctx){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(0, TILE_SIZE * 3, TILE_SIZE * 4, TILE_SIZE * 2);
    const FPS = Math.round(FPSNormal * 1000) / 1000;
    drawText(ctx, 'white', `F P S: ${FPS}`, 10, TILE_SIZE * 4, TILE_SIZE_HALF, 'left', 'middle');
}

function drawPositionDot(ctx, entity){
    ctx.fillStyle = 'rgba(0, 0, 250, 1)';
    ctx.fillRect(entity.position.x - 2, entity.position.y - 2, 4, 4);
}

function drawCenterDot(ctx, entity){
    ctx.fillStyle = 'rgba(0, 250, 0, 1)';
    ctx.fillRect(entity.center.x - 2, entity.center.y - 2, 4, 4);
}

function drawHitBox(ctx, entity){
    ctx.beginPath();
    ctx.arc(entity.hitBox.x, entity.hitBox.y, entity.hitBox.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(200, 0, 0, 0.3)';
    ctx.fill();

    ctx.fillStyle = 'rgba(250, 0, 0, 1)';
    ctx.fillRect(entity.hitBox.x, entity.hitBox.y, 5, 5);
}
