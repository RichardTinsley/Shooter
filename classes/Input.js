import { Tower } from "./Tower.js";
import { HALF_TILE_SIZE, ENEMY_SIZE, TOWER_SIZE } from "../index.js";

const PAUSE = 'PAUSE';
const DEBUG = 'DEBUG';

export class Input {
    constructor(game, world, towers, enemies){
        this.game = game;
        this.world = world
        this.towers = towers;
        this.enemies = enemies;
        
        this.mouse = {
            x: undefined,
            y: undefined
        };

        this.keys = [];
        this.activeTile = undefined;
        
        window.addEventListener('click', e => {
            if (this.activeTile && !this.activeTile.isOccupied && this.game.coins - 25 >= 0) {
                this.towers.towers.push(
                    new Tower({
                        game: this.game,
                        sprite: { 
                            imageLeft: "",
                            imageRight: document.getElementById('sapphire1'), 
                            x: 0, 
                            y: 0, //Animation Row
                            width: TOWER_SIZE, 
                            height: TOWER_SIZE 
                        },
                        position: { 
                            x: this.activeTile.position.x - HALF_TILE_SIZE,
                            y: this.activeTile.position.y - HALF_TILE_SIZE  
                        },
                        scale: 1,
                    })
                );
        
                this.activeTile.isOccupied = true;
                this.towers.towers.sort((a, b) => {
                    return a.position.y - b.position.y;
                })
            }
        })
        
        window.addEventListener('mousemove', e => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            this.activeTile = null;
            const cursor = document.getElementById("canvas");
        
            for (let i = 0; i < this.world.placementTiles.length; i++) {
                const tile = this.world.placementTiles[i];
                if (
                    this.mouse.x > tile.position.x &&
                    this.mouse.x < tile.position.x + tile.size &&
                    this.mouse.y > tile.position.y &&
                    this.mouse.y < tile.position.y + tile.size
                ) {
                    this.activeTile = tile;
                    break;
                }
            }

            for (let i = 0; i < this.enemies.enemies.length; i++) {
                const enemy = this.enemies.enemies[i];
                const enemyX = enemy.center.x - enemy.thirdWidth;
                const enemyWidth = enemy.thirdWidth * 2;
                const enemyY = enemy.center.y - enemy.scale * 30;
                const enemyHeight = ENEMY_SIZE * enemy.scale;
                if (
                    this.mouse.x > enemyX &&
                    this.mouse.x < enemyX + enemyWidth &&
                    this.mouse.y > enemyY &&
                    this.mouse.y < enemyY + enemyHeight
                ) {
                    cursor.style = "cursor: url(./images/cursors/text.cur), auto;";
                    break;
                } else {
                    cursor.style = "cursor: url(./images/cursors/normal.cur), auto;";
                }
            }
        })
        
        window.addEventListener('keydown', e =>{
            if (e.key.toLowerCase() === 'p')
                this.keyPressed(PAUSE);
            else if (e.key.toLowerCase() === 'o')
                this.keyPressed(DEBUG);
        });

        window.addEventListener('keyup', e =>{
            if (e.key.toLowerCase() === 'p')
                this.keyReleased(PAUSE);
            else if (e.key.toLowerCase() === 'o')
                this.keyReleased(DEBUG);
        });
    }
    
    get lastKey(){ return this.keys[0]; }

    keyPressed(key){
        if (this.keys.indexOf(key) === -1)
            this.keys.unshift(key);
        
        if(key === 'PAUSE') {
            if(this.game.isRunning){
                this.game.audio.pause();
            }
            else {
                // animate();
                this.game.audio.play();
            }
            this.game.isRunning = !this.game.isRunning;
        }
        if(key === 'DEBUG')
            this.game.debug = !this.game.debug;
    }

    keyReleased(key){
        const index = this.keys.indexOf(key);
        if (index === -1) return;
        this.keys.splice(index, 1);
    }  
}