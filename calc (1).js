var keys = document.querySelectorAll('div.button');
var output = document.getElementById("display");
var hasOpp = false;
var btnVal1 = 0;
var btnVal2 = 0;
console.log(keys);

for(var i = 0; i < keys.length; i++){
	keys[i].addEventListener("click", mathify, false);
};

function mathify(){
	if(this.classList.contains("opp")){
		var btnVal = output.innerHTML;
		output.insertAdjacentHTML('beforeend', this.innerHTML);
		hasOpp = true;
	}
	else if(this.innerHTML === "="){
 output.innerHTML =eval(output.innerHTML)

	}
	else if(this.innerHTML === "Clear"){
    output.innerHTML="";
        
    } else if (this.innerHTML==="+") {
        
    }
	else{
	output.insertAdjacentHTML('beforeend', this.innerHTML);
	var btnVal = output.innerHTML;

}
};