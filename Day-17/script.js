let container = document.getElementById('container')
let user = document.createElement('h2')
user.innerText = 'KALYAN MAHARAJULU'
let line = document.createElement('hr')
line.style.width = "100%"
line.style.margin = "1rem"

let title1 = document.createElement ('h2')
title1.innerText = "PROFILE SUMMARY"
let details = document.createElement('h2')
details.innerHTML = "Mobile no: 6302525995 | Mail: <a href = '#'>kalyanmaharajulu@gmail.com</a>"
let p1 = document.createElement('p')
p1.innerText = "Enthusiatic Web Developer intern with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React. Skilled in building responsive and user-friendly web applications and familiar with backend technologies like Node.js and database management. Passionate about learning new technologies, problem-solving, and collaborating in a team environment to deliver high-quality solutions."

let title2 = document.createElement('h2')
title2.innerText = 'EDUCATION'

let p2 = document.createElement('p')
p2.innerHTML = `Swami Vivekananda Institute of Technology         2019 - 2023 <br> Bachelor's degree in Computer Science           CGPA: 7.0`

let title3 = document.createElement('h2')
title3.innerText = 'TECHNICAL SKILLS'
let list = document.createElement('ul')

let item1 = document.createElement('li')
item1.innerText = " Frontend Technologies   :HTML, CSS, JavaScript "
let item2 = document.createElement('li')
item2.innerText = "Backend Technologies    :Python, Node.js"
let item3 = document.createElement('li')
item3.innerText = " Frame Works        :Bootstrap, express.js, React.js"
let item4 = document.createElement('li')
item4.innerText = " Databases          :MySQL, PostgreSQL"

list.append(item1,item2,item3,item4)

container.append(user,details,line,title1,p1,title2,p2,title3,list)
