document.getElementById('submitBtn').addEventListener('click', ()=>{
    var number1 = parseInt(document.getElementById('number1').value, 10);
    var number2 = parseInt(document.getElementById('number2').value, 10);
    var result = add(number1, number2);

    var res = document.createElement('div');
    res.id = 'result';
    res.textContent = result;

    document.body.appendChild(res);

})

function add(number1, number2){
    var result = number1 + number2;

    return result;
}