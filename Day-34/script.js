let btns = document.getElementsByClassName('btn')
let display = document.getElementById('screenContent')
display.innerHTML = ''
let eq = ''


for (let btn of btns) {
    btn.addEventListener("click", () => {
        let val = btn.innerHTML

        if (val === 'c') {
            display.innerHTML = ''
            eq = ''
        }
        else if(val==='='){
            calculate(eq)
        }
        else{
            display.innerHTML += val 
            eq+=val           
        }
    })
}

let calculate = (value)=>{
    let cal_value = eval(value)
    display.innerHTML = ''
    console.log(cal_value);
    eq = cal_value
    display.innerHTML = cal_value
}