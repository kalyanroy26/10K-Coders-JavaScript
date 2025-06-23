
let btn = document.getElementsByTagName('button')[0]
let value = document.getElementById('result')

function handleOperation(a, b, opp) {
    let res;
    console.log(a, b, opp);

    switch (opp) {
        case '+':
            res = a + b
            break;
        case '-':
            res = a - b
            break;
        case '*':
            res = a * b
            break;
        case '/':
            res = b===0?'cannot divide with 0 ':a/b
            break;

        default:
            res = "invalid operation"
            break;
    }
    console.log(res);

    value.innerText = "O/P: " + res
}

btn.addEventListener('click', () => {
    let num1 = document.getElementById('num1').value
    num1 = +num1
    let num2 = document.getElementById('num2').value
    num2 = +num2
    let operator = document.getElementById('operator').value
    console.log(num1,num2,operator);
    
    handleOperation(num1, num2, operator)
})


