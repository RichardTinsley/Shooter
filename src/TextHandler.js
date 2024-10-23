import { GAME_WIDTH, GAME_HEIGHT, ROWS, COLUMNS, TILE_SIZE, HALF_TILE_SIZE, TOWER_SIZE } from "./Main.js";

    // this.greenGameText = {
    //     color: '50, 205, 50, ',
    //     alpha: '10', 
    //     textSize: 25, 
    //     align: 'left'
    // };

    // this.goldGameText = {
    //     color:  '255, 215, 0, ',
    //     alpha: '10',
    //     textSize: 25,
    //     align: 'left'
    // };

export class TextHandler{
    constructor(game) {
        this.game = game;
        this.gameTexts = [];

        this.frames = 0;
        this.startTime = performance.now();
        this.FPSNormal = 0;
    }

    renderGameTexts(ctx){
        for (let i = this.gameTexts.length - 1; i >= 0; i-- ){
            const gameText = this.gameTexts[i];        
            gameText.draw(ctx);
            gameText.update();
            if (gameText.alpha <= 0){
                this.gameTexts.splice(i, 1);
            }
        }
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
        // this.towerDebugText(ctx);
        this.enemyDebugText(ctx);
        this.performanceDebugText(ctx);
    }

    renderbigScreenTexts(ctx, text, screenFill){
        if(screenFill){
            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        }
        this.drawText(ctx, text, GAME_WIDTH / 2, GAME_HEIGHT / 2, 100, 'center'); 
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
            this.drawText(ctx, enemy.priorityDistance, Math.floor(enemy.position.x / TILE_SIZE) * TILE_SIZE, Math.floor(enemy.position.y / TILE_SIZE) * TILE_SIZE + 20, HALF_TILE_SIZE, 'right');
            ctx.fillStyle = 'rgba(250, 0, 0, 0.4)';
            ctx.beginPath();
            ctx.arc(enemy.center.x, enemy.center.y, HALF_TILE_SIZE, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.fillStyle = 'rgba(250, 0, 0, 1)';
            ctx.fillRect(enemy.center.x, enemy.center.y, 5, 5);
        })
    }
    
    towerDebugText(ctx){
        this.game.renderHandler.towers.forEach(tower => {
            ctx.beginPath();
            ctx.arc(tower.center.x, tower.center.y, tower.range, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(200, 0, 0, 0.1)';
            ctx.fill();
            this.drawText(ctx, tower.range, tower.center.x, tower.center.y - TOWER_SIZE, HALF_TILE_SIZE, 'right');
        })
    }
    
    performanceDebugText(ctx){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(TILE_SIZE, TILE_SIZE * 3, TILE_SIZE * 3, TILE_SIZE * 2);
        const FPS = Math.round(this.game.FPSNormal * 1000) / 1000;
        this.drawText(ctx, `f p s: ${FPS}`, TILE_SIZE, TILE_SIZE * 4, HALF_TILE_SIZE, 'left');
    }
}
