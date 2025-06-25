let gp = document.getElementById('gp')
let p = document.getElementById('p')
let c = document.getElementById('c')

gp.addEventListener('click',(e)=>{
    console.log("gp called");
    e.stopPropagation()
    document.body.style.backgroundColor = '#ff2e63'
})

p.addEventListener('click',(e)=>{
    document.body.style.backgroundColor = '#1fab69'
    e.stopPropagation()
    console.log("parent called");
})

c.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log("child called");
    document.body.style.backgroundColor = '#1b64ad'
})