var deaths=0;
var true1 =false;
function math(){
    var ranNum = Math.floor(Math.random()*50)
    if (ranNum>=35){
    document.getElementById('food').style.visibility="hidden";
    }
    
}

function newFood(){
    document.getElementById("food").innerHTML="<img src='http://thelongthread.com/wp-content/uploads/2008/12/cupcake-300x300.jpg'>";
    document.getElementById('food').style.visibility="visible";
true1===true;
if (true1=true){
 deaths -= 2  ;
 document.getElementById("Deaths").innerHTML= deaths;
}
}



function buyFood(){
    document.getElementById("food").innerHTML="<img src='http://petus.imageg.net/PETNA_36/pimg/pPETNA-5159886_main_t300x300.jpg'>";
    document.getElementById('food').style.visibility="visible";
}
function newcat(){
    document.getElementById("food10").innerHTML="<img src='http://i.imgur.com/xUPlH6q.png'>";
    data = 0
    


}
var data=0
function food(){
    data++;
       
    if (data ===19){
        food10()
        math()
    } else if (data ==1){
        food1()
        math()
    }else if (data ===3){
        food2()
        math()
    }else if (data ===5){
        food3()
        math()
    }else if (data ===7){
        food4()
        math()
    }else if (data ===9){
        food5()
        math()
    }else if (data ===11){
        food6()
        math()
    }else if (data ===13){
        food7()
        math()
    }else if (data ===15){
        food8()
        math()
    }else if (data ===17){
        food9()
        math()
    } else if (data===21){
        food11()
        math()
        deaths+=1;
        document.getElementById("Deaths").innerHTML= deaths;
        
    }
}

function food10(){
    document.getElementById("food10").innerHTML="<img src='http://i.imgur.com/aSfPGmj.png'>";
}
function food1(){
    document.getElementById("food10").innerHTML="<img src='http://i.imgur.com/xUPlH6q.png'>";
}
function food2(){
    document.getElementById("food10").innerHTML="<img src='http://i.imgur.com/iMyNmTI.png'>";
}
function food3(){
    document.getElementById("food10").innerHTML="<img src='http://i.imgur.com/Sg3oS1u.png'>";
}
function food4(){
    document.getElementById("food10").innerHTML="<img src='http://i.imgur.com/MBh6cdA.png'>";
}
function food5(){
    document.getElementById("food10").innerHTML="<img src='http://i.imgur.com/fMFULqN.png'>";
}
function food6(){
    document.getElementById("food10").innerHTML="<img src='http://i.imgur.com/COTm9ij.png'>";
}
function food7(){
    document.getElementById("food10").innerHTML="<img src='http://i.imgur.com/rkbsM35.png'>";
}
function food8(){
    document.getElementById("food10").innerHTML="<img src='http://i.imgur.com/zVF6gUZ.png'>";
}
function food9(){
    document.getElementById("food10").innerHTML="<img src='http://i.imgur.com/6AI3ZFk.png'>";
}
function food11(){
    document.getElementById("food10").innerHTML="<img src='http://i.imgur.com/C7r1r7g.png'>";
}