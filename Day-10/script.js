let title = document.getElementById('title')

function newTitle(){
    let userName = prompt("enter your name: ")
    title.innerHTML = `welcome <i>${userName}</i>`
}

let toggle = document.querySelector('#btn')

toggle.addEventListener('click',()=>{
    title.classList.toggle('huge')
})

newTitle()
