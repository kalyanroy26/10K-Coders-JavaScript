let container = document.createElement('div')
container.classList.add('container')

container.style.height = "100vh"
container.style.width = "100%"
container.style.background = "#1fab69"

document.body.append(container)

let body = document.getElementsByTagName('body')
body[0].style.boxSizing = 'borderbox'
body[0].style.margin = '0'
body[0].style.padding = '0'

let title = document.createElement('h1')
title.innerHTML = ""
title.id = "logo"
title.style.color = "#ffff"
title.style.textAlign = 'center'
container.append(title)

container.style.display = 'grid'
container.style.placeContent = 'center'

// let button = document.createElement('button')
// button.innerHTML = "Add Item"
// button.style.height = "3rem"
// button.style.width = "6rem"
// button.style.borderRadius = "10px"
// button.style.background = "#fff"
// button.style.border = "none"
// button.style.fontSize = "1rem"
// container.append(button)

// let list = document.createElement('ul')
// container.append(list)
// list.style.listStyle = 'decimal'

// button.addEventListener('click',()=>{
//     let item = document.createElement('li')
//     item.innerText = "item added"
//     item.style.color = '#fff'
//     item.style.fontSize = '1rem'
//     list.append(item)
// })

let heroes = ['prabhas','mahesh babu','ntr','allu arjun','nani']
let heroines = ['anushka','samantha','rukmini','rashmika','mrunal']

let list = document.createElement('ol')

for (let i = 0; i < heroes.length; i++) {
    let item = document.createElement('li')
    item.innerText = `${heroes[i]} - ${heroines[i]}`
    list.append(item)
}
container.append(list)