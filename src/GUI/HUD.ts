// import * as GAME from "../constants/game.js";
// import * as INTERFACE from "../constants/interface.js";
// import { Time } from "./Time.js";
// import { HUDItem } from "../components/HUDItem.js";
// import { MenuBox } from "../components/MenuBox.js";

// let lives = 2;
// let coins = 100;
// let experience = 0;
// let mana = 0;
// let waves = 1;
// let timer = 0;

// export class HUD{
//     constructor(switchScenes){
//         this.switchScenes = switchScenes;
//         lives = 2;
//         coins = 100;
//         experience = 0;
//         mana = 0;
//         waves = 1;
//         timer = 0;

//         this.position = {
//             x: 16,
//             y: 16,
//         }

//         this.HUDBox = new MenuBox({
//             position: {
//                 x: this.position.x,
//                 y: this.position.y,
//             }
//         })

//         this.HUDLives = new HUDItem({
//             position: {
//                 x: this.position.x + 16,
//                 y: this.position.y + 16,
//             },
//             icon: "lives",
//         });

//         this.HUDCoins = new HUDItem({
//             position: {
//                 x: this.position.x + 112,
//                 y: this.position.y + 16,
//             },
//             icon: "coins",
//         });

//         this.HUDExperience = new HUDItem({
//             position: {
//                 x: this.position.x + 240,
//                 y: this.position.y + 16,
//             },
//             icon: "experience",
//         });

//         this.HUDWaves = new HUDItem({
//             position: {
//                 x: this.position.x + 368,
//                 y: this.position.y + 16,
//             },
//             icon: "waves",
//         });

//         this.HUDTimer = new HUDItem({
//             position: {
//                 x: this.position.x + 496,
//                 y: this.position.y + 16,
//             },
//             icon: "timer",
//         });
//     }

//     draw(ctx){
//         this.drawHUDBackground(ctx);
//         this.HUDBox.draw(ctx);
//         this.HUDLives.draw(ctx, lives);
//         this.HUDCoins.draw(ctx, coins);
//         this.HUDExperience.draw(ctx, experience);
//         this.HUDWaves.draw(ctx, waves)
//         this.HUDTimer.draw(ctx, timer);
//     }

//     update(event){
//         timer = Time.displayTimer();
//         if(lives <= 0)
//             this.switchScenes(GAME.STATES.GAMEOVER);
//     }

//     static setLives(){
//         lives--;
//     }

//     static getCoins(){
//         return coins;
//     }

//     static buy(cost){
//         coins -= cost;
//     }

//     static setCoins(){//ENEMY TYPE in parameter affect gold.  BOSS or GoldEnemy etc
//         const newCoins = Math.floor(Math.random() * waves + 1);
//         coins += newCoins;
//         return '$' + newCoins
//     }

//     getExperience(){
//         return experience;
//     }

//     static setExperience(){//ENEMY TYPE in parameter affect experience.  BOSS or EmeraldEnemy etc
//         if (Math.random() * 10 > 1)
//             return 0

//         const newExperience = Math.floor(Math.random() * waves + 1);
//         experience += newExperience;
//         return newExperience + 'exp'
//     }

//     static getWave(){
//         return waves;
//     }

//     static setWave(){
//         waves++;
//     }

//     waveText(){
//         if(waves === 1)
//         {}
//     }

//     drawHUDBackground(ctx){
//         ctx.beginPath();
//         ctx.fillStyle = INTERFACE.COLOURS.DARKSHADOW;
//         ctx.fillRect(this.position.x + 2, this.position.y + 2, GAME.SIZES.TILE * 26 - 4, GAME.SIZES.TILE * 2 - 4);
//         ctx.closePath();
//     }
// }
