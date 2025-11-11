import { COLOURS, getColour } from "../constants/colours.js";
import { MovementInformation, StatusInformation, VisualInformation } from "../types/entities.js";
import StatusEntity from "./StatusEntity.js";

export default class Enemy extends StatusEntity {
  protected information!: VisualInformation & MovementInformation & StatusInformation;
  constructor() {
    super();
    this.information.statusBarColour = getColour(COLOURS.GREEN);
  }
}
