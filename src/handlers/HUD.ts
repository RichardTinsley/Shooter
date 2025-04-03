import { Time } from "./Time.js";

export class HUD {
  static lives: number = 10;
  static coins: number = 100;
  static experience: number = 0;
  static waves: number = 1;
  static timer: string = Time.displayTimer();

  constructor() {}

  static setLives() {
    HUD.lives--;
  }

  static getCoins() {
    return HUD.coins;
  }

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

  //   static setExperience(){//ENEMY TYPE in parameter affect experience.  BOSS or EmeraldEnemy etc
  //       if (Math.random() * 10 > 1)
  //           return 0

  //       const newExperience = Math.floor(Math.random() * waves + 1);
  //       experience += newExperience;
  //       return newExperience + 'exp'
  //   }

  static getWave() {
    return HUD.waves;
  }

  static setWave() {
    HUD.waves++;
  }
}
