//TAKE FUNCTION
//DISPLAY NEW NUMBER
//WHEN PRESS = DISPLAY RESULT AND SAVE IT
var result = 0;
var displayedNumber = "";
var displayedHistory = "";
var arithmeticOperation = null;

function GetUserInput(a) {
    if (displayedNumber === "")
        document.getElementById("display-result").innerHTML = a;
    else
        document.getElementById("display-result").innerHTML = displayedNumber + a;

    displayedNumber += a;
}

function ArithmeticOperation() {
    switch (arithmeticOperation) {
        case "divide":
            if (displayedNumber != 0)
                result /= parseInt(displayedNumber);
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

}

function ArithmeticOperationSelection(x) {
    var length = displayedHistory.length;
    var lastchar = displayedHistory.charAt(length - 1);
    if ((parseInt(displayedNumber) == NaN) && (x != "equals"))
        displayedNumber = displayedNumber.slice(0,length - 1);
        
        switch (x) {
            case "divide":
                displayedHistory += displayedNumber + ' ' + '/' + ' ';
                document.getElementById("display-history").innerHTML = displayedHistory;
                ArithmeticOperation();
                document.getElementById("display-result").innerHTML = result;
                displayedNumber = "";
                arithmeticOperation = "divide";
                break;

            case "multiply":
                displayedHistory += displayedNumber + ' ' + 'X' + ' ';
                document.getElementById("display-history").innerHTML = displayedHistory;
                ArithmeticOperation();
                document.getElementById("display-result").innerHTML = result;
                displayedNumber = "";
                arithmeticOperation = "multiply";
                break;

            case "minus":
                displayedHistory += displayedNumber + ' ' + '-' + ' ';
                document.getElementById("display-history").innerHTML = displayedHistory;
                ArithmeticOperation();
                document.getElementById("display-result").innerHTML = result;
                displayedNumber = "";
                arithmeticOperation = "minus";
                break;

            case "plus":
                displayedHistory += displayedNumber + ' ' + '+' + ' ';
                document.getElementById("display-history").innerHTML = displayedHistory;
                ArithmeticOperation();
                document.getElementById("display-result").innerHTML = result;
                displayedNumber = "";
                arithmeticOperation = "plus";
                break;

            case "equals":
                displayedHistory="";
                document.getElementById("display-history").innerHTML = displayedHistory;
                ArithmeticOperation();
                document.getElementById("display-result").innerHTML = result;
                displayedNumber = "";
                arithmeticOperation = null;
                break;
        }

}


//NegPOS
//dot
