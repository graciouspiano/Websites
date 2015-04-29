  

function plus() { //this is the function that makes the y value increase, therefore making it go down.
  fall++;
}
function minus(){
  fall--; // this is the function that makes the y value decrease, which makes it go up
/*  if (fall <0){ // this if statement makes sure that the image doesnt start going up, and so it limits how much the variable fall can change.
    fall = 0;
  }*/
}

var fall = 0; //falling variable
var imageY=0; // y value of the image
function runMe(){ //main function that updates
  if (imageY >= window.innerHeight){
  fall=-4;
}
  imageY+=fall;
 document.getElementById("catPic").style.top = y-100 + imageY+"px"; window.requestAnimationFrame(runMe);
}
var jesusman1= "http://i.imgur.com/5ruAbxu.png";
var cat1 = "http://five23.github.io/nibble/img/nibble.png";
var echidna1="http://free-fun-n-games.webs.com/clip%20art/echidna%20clipart%20sm%205%20cm%20wide.gif";
var crab1 = "http://fla.fg-a.com/crabs/king-crab-1.gif";
var kiwibird1="http://www.clipartlord.com/wp-content/uploads/2013/12/kiwi2.png";
/* these are the variables ^, also the stuff under this is how we randomize the pictures and then make the button work. So rand is the math stuff which gives you either 0,1,2, and then the function gives you either 0,1 and adds 1 to every answer. If rand is more than two, you subtract 3, and the loops restarts. Then the if statement checks what number it is, and then plugs in the variable which has the image in it.*/
var rand = Math.floor(Math.random()*4);

function random(){
  
  rand += Math.floor(Math.random()*4) + 1;
  if(rand > 4) rand -= 5;
  if (rand===0){
      blank = cat1;
     
} else if (rand ===1){
  blank = echidna1;
} else if (rand===2){//randomizer
  blank = crab1;
} else if (rand===3){
  blank=jesusman1;
} else {
  blank=kiwibird1 ;
}

}
/* this is the first cat button function which makes the clicker load the cat image */
function catpic1(){
  blank = "http://five23.github.io/nibble/img/nibble.png";
}
function echidnaPic1(){ // echidna picture
  blank = "http://free-fun-n-games.webs.com/clip%20art/echidna%20clipart%20sm%205%20cm%20wide.gif";
}
function crabpic1() {//crab picture
  blank = "http://fla.fg-a.com/crabs/king-crab-1.gif";
}
function jesuspic1(){ // jesus pic
  blank = "http://i.imgur.com/5ruAbxu.png";
}
function kiwi(){
  blank = kiwibird1;
}
function cat(){
document.getElementById("catPic").src=blank; /* image loader and the lines below center the mouse on the image so that it doesnt look weird. */
document.getElementById("catPic").style.left = x-100 + "px";
document.getElementById("catPic").style.top = y-125 + "px";
  
}


var x; //mouse x position
var y; //mouse y position

document.addEventListener("click", function(e) {
  imageY=0;
x = e.clientX;
y = e.clientY;
 document.getElementById("catPic").style.visibility='visible' ;
});
/* these event listners first follow the mouse and log the x and y values into the variables, while the one under this paragraph listens to the click and then runs the function which calls the cat function*/
document.addEventListener("click", function(){
  cat();

});

window.requestAnimationFrame(runMe);