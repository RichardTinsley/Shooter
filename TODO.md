Loading Screen is 108 lines.

SCREEN to SCENE, MOVE MUSIC INTO SCENE
move Assets to utilities, AND MOVE loadassets to assets in utilities
DELETE this.loadBar = this.maxLoadBar;
SCREEN CLASS, ALL SCREENS INHERIT FROM THIS  
TEXT CLASS, MERGE ALL TEXT FUNCTIONALITY., draw and update.  Handles its own global alpha, fading, movement AND textblur oscillation
window.onload vs window.addevent listener("load)

DEATH AND BATTLE HANDLERS MERGE, PUT SHOOT() BACK IN TOWER, BUT ITS HANDLED BY BIG BATTLE HANDLER
WITHIN BATTLE HANDLER CALL THESE.
PROJECTILE.ADD EFFECT (internally for each projectile type)  ENEMY.ADD EFFECT(BLOOD)
CLEAN UP SHOOT()/ MERGE target enemies and prioritise enemies in tower range.
if tower not an instanceof Empty tower // shoot
enemiesInRange[]
if enemySelect = enemiesInRange.find(enemy => enemy.isSelected); // return
else enemies in range.sort // return
DELTA TIME * ENEMY MOVIE, (EVENT) on all entiry UPDATE methods UPDATE !event return

CHECKCOLLISION WITH MOUSE WITHIN EACH ENTITY?
MERGE UPDATE MOVEMENT FOR ENEMY AND PROJECTILE / GIVE DIRECTION/FIND ANGLE
MAKE USE OF POSITION AND CENTER, REMOVE HITBOX OBJECTS
FIX PROJECTILE TRANSLATE/ROTATE/CENTER
AUDIO SOUND FX
enemy collisions, push each other away
animate enemy selection

See through options menu so game can keep running in background 
RESEARCH: ASYNC, AWAIT, PROMISES,  SCOPE/CLOSURE,  OBJECT.() PROTOTYPES, JS PERFORMANCE, WINDOW DOCUMENT




