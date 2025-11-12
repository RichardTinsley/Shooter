import { checkCircleCollision } from "../utilities/collisionDetection.js";
import { getDirection } from "../utilities/math.js";
import { ComponentBaseClass } from "./ComponentBaseClass.js";

export class EnemyMovement extends ComponentBaseClass {
  draw(ctx: CanvasRenderingContext2D, information: Information): void {
    return;
  }

  update(information: Information): void {
    if (checkCircleCollision(information.position, information.destination, 5, 10)) {
      information.waypointIndex++;

      if (information.waypointIndex === information.waypoints.length) {
        HUD.hudLives.setLives();
        information.waypointIndex = 0;
        information.setPosition(information.waypoints[information.waypointIndex]);
      }

      information.setDestination(information.waypoints[information.waypointIndex]);
      information.setAngle(information.position, information.destination);
      information.setDirection(getDirection(information.angle));
    }

    updatePosition(information.position, information.angle, information.speed);
    setPriorityDistance(information);
  }
}
