const setFieldElement = document.getElementById("setValue")
const configElement = document.getElementById("configSection")
const displayElement = document.getElementById("outputDisplay")

//Listeners
document.getElementById("clickerButton").onclick = function() {
    console.log("click");
}

document.getElementById("configOpen").onclick = function(){
    console.log("toggle")
}

document.getElementById("setButton").onclick = function(){
    console.log("set")
}

init();

//Functions
function init(){
    console.log("hello world");
}