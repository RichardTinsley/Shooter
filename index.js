import { Game } from "./classes/Game.js";
import { World } from "./classes/World.js";
import { Input } from "./classes/Input.js";
import { EnemyHandler } from "./classes/EnemyHandler.js";
import { TowerHandler } from "./classes/TowerHandler.js";
import { PlacementTileHandler } from "./classes/PlacementTileHandler.js";

export const TILE_SIZE = 32;
export const HALF_TILE_SIZE = TILE_SIZE / 2;
export const ENEMY_SIZE = 48;
export const TOWER_SIZE = 64;
export const COLUMNS = 40;
export const ROWS = 24;
const GAME_WIDTH = TILE_SIZE * COLUMNS;
const GAME_HEIGHT = TILE_SIZE * ROWS;

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
    ctx.imageSmoothingEnabled = false;
    
    const game = new Game();
    const world = new World(game);
    const enemyHandler = new EnemyHandler(game);
    const towerHandler = new TowerHandler(game, enemyHandler);
    const placementTileHandler = new PlacementTileHandler();
    const input = new Input(game, world, towerHandler, enemyHandler, placementTileHandler);

    setInterval(() => { game.timer++ }, 1000);
    
    let lastTime = 0;
    function animate(timeStamp){
        const animationID = requestAnimationFrame(animate);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        
        world.drawBackground(ctx);
        placementTileHandler.renderTiles(ctx, input);
        enemyHandler.beginWave(timeStamp);
        enemyHandler.renderEnemies(ctx, deltaTime);
        towerHandler.renderTowers(ctx, deltaTime);
        game.renderGUI(ctx, deltaTime);
        enemyHandler.newWave();

        if(game.hearts === 0){
            cancelAnimationFrame(animationID);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
            game.drawText(ctx, "GAME OVER", GAME_WIDTH / 2, GAME_HEIGHT / 2, 100, 'center');
        }
//     if(!input.isRunning) 
//         return;
    }
    requestAnimationFrame(animate);
});

/* 
PAUSE FUNCTIONALITY
DYING ANIMATIONS / ENEMY STATES
PARTCILE EFFECTS
Ruby		Splash damage
*Emerald  	Poison, damage, reduce armour
Amethyst  	Air Attack only
Sapphire	Freeze / slow group 
Topaz 		rapid fire
Diamond		Heavy damage / stun / critical hit 
Gold 		money generation, weak damage
Silver		Sniper range
Opal		Tower boost auras
Citrine     chain lighting, spreadshot
*Uranium	Enemy Damage, weakness auras / remove armour and abilities
Obsidian	rail gun laser
fire pit, landmines, net traps /air units to the ground
*/