Build tower modal with animated SPRITEs.
SCREEN SHRINKER FROM SHEZZOR
scale modals?

DELTA TIME * ENEMY MOVIE, (EVENT) on all entiry UPDATE methods UPDATE !event return
MERGE UPDATE MOVEMENT FOR ENEMY AND PROJECTILE / GIVE DIRECTION/FIND ANGLE

AUDIO SOUND FX
enemy collisions, push each other away
animate enemy selection

See through options menu so game can keep running in background 
RESEARCH: ASYNC, AWAIT, PROMISES,  SCOPE/CLOSURE,  OBJECT.() PROTOTYPES, JS PERFORMANCE, WINDOW DOCUMENT
https://www.basedash.com/blog/overview-the-double-question-mark-in-javascript

PASS SWITCH SCREENS RECURSIVELY FOR GAMEOVER?


// LASER LINES        
// ctx.beginPath();
// ctx.moveTo(this.position.x, this.position.y);
// ctx.lineTo(this.center.x, this.center.y);
// ctx.strokeStyle = "red";
// ctx.stroke();

// FOR SPRITE SHEETS WITH MULTIPLE ROWS
// animate(event){
//     if(!event || this.maxFrame === 0)
//         return

//     if(this.maxRow === 0)
//         this.sprite.frame < this.maxFrame ? this.sprite.frame++ : this.sprite.frame = 0;
//     else
//         this.animateRows();
// }

// animateRows(){
//     if(this.sprite.frame < this.maxFrame)
//         this.sprite.frame++;
//     else{
//         this.sprite.row++;
//         this.sprite.frame = 0;
//     }
//     if(this.sprite.row === this.maxRow && this.sprite.frame < this.maxFrame){
//         this.sprite.row = 0;
//         this.sprite.frame = 0;
//     }
// }