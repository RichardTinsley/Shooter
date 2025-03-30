import { Position } from "../../constants/types.js";
import { checkCircleCollision } from "../../utilities/collisionDetection.js";
import { MovingSprite } from "../MovingSprite.js";

export class Enemy extends MovingSprite {
  // this.isPillaged = false;

  // this.health = new HealthBar({
  //     length: this.halfWidth,
  // })

  protected waypointIndex = 0;

  constructor(
    fileName: string,
    spriteWidth: number,
    spriteHeight: number,
    protected waypoints: Array<Position>
  ) {
    super(fileName, spriteWidth, spriteHeight);
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.contextSave(ctx);
    super.draw(ctx);
    this.contextRestore(ctx);
  }

  update() {
    super.update();
    this.checkWaypointArrival();
    this.checkEndpointArrival();
  }

  checkWaypointArrival() {
    if (checkCircleCollision(this.position, this.destination, 2, 2)) {
      this.destination = this.waypoints[(this.waypointIndex += 1)];
    }
  }

  checkEndpointArrival() {
    if (this.waypointIndex === this.waypoints.length) {
      // HUD.setLives();
      this.waypointIndex = 0;
      this.setPosition(this.waypoints[this.waypointIndex]);
      this.setDestination(this.waypoints[this.waypointIndex]);
    }
  }

  checkEnemyHealth() {
    // if(!this.health.isAlive() && !this.isEnemyDying()){
    // this.sprite.row = OBJECTS.STATES.DYING;
    // this.sprite.frame = 0;
    // this.center.y = this.position.y;
    // this.center.radius /= 4;
  }

  updateDeathAnimation() {
    // if(event){
    //     if(this.sprite.frame < this.maxFrame)
    //         this.sprite.frame++;
    //     else
    //         this.sprite.frame = this.maxFrame;
    //     if(this.height > 2)
    //         this.height -= 2;
    //     else
    //         this.state = OBJECTS.ANIMATION.FINISHED;
    // }
  }

  updatePriorityDistance() {
    // const yDistance = this.destination.y - this.position.y;
    // const xDistance = this.destination.x - this.position.x;
    // this.priorityDistance = Math.round(
    //   Math.abs(xDistance) + Math.abs(yDistance)
    // );
  }

  // getWaypoints(): Array<Position> {
  //   return this.waypoints;
  // }
}
