let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')

let timer = document.getElementById('time')

let sec = 0
let min = 0
let time;
let timeRunning = false

startBtn.addEventListener('click',()=>{

    if(timeRunning){
        return
    }

    timeRunning = true
    time = setInterval(()=>{
        sec++
        
        if (sec==60){
            min++
            sec=0
        }

        timer.innerText = (min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec)
    },1000)
})


stopBtn.addEventListener('click',()=>{
    timeRunning = false
    clearInterval(time)
})


resetBtn.addEventListener('click',()=>{
    timeRunning = false
    min=0
    sec=0
    clearInterval(time)
    timer.innerText = "00:00"

})