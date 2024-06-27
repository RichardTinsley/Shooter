import { Game } from "./classes/Game.js";
import { Wave } from "./classes/Wave.js";

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
    const wave = new Wave(game);
    setInterval(() => { game.timer++ }, 1000);

    let lastTime = 0;
    function animate(timeStamp){
        const animationID = requestAnimationFrame(animate);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        
        game.render(ctx, deltaTime);
        wave.triggerEnemies(animationID);
        wave.renderEnemies(ctx);
//     if(!input.isRunning) 
//         return;
        wave.startNewWave();
        if(game.hearts === 0){
            cancelAnimationFrame(animationID);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
            game.drawText(ctx, "GAME OVER", GAME_WIDTH / 2, GAME_HEIGHT / 2, 30, 'center');
        }
    }
    requestAnimationFrame(animate);
});

// const explosions = [];
// function animate(){
//     for (let i = explosions.length - 1; i >= 0; i--) {
//         const explosion = explosions[i];
//         explosion.draw(ctx);
//         explosion.update(ctx);
//         if (explosion.frames.current >= explosion.frames.max - 1) {
//             explosions.splice(i, 1);
//         }
//     }
// }
/* 
PAUSE FUNCTIONALITY
TOWERS
DYING ANIMATIONS
ALL ENEMIES
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
*Uranium		Enemy Damage, weakness auras / remove armour and abilities
Obsidian	rail gun laser
fire pit, landmines, net traps /air units to the ground
*/