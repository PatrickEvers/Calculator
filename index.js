var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');
var number1 = 0;
var number2 = 0;

document.getElementById('addBtn').addEventListener('click', ()=>{

    setValues(input1, input2);

    var result = add(number1, number2);

    showResult(result);
})

document.getElementById('subtractBtn').addEventListener('click', ()=>{

    setValues(input1, input2);

    var result = subtract(number1, number2);

    showResult(result);
})

document.getElementById('multiplyBtn').addEventListener('click', ()=>{

    setValues(input1, input2);

    var result = multiply(number1, number2);

    showResult(result);
})

document.getElementById('divideBtn').addEventListener('click', ()=>{

    setValues(input1, input2);

    var result = divide(number1, number2);

    showResult(result);
})

function add(number1, number2){
    var result = number1 + number2;
    
    if(result % 1 === 0){
        return result;
    }
    else{
        return result.toFixed(countDecimals(number1,number2));
    }
}

function subtract(number1, number2){
    var result = number1 - number2;
    
    if(result % 1 === 0){
        return result;
    }
    else{
        return result.toFixed(countDecimals(number1,number2));
    }
}

function multiply(number1, number2){
    var result = number1 * number2;
    return result;
}

function divide(number1, number2){
    var result = number1 / number2;
    return result;
}

function setValues(input1, input2){
    if(!inputIsEmpty(input1)){
        number1 = parseFloat(input1.value, 10);
    }

    if(!inputIsEmpty(input2)){
        number2 = parseFloat(input2.value, 10);
    }
}

function showResult(result){
    var res = document.getElementById('result');
    res.textContent = result;
}

//Gibt die höchste Anzahl an Nachkommastellen für das Runden zurück.
function countDecimals(number1, number2){
    if(number1 % 1 !== 0 && number2 % 1 !== 0){
        var n1Decimals = number1.toString().split('.');
        var n2Decimals = number2.toString().split('.');
        
        if(n1Decimals[1].length > n2Decimals[1].length){
            return n1Decimals[1].length;
        }
        else{
            return n2Decimals[1].length;
        }
    }
    else if(number1 % 1 !== 0){
        return number1.toString().split('.')[1].length;
    }
    else{
        return number2.toString().split('.')[1].length;
    }
}

function inputIsEmpty(input){
    if(input.value == ''){
        return true;
    }
    return false;
}