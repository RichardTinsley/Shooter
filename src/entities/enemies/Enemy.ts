import { MovingSprite } from "../MovingSprite.js";

export class Enemy extends MovingSprite {
  // this.isPillaged = false;

  // this.health = new HealthBar({
  //     length: this.halfWidth,
  // })

  // this.waypoints;
  // this.waypointIndex = 0;

  //   constructor() {
  //     super();
  //   }

  draw(ctx: CanvasRenderingContext2D) {
    this.contextSave(ctx);
    super.draw(ctx);
    this.contextRestore(ctx);
  }

  update() {}

  checkWaypointArrival() {
    // let waypointCenter = {...this.waypoints[this.waypointIndex]};
    // waypointCenter.radius = 5;
    // if (checkCircleCollision(this.center, waypointCenter))
    //     this.waypointIndex++;
  }

  checkEndpointArrival() {
    // if(this.waypointIndex === this.waypoints.length){
    //     HUD.setLives();
    //     this.waypointIndex = 0;
    //     this.position = {...this.waypoints[this.waypointIndex]};
    // }
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
}
