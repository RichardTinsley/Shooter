RESEARCH: SCOPE/CLOSURE,  OBJECT.() PROTOTYPES, JS PERFORMANCE, WINDOW DOCUMENT

CREATE CLASS FILES FOR EACH TYPE.  SAPPHIRE TOWER.JS.  GET RID OF 'ADD'entity'() functions and just pass arrays. 
DEATH AND BATTLE HANDLERS MERGE, PUT SHOOT() BACK IN TOWER, BUT ITS HANDLED BY BIG BATTLE HANDLER
CLEAN UP SHOOT()/ MERGE target enemies and prioritise enemies in tower range.
if tower not an instanceof Empty tower // shoot
enemiesInRange[]
if enemySelect = enemiesInRange.find(enemy => enemy.isSelected); // return
else enemies in range.sort // return

CHECKCOLLISION WITH MOUSE WITHIN EACH ENTITY?

WITHIN BATTLE HANDLER CALL THESE.
PROJECTILE.ADD EFFECT (internally for each projectile type)  ENEMY.ADD EFFECT(BLOOD)

Gamehandler = GAME, frame = main /  ASSETLOADER TO HANDLER?  HANDLER FOLDER
TIMER CLASS, FIX TIME AND DELTA TIME, DEBUG FPS, (EVENT) on all entiry UPDATE methods

MAKE ENTITY HANDLER A STRICTLY ANIMATION HANDLER?
MOUSE CLASS, with setters /switch for changing cursor
MOUSE CURSORs AND QUICK LOADING THEM, add divs with different classes with cursors set

SCREEN CLASS, ALL SCREENS INHERIT FROM THIS  

ALL ENTITIES HAVE ANIMATION STATES, BUT ENEMY STATE DETERMINES ANIMATION ROW (ITS NOT A STATE)
MERGE UPDATE MOVEMENT FOR ENEMY AND PROJECTILE / GIVE DIRECTION/FIND ANGLE
MERGE ENTITY STATES, enemies and animation
ENTITY CLASS
MAKE USE OF POSITION AND CENTER, REMOVE HITBOX OBJECTS

UPDATE !event return. 
FIX PROJECTILE TRANSLATE/ROTATE/CENTER
AUDIO SOUND FX
enemy collisions, push each other away
animate enemy selection

See through options menu so game can keep running in background 

CLEAN UPSWITCHES multiple emptycases next toeach other:
case:pause
case:gameover




