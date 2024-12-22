import { COLOURS } from "../constants/interface.js";
import * as GAME from "../constants/game.js";
import { BattleScreen } from "../screens/BattleScreen.js";
import { drawText } from "../utilities/textRender.js";

let frames = 0;
let startTime = performance.now();
let FPSNormal = 0;

export class Debug{
    constructor() {
        this.isDebugMode = true;  
        //TODO NEW TEXT OBJECT // UPDATE AND DRAW FPS
    }

    draw(ctx, Screen, mouse){
        if(!this.isDebugMode) 
            return

        if(Screen instanceof BattleScreen){
            this.levelDebugInfoGrid(ctx);
            this.towerDebugInfo(ctx, Screen.objects.towers);
            this.enemyDebugInfo(ctx, Screen.objects.enemies);
            this.projectileDebugInfo(ctx, Screen.objects.projectiles);
        }

        if(Screen.menu)
            this.menuDebugInfo(ctx, Screen.menu);
        
        this.calculateFPSNormal();
        this.performanceDebugInfo(ctx);
        this.mouseDebugInfo(ctx, mouse);
    }

    switchDebugMode = () => {
        this.isDebugMode = !this.isDebugMode;
    }

    calculateFPSNormal(){
        const t = performance.now();
        const dt = t - startTime;
        
        if(dt > 1000) {
            FPSNormal = frames * 1000 / dt;
            frames = 0;
            startTime = t
        }
        frames++;
    }
    
    levelDebugInfoGrid(ctx){
        ctx.beginPath();
        ctx.strokeStyle = COLOURS.LINES;
        ctx.lineWidth = 1;
        for (let row = 0; row < GAME.SIZES.ROWS; row++)
            for (let column = 0; column < GAME.SIZES.COLUMNS; column++)
                ctx.strokeRect(
                    column * GAME.SIZES.TILE,
                    row * GAME.SIZES.TILE,
                    GAME.SIZES.TILE,
                    GAME.SIZES.TILE
                );   
    }
    
    mouseDebugInfo(ctx, mouse){
        this.drawCircleHitbox(ctx, mouse);
    }
    
    enemyDebugInfo(ctx, enemies){
        enemies.forEach(enemy => {
            this.drawDot(ctx, enemy.position, COLOURS.BLUE);
            this.drawDot(ctx, enemy.center, COLOURS.GREEN);
            this.drawCircleHitbox(ctx, enemy.center);
        });
    }
    
    towerDebugInfo(ctx, towers){
        towers.forEach(tower => {
            this.drawDot(ctx, tower.position, COLOURS.BLUE);
            this.drawDot(ctx, tower.center, COLOURS.GREEN);
            this.drawDot(ctx, tower.muzzle, COLOURS.YELLOW);
            this.drawCircleHitbox(ctx, tower.center);
        });
    }
    
    projectileDebugInfo(ctx, projectiles){
        projectiles.forEach(projectile => {
            this.drawCircleHitbox(ctx, projectile.center);
            this.drawDot(ctx, projectile.position, COLOURS.BLUE);
            // this.drawDot(ctx, projectile.center, COLOURS.GREEN);
        });
    }
    menuDebugInfo(ctx, menu){
        menu.forEach(menuItem => {
            this.drawSquareHitBox(ctx, menuItem);
        });
    }
    
    performanceDebugInfo(ctx){
        ctx.fillStyle = COLOURS.SHADOW;
        ctx.fillRect(0, GAME.SIZES.TILE * 3, GAME.SIZES.TILE * 4, GAME.SIZES.TILE * 2);
        const FPS = Math.round(FPSNormal * 1000) / 1000;
        drawText(ctx, 'white', `f p s: ${FPS}`, 10, GAME.SIZES.TILE * 4, GAME.SIZES.TILE_HALF, 'left', 'middle');
        this.logMemory();
    }
    
    drawDot(ctx, entity, colour){
        ctx.fillStyle = colour;
        ctx.fillRect(entity.x - 2, entity.y - 2, 4, 4);
    }
    
    drawCircleHitbox(ctx, entity){
        ctx.beginPath();
        ctx.arc(entity.x, entity.y, entity.radius, 0, Math.PI * 2);
        ctx.fillStyle = COLOURS.RED_ALPHA;
        ctx.fill();
    
        this.drawDot(ctx, entity, COLOURS.RED);
    }
    
    drawSquareHitBox(ctx, menuItem){
        ctx.fillStyle = COLOURS.RED_ALPHA;
        ctx.fillRect(menuItem.position.x, menuItem.position.y, menuItem.position.width, menuItem.position.height);
    }

    logMemory() {
        if (typeof process != 'undefined')
            console.log(`Node: ${process.memoryUsage().heapUsed / Math.pow(1000, 2)} MB`);

        if (typeof performance.memory != 'undefined')
            console.log(`Browser: ${performance.memory.usedJSHeapSize / Math.pow(1000, 2)} MB`);

    }
}



