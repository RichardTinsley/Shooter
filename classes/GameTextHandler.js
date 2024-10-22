import { GAME_WIDTH, GAME_HEIGHT, ROWS, COLUMNS, TILE_SIZE, HALF_TILE_SIZE, TOWER_SIZE } from "../index.js";

export class GameTextHandler{
    constructor(game) {
        this.game = game;
    }

    BigScreenText(ctx, text){
        ctx.drawImage(this.game.assetHandler.levelOneImage, 0, 0);
        this.game.renderHandler.placementTiles.forEach(tile => tile.draw(ctx));
        this.game.renderHandler.enemies.sort((a, b) => a.position.y - b.position.y).forEach(enemy => enemy.draw(ctx));
        this.game.renderHandler.towers.forEach(tower => tower.draw(ctx));
        this.game.renderHandler.projectiles.forEach(projectile => projectile.draw(ctx));
        this.game.renderHandler.effects.forEach(effect => effect.draw(ctx));
        this.game.renderHandler.gameTexts.forEach(text => text.draw(ctx));
        this.renderAllGUIText(ctx);
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        this.GUIText(ctx, text, GAME_WIDTH / 2, GAME_HEIGHT / 2, 100, 'center'); 
    }
    
    renderAllGUIText(ctx){
        this.GUIText(ctx, this.game.hearts, 65, 52, 20,'left');
        this.GUIText(ctx, this.game.coins, 225, 52, 20,'left');
        this.GUIText(ctx, this.game.exp, 515, 52, 20,'left');
        this.GUIText(ctx, this.game.waves, 805, 52, 20,'left');
        this.GUIText(ctx, this.game.timer, 1155, 52, 20,'left');
    }
    
    GUIText(ctx, text, x, y, textSize, align){
        ctx.fillStyle = 'white';
        ctx.font = 'bold ' + textSize + 'px canterbury';
        ctx.textAlign = align;
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x + 5, y - 3);
    }
    
    renderAllDebugInfoText(ctx){
        this.game.calculateFPSNormal();
        this.LevelDebugText(ctx);
        this.TowerDebugText(ctx);
        this.EnemyDebugText(ctx);
        this.PerformanceDebugText(ctx);
    }
    
    LevelDebugText(ctx){
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
    
    EnemyDebugText(ctx){
        this.game.renderHandler.enemies.forEach(enemy => {
            ctx.fillStyle = 'rgba(250, 0, 0, 0.3)';
            ctx.fillRect(enemy.position.x, enemy.position.y, TILE_SIZE, TILE_SIZE);
            ctx.fillStyle = 'rgba(0, 0, 250, 0.3)';
            ctx.fillRect(Math.floor(enemy.position.x / TILE_SIZE) * TILE_SIZE, Math.floor(enemy.position.y / TILE_SIZE) * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            this.GUIText(ctx, enemy.priorityDistance, Math.floor(enemy.position.x / TILE_SIZE) * TILE_SIZE, Math.floor(enemy.position.y / TILE_SIZE) * TILE_SIZE + 20, HALF_TILE_SIZE, 'right');
        })
    }
    
    TowerDebugText(ctx){
        this.game.renderHandler.towers.forEach(tower => {
            ctx.beginPath();
            ctx.arc(tower.center.x, tower.center.y, tower.range, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(200, 0, 0, 0.1)';
            ctx.fill();
            this.GUIText(ctx, tower.range, tower.center.x, tower.center.y - TOWER_SIZE, HALF_TILE_SIZE, 'right');
        })
    }
    
    PerformanceDebugText(ctx){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(TILE_SIZE, TILE_SIZE * 3, TILE_SIZE * 3, TILE_SIZE * 2);
        const FPS = Math.round(this.game.FPSNormal * 1000) / 1000;
        this.GUIText(ctx, `f p s: ${FPS}`, TILE_SIZE, TILE_SIZE * 4, HALF_TILE_SIZE, 'left');
    }
}
