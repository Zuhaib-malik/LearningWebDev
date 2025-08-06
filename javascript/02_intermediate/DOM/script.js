// 1 => Selection of Element 
// with queryselctor


var selected = document.querySelector("h1");
// changing inner html
console.log(selected);

// changing css
selected.innerHTML = "this is changed"
selected.style.color = "blue"

// event listener

selected.addEventListener("click", function(){
    selected.innerHTML = "this is changed due to click";
    selected.style.color = "Red";
});


// implemanting toggle button 


var bbul = document.querySelector("#bulb");
var sbulb = document.querySelector("#hh");
var flag = null;
sbulb.addEventListener("click", function(){
    if(flag == 0){
        bbul.style.backgroundColor = "black";
        sbulb.textContent = "ON"
        sbulb.style.backgroundColor = "orange";
        flag = 1;
    }else{
        bbul.style.backgroundColor = "yellow";
        sbulb.textContent = "OFF";
        sbulb.style.backgroundColor = "black";
        flag = 0;
    }

})