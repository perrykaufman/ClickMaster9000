const setFieldElement = document.getElementById("setValue");
const configElement = document.getElementById("configSection");
const displayElement = document.getElementById("outputDisplay");
const configToggleElement = document.getElementById("configOpen");

//Listeners
document.getElementById("clickerButton").onclick = function() {
    var count = localStorage.getItem("count");
    set(++count)
}

configToggleElement.onclick = function(){
    if (configElement.style.display == "none") {
        configElement.style.display = "block"
        configToggleElement.innerHTML = "config (hide)"
    } else {
        configElement.style.display = "none"
        configToggleElement.innerHTML = "config (show)"
    }
}

document.getElementById("setButton").onclick = function(){
    var num = Number(setFieldElement.value);

    if (Number.isInteger(num) && num > -1) {
        set(num)
    } else {
        //invalid number
        console.log("invalid number");
    }
    setFieldElement.value = "";
}

init();

//Functions
function init(){
    
    //Initialize Count
    var count = localStorage.getItem("count")
    if (count === null) {
        localStorage.setItem("count", 0)
        displayElement.innerHTML ="0"
    } else {
        displayElement.innerHTML = count
    }

    //Hide Config
    configElement.style.display = "none"
}
function set(num) {
    localStorage.setItem("count", num);
    displayElement.innerHTML = num
}