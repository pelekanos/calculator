var result = 0;
var displayedNumber = "";
var displayedHistory = "";
var prevOperation = null;
var Memory = [];
Memory[0] = 0;
var MemoryItem = 0;


function GetUserInput(a) {
    document.getElementById("display-result").innerHTML = displayedNumber + a;

    displayedNumber += a;
}


function ArithmeticOperation() {
    switch (prevOperation) {
        case "divide":
            if (displayedNumber != 0)
                result /= parseInt(displayedNumber);
            else
                window.alert("WARNING! Division by zero");
            break;

        case "multiply":
            if (result == 0)
                result++;
            result *= parseInt(displayedNumber);
            break;

        case "minus":
            result -= parseInt(displayedNumber);
            break;

        case "plus":
            result += parseInt(displayedNumber);
            break;

        default:
            result = parseInt(displayedNumber);
            break;

    }

    prevOperation = null;

}


function HasPreviousOperation(x) {
    var length = displayedHistory.length;
    var lastOp = displayedHistory.charAt(length - 2);
    var n = false;
    var o = false;

    if (((x == "divide") || (x == "multiply")) || ((x == "minus") || (x == "minus")))
        n = true;

    if (((lastOp == '/') || (lastOp == 'X')) || ((lastOp == '-') || (lastOp == '+')))
        o = true;

    if ((o === true) && (n === true)) {
        displayedHistory = displayedHistory.slice(0, (length - 2));
        return true;
    }

    return false;
}


function MemoryClear(){
    var i;
    for(i = 0; i <= MemoryItem; i++)
        Memory[i] = 0;
}


function MemoryRecall(){
    displayedNumber = Memory[MemoryItem];
}


function MemoryAdd(){
    Memory[MemoryItem] += parseInt(displayedNumber);
}


function MemorySubtract(){
    Memory[MemoryItem] -= parseInt(displayedNumber);
}


function MemoryNew(){
    MemoryItem++;
    Memory[MemoryItem] = displayedNumber;
}

function MemoryShow(){
    var temp = "";
    for(i = 0; i <= MemoryItem; i++)
        temp += 'M' + (i + 1) + ':' + '' + parseInt(Memory[i]) + ' ';
    document.getElementById("memory-display").innerHTML = temp;
}


function ButtonPercentage() {
    if (result != 0)
        displayedNumber = displayedNumber / 100 * result; 
    document.getElementById("display-result").innerHTML = displayedNumber;
}


function ButtonRoot() {
    if (displayedNumber > 0)
        displayedNumber = Math.sqrt(displayedNumber);
    else
        window.alert("WARNING! Negative number");
    document.getElementById("display-result").innerHTML = displayedNumber;
}


function ButtonSquare() {
    displayedNumber = displayedNumber * displayedNumber;
    document.getElementById("display-result").innerHTML = displayedNumber;
}


function ButtonDivide() {
    if (displayedNumber != 0)
        displayedNumber = 1 / displayedNumber;
    else
        window.alert("WARNING! Division by zero");
    document.getElementById("display-result").innerHTML = displayedNumber;
}

function ButtonCE() {
    displayedNumber = "";
    document.getElementById("display-result").innerHTML = displayedNumber;
    document.getElementById("memory-display").innerHTML = "";
}


function ButtonC() {
    result = 0;
    displayedNumber = "";
    displayedHistory = "";
    prevOperation = null;
    displayedNumber = "";

    document.getElementById("display-result").innerHTML = displayedNumber;
    document.getElementById("display-history").innerHTML = displayedHistory;
}


function ButtonBack() {
    displayedNumber = displayedNumber.slice(0, (displayedNumber.length - 1));;
    document.getElementById("display-result").innerHTML = displayedNumber;
}


function ButtonNegPos() {
    var temp = parseInt(displayedNumber);
    
    if (displayedNumber[0] != '+')
        displayedNumber = '+' + temp;
    
    if (displayedNumber[0] == '+')
        displayedNumber[0] = '-';
    
    document.getElementById("display-result").innerHTML = displayedNumber;
}



function ButtonDot() {
    displayedNumber = displayedNumber + '.';
    document.getElementById("display-result").innerHTML = displayedNumber;
}



function ArithmeticOperationSelection(x) {
    var hasPrev = HasPreviousOperation(x);

    switch (x) {
        case "divide":
            displayedHistory += displayedNumber + ' ' + '/' + ' ';
            if (hasPrev == false)
                ArithmeticOperation();
            displayedNumber = "";
            prevOperation = "divide";
            break;

        case "multiply":
            displayedHistory += displayedNumber + ' ' + 'X' + ' ';
            ArithmeticOperation();
            displayedNumber = "";
            prevOperation = "multiply";
            break;

        case "minus":
            displayedHistory += displayedNumber + ' ' + '-' + ' ';
            if (hasPrev == false)
                ArithmeticOperation();
            displayedNumber = "";
            prevOperation = "minus";
            break;

        case "plus":
            displayedHistory += displayedNumber + ' ' + '+' + ' ';
            if (hasPrev == false)
                ArithmeticOperation();
            displayedNumber = "";
            prevOperation = "plus";
            break;

        case "equals":
            displayedHistory = "";
            ArithmeticOperation();
            displayedNumber = "";
            prevOperation = null;
            break;
    }

    document.getElementById("display-history").innerHTML = displayedHistory;
    document.getElementById("display-result").innerHTML = result;
}
