import { Tower } from "./Tower.js";

const PAUSE = 'PAUSE';
const DEBUG = 'DEBUG';

export class Input {
    constructor(game){
        this.game = game
        this.mouse = {
            x: undefined,
            y: undefined
        }

        this.keys = [];
        this.activeTile = undefined;
        
        window.addEventListener('click', e => {
            if (this.activeTile && !this.activeTile.isOccupied && this.game.coins - 25 >= 0) {
                this.game.towers.push(
                    new Tower({ 
                        position: { 
                            x: this.activeTile.position.x, 
                            y: this.activeTile.position.y } 
                        },
                        './img/towers/sapphire1.png'
                    ));
        
                    this.activeTile.isOccupied = true;
                this.game.towers.sort((a, b) => {
                    return a.position.y - b.position.y;
                })
            }
        })
        
        window.addEventListener('mousemove', e => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            this.activeTile = null;
        
            for (let i = 0; i < this.game.world.placementTiles.length; i++) {
                const tile = this.game.world.placementTiles[i];
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