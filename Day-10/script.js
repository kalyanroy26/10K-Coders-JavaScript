let add = document.querySelector('#add')
let list = document.querySelector('#list')

add.addEventListener('click',()=>{
    let value = prompt("enter item name to add to the list")
    let listItem = document.createElement('li')
    listItem.innerHTML = value 

    list.append(listItem)
})