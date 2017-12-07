//JavaScripaddleThickness
var debug = document.getElementById('velocityDebug');
var c= document.getElementById('gc');
var cc = c.getContext('2d');
// cc.translate(0,800);
setInterval(update, 1000/60); //SET FRAMERATE AT 60 fps
document.addEventListener('keydown', function(e){
     const keyName = event.key;
     if ((keyName == 'ArrowUp' || keyName == 'w')&&(boats[0].yv >= -.4)){
          boats[0].yv -= 0.01;
     }
     if ((keyName == 'ArrowDown' || keyName == 's')&&(boats[0].yv <= .4)){
          boats[0].yv += 0.01;
     }
     if ((keyName == 'ArrowLeft' || keyName == 'a')&&(boats[0].xv >= -.4)){
          boats[0].xv -= 0.01;
     }
     if ((keyName == 'ArrowRight' || keyName == 'd')&&(boats[0].xv <= .4)){
          boats[0].xv += 0.01;
     }
});
var boatThickness = 20;
var boatLength = 40;

//Prototype a boat
function Boat(isAlive, idNum, xc, yc, xv, yv, angle, health) {
     this.isAlive = isAlive;
    this.idNum = idNum;
    this.xc = xc;
    this.yc = yc;
    this.xv = xv;
    this.yv = yv;
    this.angle = angle;
    this.health = health;
    this.hit = function (name) {
        this.health -= 10;
    };
}
var boats = []; //Create the boats array
var howManyBoats = 0; //Decide how many boats
//for (i = 0; i<0; i++){ //Initially spawn the boats.

var xSpawn = c.width/2;//SPAWNING TEST BOAT
console.log(xSpawn);
var ySpawn = c.height/2;
console.log(ySpawn);

boats.push(new Boat(true,0,xSpawn,ySpawn,0,0,0,100));
//creating and spawning all the boats.

function getBoatAngle(xv,yv) {

}
function drawBoat(){
     boats[0].xc+=boats[0].xv;
     var newX = boats[0].xc -10;
     boats[0].yc+=boats[0].yv;
     var newY = boats[0].yc - 20;
     var boatTilt = getBoatAngle(boats[0].xv,boats[0].yv);

     cc.save();
     cc.translate(newX,newY);
          cc.rotate(boatTilt*Math.PI/180);
               cc.fillRect(0,0,20,40);
     //      cc.rotate(-boatTilt*Math.PI/180);
     // cc.translate(-newX, -newY);
     cc.restore();
}
function update(){
     //Want to check all boats
     //cc.translate(0,0);
     cc.fillStyle='lightblue';
     cc.fillRect(0,0,c.width, c.height);
     cc.fillStyle='SaddleBrown';
     //for boats in boats
     drawBoat();


     document.getElementById("velocityDebug").innerHTML = "xCoord: "+boats[0].xc+" yCoord: "+boats[0].yc;
          //"X-Velocity: "+boats[0].xv+" Y-Velocity: "+boats[0].yv

     //cc.fillText(player1Score, 100,100); //WRITING PLAYER 1's SCORE
}
