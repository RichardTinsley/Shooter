import { HUDItem } from "./HUDItem.js";

export class HUDExperience extends HUDItem {
  experience: number = 0;

  constructor() {
    super();
    this.text = this.experience.toString();
  }

  getExperience() {
    return this.experience;
  }

  setExperience() {
    //ENEMY TYPE in parameter affect experience.  BOSS or EmeraldEnemy etc
    // if (Math.random() * 10 > 1) return 0;
    // const newExperience = Math.floor(Math.random() * waves + 1);
    // this.experience += newExperience;
    // this.text = this.experience.toString();
    // return newExperience + "exp";
  }
}
