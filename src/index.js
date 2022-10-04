/*
 * Elements
 */
const clickerButtonElement = document.getElementById("clickerButton");
const setFieldElement = document.getElementById("setValue");
const configElement = document.getElementById("configSection");
const displayElement = document.getElementById("outputDisplay");
const configToggleElement = document.getElementById("configOpen");

/*
 * Listeners
 */

//increment count with clicker button
clickerButtonElement.onclick = function() {
    increment();
}

//toggle config open/closed
configToggleElement.onclick = function(){
    if (configElement.style.display == "none") {
        configElement.style.display = "block"
        configToggleElement.innerHTML = "config (hide)"
    } else {
        configElement.style.display = "none"
        configToggleElement.innerHTML = "config (show)"
    }
}

//set count to input value
document.getElementById("setButton").onclick = function(){
    var str = setFieldElement.value
    
    if (str === "") {
        return;
    }

    var num = Number(str);

    if (Number.isInteger(num) && num > -1) {
        set(num)
    } else {
        //invalid number
        console.log("invalid number");
    }
    setFieldElement.value = "";
}
//keyboard control of count
document.addEventListener('keydown', function(event){
    if (event.target.tagName.toUpperCase() === "INPUT") {
        //do nothing
        return;
    }

    switch (event.code.toUpperCase()) {
        case "SPACE":
            increment();
            break;
        case "ENTER":
            increment();
            break;
        case "BACKSPACE":
            decrement();
            break;
    };
});

init();

/*
 * Functions
 */

//initialize count and hide config
function init(){
    
    //initialize Count
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

//set the count to specified number
function set(num) {
    localStorage.setItem("count", num);
    displayElement.innerHTML = num
}

//increase the count by 1
function increment() {
    var count = localStorage.getItem("count");
    set(++count);
}

//decrease the count by 1
function decrement() {
    var count = localStorage.getItem("count");
    set(--count);
}