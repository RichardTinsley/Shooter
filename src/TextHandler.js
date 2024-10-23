import { GAME_WIDTH, GAME_HEIGHT, ROWS, COLUMNS, TILE_SIZE, TILE_SIZE_HALF } from "./Constants.js";
import { Text } from "./Text.js";

export class TextHandler{
    constructor(game) {
        this.game = game;
        this.texts = [];

        this.greenGameText = {
            color: '50, 205, 50, ',
            alpha: '10', 
            textSize: 25, 
            align: 'left'
        };

        this.goldGameText = {
            color:  '255, 215, 0, ',
            alpha: '10',
            textSize: 25,
            align: 'left'
        };

        this.frames = 0;
        this.startTime = performance.now();
        this.FPSNormal = 0;
    }

    renderTexts(ctx){
        for (let i = this.texts.length - 1; i >= 0; i-- ){
            const text = this.texts[i];        
            text.draw(ctx);
            text.update();
            if (text.alpha <= 0){
                this.texts.splice(i, 1);
            }
        }
    }

    populateGameTextArray(gameText, text, position){
        this.texts.push(new Text({
            text: text,
            color: gameText.color,
            alpha: gameText.alpha,
            position: {
                x: position.x,
                y: position.y
            },
            textSize: gameText.textSize,
            align: gameText.align 
        }));
    }
    
    renderGUITexts(ctx){
        this.drawText(ctx, this.game.hearts, 65, 52, 20,'left');
        this.drawText(ctx, this.game.coins, 225, 52, 20,'left');
        this.drawText(ctx, this.game.exp, 515, 52, 20,'left');
        this.drawText(ctx, this.game.waves, 805, 52, 20,'left');
        this.drawText(ctx, this.game.timer, 1155, 52, 20,'left');
        
    }

    renderDebugTexts(ctx){
        this.calculateFPSNormal();
        this.levelDebugText(ctx);
        this.towerDebugText(ctx);
        this.enemyDebugText(ctx);
        this.projectileDebugText(ctx);
        this.performanceDebugText(ctx);
    }

    renderbigScreenTexts(ctx, text, screenFill){
        if(screenFill){
            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        }
        ctx.fillStyle = 'white';
        ctx.font = 'bold ' + 150 + 'px canterbury';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'black';
        ctx.strokeText(text, GAME_WIDTH / 2, GAME_HEIGHT / 2);
        ctx.fillText(text, GAME_WIDTH / 2, GAME_HEIGHT / 2);
    }
    
    drawText(ctx, text, x, y, textSize, align){
        ctx.fillStyle = 'white';
        ctx.font = 'bold ' + textSize + 'px canterbury';
        ctx.textAlign = align;
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x + 5, y - 3);
    }
    
    levelDebugText(ctx){
        ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
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

    calculateFPSNormal(){
        let t = performance.now();
        let dt = t - this.startTime;

        if(dt > 1000) {
            this.FPSNormal = this.frames * 1000 / dt;
            this.frames = 0;
            this.startTime = t
        }
        this.frames++;
    }
    
    enemyDebugText(ctx){
        this.game.enemyHandler.enemies.forEach(enemy => {
            ctx.fillStyle = 'rgba(0, 250, 0, 0.1)';
            ctx.fillRect(enemy.center.x - enemy.halfWidth, enemy.center.y - enemy.halfWidth, enemy.width, enemy.height);
            ctx.fillStyle = 'rgba(0, 0, 250, 0.3)';
            ctx.fillRect(Math.floor(enemy.position.x / TILE_SIZE) * TILE_SIZE, Math.floor(enemy.position.y / TILE_SIZE) * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            this.drawText(ctx, enemy.priorityDistance, Math.floor(enemy.position.x / TILE_SIZE) * TILE_SIZE, Math.floor(enemy.position.y / TILE_SIZE) * TILE_SIZE + 20, TILE_SIZE_HALF, 'right');
            ctx.fillStyle = 'rgba(250, 0, 0, 0.4)';
            ctx.beginPath();
            ctx.arc(enemy.center.x, enemy.center.y, TILE_SIZE_HALF, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.fillStyle = 'rgba(250, 0, 0, 1)';
            ctx.fillRect(enemy.center.x, enemy.center.y, 5, 5);
        })
    }
    
    towerDebugText(ctx){
        this.game.towerHandler.towers.forEach(tower => {
            ctx.beginPath();
            ctx.arc(tower.center.x, tower.center.y, tower.range, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(200, 0, 0, 0.1)';
            ctx.fill();
            this.drawText(ctx, tower.range, tower.center.x, tower.center.y - TILE_SIZE, TILE_SIZE_HALF, 'right');
            ctx.fillStyle = 'rgba(250, 0, 0, 1)';
            ctx.fillRect(tower.center.x, tower.center.y, 5, 5);
        })
    }

    projectileDebugText(ctx){
        this.game.projectileHandler.projectiles.forEach(projectile => {
            ctx.beginPath();
            ctx.arc(projectile.center.x, projectile.center.y, projectile.range, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(200, 0, 0, 0.1)';
            ctx.fill();
            ctx.fillStyle = 'rgba(250, 0, 0, 1)';
            ctx.fillRect(projectile.center.x, projectile.center.y, 5, 5);
        })
    }
    
    performanceDebugText(ctx){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(TILE_SIZE, TILE_SIZE * 3, TILE_SIZE * 3, TILE_SIZE * 2);
        const FPS = Math.round(this.game.FPSNormal * 1000) / 1000;
        this.drawText(ctx, `f p s: ${FPS}`, TILE_SIZE, TILE_SIZE * 4, TILE_SIZE_HALF, 'left');
    }
}
