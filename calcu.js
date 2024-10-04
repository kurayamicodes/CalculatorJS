const display = document.getElementById('display');
const btnClear = document.getElementById('btnClear');
const btnSolve = document.getElementById('btnSolve');
const btnDelete = document.getElementById('btnDelete');
const clearHistory = document.getElementById('clearHistory');
var historyData = [];
var expressionData = "";
var resultData = "";


function appendToDisplay(input){
    var oldinput = display.value;
    var newinput = oldinput + input;
    display.value = newinput;
    expressionData = newinput;
}

function btnSolveClicked(){
    console.log("Equate");
    var input = display.value;
    var result = eval(input);
    resultData = result;
    historyData.push({"expression":expressionData,"result":resultData});
    showLogdata();
    resultData = "";
    expressionData = "";
    display.value = result;
}

function showLogdata(){
    var log = document.getElementById("historyLog");
    var string = "";
    for(var key in historyData){
        string += ""+historyData[key]["expression"]+"="+historyData[key]["result"]+"<br>";
    log.innerHTML = string;
    }
}

function btnDeleteClicked(){
    console.log("Delete");
    display.value = display.value.substring(0, display.value.length - 1);
}

function btnClearClicked(){
    console.log("Clear");
    display.value = '';
}

function btnClearHistory() {
    var log = document.getElementById("historyLog");
    log.innerText = "";
    historyData = [];
    console.log("History Cleared");
}

btnSolve.addEventListener("click", btnSolveClicked);
btnDelete.addEventListener("click", btnDeleteClicked);
btnClear.addEventListener("click", btnClearClicked);
clearHistory.addEventListener("click", btnClearHistory);

document.addEventListener("keydown", event => {
  console.log(`${event.key} is pressed in the keyboard.`);
  switch(event.key){
    case "1":
        display.value += '1';
        break;
    case "2":
        display.value += '2';
        break;
    case "3":
        display.value += '3';
        break;
    case "4":
        display.value += '4';
        break;
    case "5":
        display.value += '5';
        break;
    case "6":
        display.value += '6';
        break;
    case "7":
        display.value += '7';
        break;
    case "8":
        display.value += '8';
        break;
    case "9":
        display.value += '9';
        break;
    case "0":
        display.value += '0';
        break;
    case "+":
        display.value += '+';
        break;
    case "-":
        display.value += '-';
        break;g
    case "*":
        display.value += '*';
        break;
    case "/":
        display.value += '/';
        break;
    case "=":
        display.value = eval(display.value);
        break;
    case "Escape":
        display.value = '';
        break;
    case "Delete":
        display.value = display.value.substring(0, display.value.length - 1);
        break;
    }
});
