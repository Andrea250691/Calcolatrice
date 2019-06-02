var display = document.getElementById('display');
var displayHistory = document.getElementById('display-history');

function add(e){
    display.value += e.innerHTML;
}

function addDifferent(e){
    display.value += e.getAttribute("data-value");
}

function canc(){
    display.value = "";
}

function total(){
    displayHistory.value = displayHistory.value + "   " + display.value;
    display.value = eval(display.value);
    displayHistory.value += " = " + eval(display.value);
}

function doPercentage(){
    displayHistory.value = displayHistory.value + "   " + display.value;
    display.value = (display.value/100);
    displayHistory.value += " = " + (display.value+"%");
}
