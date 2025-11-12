import { COLOURS, getColour } from "../constants/colours.js";
import { MovementType, StatusType, VisualType } from "../types/entities.js";
import StatusEntity from "./StatusEntity.js";

export default class Enemy extends StatusEntity {
  protected information!: VisualType & MovementType & StatusType;
  constructor() {
    super();
    this.information.statusBarColour = getColour(COLOURS.GREEN);
  }
}
