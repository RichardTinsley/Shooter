import { Position } from "../constants/types.js";
import { HUD } from "../GUI/HUD/HUD.js";
import { Time } from "../handlers/Time.js";
import { checkCircleCollision } from "./collisionDetection.js";

export enum DIRECTION {
  LEFT = -1,
  RIGHT = 1,
}

export function setAngle(position: Position, destination: Position) {
  const dy = destination.y - position.y;
  const dx = destination.x - position.x;
  return Math.atan2(dy, dx);
}

export function getDirection(angle: number) {
  if (angle < 1.57 && angle > -1.57) return DIRECTION.RIGHT;
  else return DIRECTION.LEFT;
}

export function updatePosition(
  position: Position,
  angle: number,
  speed: number
) {
  position.x += Math.cos(angle) * speed * Time.deltaTimeMultiplier;
  position.y += Math.sin(angle) * speed * Time.deltaTimeMultiplier;
}

export function enemyMovement(enemy: any) {
  if (checkCircleCollision(enemy.position, enemy.destination, 5, 10)) {
    enemy.movement.waypointIndex++;

    if (enemy.movement.waypointIndex === enemy.movement.waypoints.length) {
      HUD.hudLives.setLives();
      enemy.movement.waypointIndex = 0;
      enemy.setPosition(enemy.movement.waypoints[enemy.movement.waypointIndex]);

      enemy.sprite.setPosition(enemy.position);
      enemy.hitDetection.setPosition(enemy.position);
      enemy.healthBar.setPosition(enemy.position);
    }

    enemy.setDestination(
      enemy.movement.waypoints[enemy.movement.waypointIndex]
    );
    enemy.movement.angle = setAngle(enemy.position, enemy.destination);
    enemy.sprite.setDirection(getDirection(enemy.movement.angle));
  }

  updatePosition(enemy.position, enemy.movement.angle, enemy.movement.speed);
  enemy.movement.setPriorityDistance(enemy);
}
