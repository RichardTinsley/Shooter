//   export class Wave {
//     constructor() {
//       this.enemySpawnTimer = 0;
//       this.enemyCounter
//       this.maxEnemies = 8;
//     }
// setMaxEnemies(){
//     this.maxenemies = this.waves + 10 //and add 20% floored until 150 enemies max
// }

// switch(this.state){
//     case: NEWWAVE:
//         this.spawnEnemies
//     case: CURRENTWAVWE:
//         //NOTHING
//     case: ENDWAVE
//     // reset counter, increase max enemies, increment waves
//}

// setWave(){ //ACCESS FROM ENEMY IN DEATH STATE
//     if(enemies.length === 0){
// this.state = NEW WAVE
//         waves++
//         this.newWave()
//     }
// }

// allEnemiesActive(){
// this.state = CURRENT WAVE
// return this.enemyCounter === this.maxEnemies
//
// }

//     newWaveCheck(enemies) {
//       if (enemies.length === 0 && this.allEnemiesActive) {
//         HUD.setWave();
//         this.maxEnemies++;
//         this.enemyCounter = 0;
//         this.allEnemiesActive = false;
//       }
//     }

//     spawnEnemy(enemies) {
//       // 2% Health and Armour increase depending on round?
//       if (enemies.length >= HUD.getWave() + 10) {
//         this.allEnemiesActive = true;
//         return;
//       }

//       if (this.enemySpawnTimer % Math.floor(Math.random() * 100) === 0) {

//         this.enemyCounter++;
//       }
//     }
//   }
