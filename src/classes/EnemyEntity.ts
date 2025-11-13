import { COLOURS, getColour } from "../constants/colours.js";
import { MovementType, StatusType, VisualType } from "../types/entities.js";
import { Entity } from "./Entity.js";

export default class Enemy extends Entity {
  protected information!: VisualType & MovementType & StatusType;
  constructor() {
    super();
    this.information.statusBarColour = getColour(COLOURS.GREEN);
  }
}
