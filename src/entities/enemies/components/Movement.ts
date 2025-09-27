import { Position } from "../../../constants/types.js";
import { HUD } from "../../../GUI/HUD/HUD.js";
import { Level } from "../../../handlers/Level.js";
import { checkCircleCollision } from "../../../utilities/collisionDetection.js";
import { getDirection, setAngle, updatePosition } from "../../../utilities/entityMovement.js";
import { randomFloat } from "../../../utilities/math.js";

export class Movement {
  private waypoints = Level.getEnemyGeneratedWaypoints();
  private waypointIndex: number = 1;
  private priorityDistance: number = 0;

  private speed!: number;
  private delta: number = 0.15;
  private angle!: number;

  update(enemy: any) {
    this.enemyMovement(enemy);
  }

  getWaypoints(): Position {
    return { ...this.waypoints[this.waypointIndex] };
  }

  getPriorityDistance(): number {
    return this.priorityDistance;
  }

  setSpeed(speed: number) {
    this.speed = randomFloat(speed - speed * this.delta, speed + speed * this.delta);
  }

  setPriorityDistance(enemy: any) {
    const dx = enemy.destination.y - enemy.position.y;
    const dy = enemy.destination.x - enemy.position.x;
    this.priorityDistance = Math.round(Math.abs(dx) + Math.abs(dy));
  }

  enemyMovement(enemy: any) {
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

      enemy.setDestination(enemy.movement.waypoints[enemy.movement.waypointIndex]);
      enemy.movement.angle = setAngle(enemy.position, enemy.destination);
      enemy.sprite.setDirection(getDirection(enemy.movement.angle));
    }

    updatePosition(enemy.position, enemy.movement.angle, enemy.movement.speed);
    enemy.movement.setPriorityDistance(enemy);
  }
}
