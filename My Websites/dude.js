var onbox = false;
var dude = { // the guy
    X:0,
    Y:271,
    xVelocity:0,
    yVelocity:0,
    dude: document.getElementById("dude"),
    
};
var booleans = { //the booleans
    right:false,
    left:false,
    dtop:false,
  
};


/*
var block = document.getElementById("block");can be deleted
var blockX= block.style.left;
var blockY=block.style.top;
var right = false;
var left = false;
var dtop = false;
*/

/*var dudeX=0; can be deleted
var dudeY=271;
var xVelocity=0;
var yVelocity=0;
var dude =/*actual dude*//*  document.getElementById("dude"); can be deleted when not needed*/
document.onkeydown = doMovement;
document.onkeyup=falseBooleans;
function falseBooleans(e){
  booleans.right=false;
  booleans.left=false;
  booleans.dtop=false;
}
function doMovement(e){ //movement function, can be deleted when no longer needed
  /*switch(e.keyCode){
    case 39: //move right!
      xVelocity+=1;
      break;
    case 37: // move left!
      xVelocity-=1;
      break;
    case 38: //move up!
      yVelocity=-10;
      break;
  }*/
  if(e.keyCode===39){

    booleans.right = true; //making keys work so guy can move
  }
  if (e.keyCode===37){

    booleans.left=true;
  }
  if (e.keyCode===38){
    booleans.dtop = true;
  }

}

function update(){
  dude.yVelocity++; //gravity
  
  if(dude.Y>271&&dude.yVelocity>0){ //doesnt go through the ground
    dude.Y=271;
    dude.yVelocity=0;
  } //this is movement down here
  if (booleans.right === true&&dude.xVelocity<5){dude.xVelocity+=0.8;}//move right
  
  if (booleans.left === true&&dude.xVelocity>-5){dude.xVelocity -=0.8;} //move left
  
  if (booleans.dtop === true && (dude.Y >= 271 || onbox === true))/*move jump*/{dude.yVelocity -=10; onbox = false; }
  
  dude.Y+=dude.yVelocity;
  dude.X+=dude.xVelocity;
  
  if(dude.xVelocity>=0){
    dude.xVelocity-=0.2; //FRICTION
  }else if(dude.xVelocity<=0){
    dude.xVelocity+=0.2; //FRICTION
    
  }
  
  if(Math.abs(dude.xVelocity)<0.5){  //no weird shaking
    dude.xVelocity=0;
  }
  
  if (dude.X<0){//no double jump
    dude.X=0;
    dude.xVelocity=0;
  }
  
  dude.dude.style.left= dude.X+"px" ; //changing the y value and x value of the dude
 dude.dude.style.top= dude.Y+"px" ;
 if (380+"px">=dude.X>=370+"px"&&210+"px">=dude.Y>=200+"px"){
   dude.xVelocity=0;
   dude.yVelocity=0; //the actual changing doms
   
 }
 if (200>dude.X && dude.X > 125&&dude.Y<225){ //box and collision
   dude.yVelocity=0;
   if (dude.Y===221){
     dude.yVelocity=0;}
   onbox = true;
 } window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);
