document.getElementById('submitBtn').addEventListener('click', ()=>{
    var result = add();

    var p = document.createElement('p');
    p.id = 'result';
    p.textContent = result;

    document.body.appendChild(p);

})

function add(){
    var number1 = parseInt(document.getElementById('number1').value, 10);
    var number2 = parseInt(document.getElementById('number2').value, 10);

    var result = number1 + number2;

    return result;
}