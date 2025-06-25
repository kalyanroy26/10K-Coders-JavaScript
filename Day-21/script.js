let submit = document.getElementById('submit')
let form = document.getElementById('form')
let bottom = document.getElementById('records')

function handleDetails(record){
    let student_records = JSON.parse(window.localStorage.getItem('records')) || [];
    console.log(record)
    student_records.push(record)
    student_records = JSON.stringify(student_records)

    window.localStorage.setItem('records',student_records)
    showRecord()
}

if (JSON.parse(window.localStorage.getItem('records'))){
    showRecord()
}


function showRecord(){
    let allRecords = JSON.parse(window.localStorage.getItem('records'))
    bottom.innerHTML = ''
    let bottom_title = document.createElement('h1')
    bottom_title.innerText = "All Student Records"
    bottom.append(bottom_title)
    let count = 0
    allRecords.forEach(record => {
        count++
        let card = document.createElement('div')
        let card_title = document.createElement('h2')
        card.classList.add('card')
        card_title.innerHTML =  `<i> ${count}. Student Details </i>`

        card.append(card_title)
        for (const key in record) {
            let field = document.createElement('p')
            field.innerHTML = "<u>"+ key + "</u>"+  ":  "+ record[key] + "<br>"
            console.log(field.innerText);
            
            card.append(field)            
        }

        bottom.append(card)

    });
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let age = document.getElementById('age').value
    let mobile = document.getElementById('mobile').value
    let address = document.getElementById('address').value

    const record = {
        name: name,
        email:email,
        age:age,
        mobile:mobile,
        address:address
    }

    handleDetails(record)
    alert("record added")
    form.reset()

})