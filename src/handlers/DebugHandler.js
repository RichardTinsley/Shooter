import { GAME_SIZES } from "../constants/game.js";
import { BattleScreen } from "../screens/BattleScreen.js";
import { drawText } from "../utilities/textRender.js";

let frames = 0;
let startTime = performance.now();
let FPSNormal = 0;

export class DebugHandler{
    constructor(Mouse) {
        this.Mouse = Mouse;
        this.isDebugMode = true;
    }

    draw(ctx, Screen){
        if(!this.isDebugMode) 
            return

        this.calculateFPSNormal();
        this.performanceDebugInfo(ctx);
        this.mouseDebugInfo(ctx, this.Mouse);

        if(Screen.menu)
            this.menuDebugInfo(ctx, Screen.menu);
        
        if(Screen instanceof BattleScreen)
            this.levelDebugInfoGrid(ctx);
        // this.towerDebugInfo(ctx, towers);
        // this.enemyDebugInfo(ctx, enemies);
        // this.projectileDebugInfo(ctx, projectiles);
    }

    switchDebugMode(){
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
        ctx.strokeStyle = 'rgba(0, 0, 0, .5)';
        ctx.lineWidth = 1;
        for (let row = 0; row < GAME_SIZES.ROWS; row++)
            for (let column = 0; column < GAME_SIZES.COLUMNS; column++)
                ctx.strokeRect(
                    column * GAME_SIZES.TILE_SIZE,
                    row * GAME_SIZES.TILE_SIZE,
                    GAME_SIZES.TILE_SIZE,
                    GAME_SIZES.TILE_SIZE
                );   
    }
    
    mouseDebugInfo(ctx, mouse){
        this.drawCircleHitbox(ctx, mouse);
    }
    
    enemyDebugInfo(ctx, enemies){
        enemies.forEach(enemy => {
            this.drawPositionDot(ctx, enemy);
            this.drawCenterDot(ctx, enemy);
            this.drawCircleHitbox(ctx, enemy);
        });
    }
    
    towerDebugInfo(ctx, towers){
        towers.forEach(tower => {
            this.drawCircleHitbox(ctx, tower);
            this.drawPositionDot(ctx, tower);
            this.drawCenterDot(ctx, tower);
        });
    }
    
    projectileDebugInfo(ctx, projectiles){
        projectiles.forEach(projectile => {
            this.drawCircleHitbox(ctx, projectile);
            this.drawPositionDot(ctx, projectile);
        });
    }
    menuDebugInfo(ctx, menu){
        menu.forEach(menuItem => {
            this.drawSquareHitBox(ctx, menuItem);
        });
    }
    
    performanceDebugInfo(ctx){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(0, GAME_SIZES.TILE_SIZE * 3, GAME_SIZES.TILE_SIZE * 4, GAME_SIZES.TILE_SIZE * 2);
        const FPS = Math.round(FPSNormal * 1000) / 1000;
        drawText(ctx, 'white', `f p s: ${FPS}`, 10, GAME_SIZES.TILE_SIZE * 4, GAME_SIZES.TILE_SIZE_HALF, 'left', 'middle');
    }
    
    drawPositionDot(ctx, entity){
        ctx.fillStyle = 'rgba(0, 0, 250, 1)';
        ctx.fillRect(entity.position.x - 2, entity.position.y - 2, 4, 4);
    }
    
    drawCenterDot(ctx, entity){
        ctx.fillStyle = 'rgba(0, 250, 0, 1)';
        ctx.fillRect(entity.center.x - 2, entity.center.y - 2, 4, 4);
    }
    
    drawCircleHitbox(ctx, entity){
        ctx.beginPath();
        ctx.arc(entity.x, entity.y, entity.radius + 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 0, 0, 0.3)';
        ctx.fill();
    
        ctx.fillStyle = 'rgba(0, 250, 0, 1)';
        ctx.fillRect(entity.x - 1.5, entity.y - 1.5, entity.width, entity.height);
    }
    
    drawSquareHitBox(ctx, menuItem){
        ctx.fillStyle = 'rgba(250, 0, 0, 0.3)';
        ctx.fillRect(menuItem.x, menuItem.y, menuItem.width, menuItem.height);
    }
}



