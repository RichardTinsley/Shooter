SCREEN CLASS, ALL SCREENS INHERIT FROM THIS / FADE TRANSITIONS ctx.globalalpha?
GETRIDE OF MAX LOADBAR.  / ASSETS.LENGTH / var assetsloaded to assetsloadedcounter
MENU CLASS, mouse over update text blur
window.onload vs window.addevent listener("load)

DEATH AND BATTLE HANDLERS MERGE, PUT SHOOT() BACK IN TOWER, BUT ITS HANDLED BY BIG BATTLE HANDLER
WITHIN BATTLE HANDLER CALL THESE.
PROJECTILE.ADD EFFECT (internally for each projectile type)  ENEMY.ADD EFFECT(BLOOD)
CLEAN UP SHOOT()/ MERGE target enemies and prioritise enemies in tower range.
if tower not an instanceof Empty tower // shoot
enemiesInRange[]
if enemySelect = enemiesInRange.find(enemy => enemy.isSelected); // return
else enemies in range.sort // return

mOVING SPRITE CLASS
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




