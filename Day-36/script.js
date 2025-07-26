let instructionContainer = document.getElementById("instruction-container")
let questionContainer = document.getElementById("question-container")
let quizover = document.getElementById("quizover")
let start = document.getElementById('start')
let score = document.getElementById('score')
let final_score = document.getElementById('final_score')

let quest = document.getElementById('question')
let options = document.getElementsByClassName('option')
let next = document.getElementById('next')

const quizQuestions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  },
  {
    question: "What color is the sky?",
    options: ["Blue", "Green", "Red", "Yellow"],
    correctAnswer: "Blue"
  },
  {
    question: "How many days in a week?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7"
  },
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    correctAnswer: "Delhi"
  },
  {
    question: "Which animal barks?",
    options: ["Cat", "Dog", "Cow", "Horse"],
    correctAnswer: "Dog"
  },
  {
    question: "What is the color of grass?",
    options: ["Red", "Blue", "Green", "Pink"],
    correctAnswer: "Green"
  },
  {
    question: "How many legs does a spider have?",
    options: ["6", "8", "10", "12"],
    correctAnswer: "8"
  },
  {
    question: "What planet do we live on?",
    options: ["Mars", "Venus", "Earth", "Jupiter"],
    correctAnswer: "Earth"
  },
  {
    question: "What is ice made of?",
    options: ["Water", "Milk", "Juice", "Oil"],
    correctAnswer: "Water"
  },
  {
    question: "Which fruit is yellow?",
    options: ["Apple", "Banana", "Grapes", "Orange"],
    correctAnswer: "Banana"
  }
];

let question_no = -1;
let current_score = 0
let selected = false

start.onclick = () => {
  question_no = 0
  current_score = 0
  questionContainer.style.display = 'block'
  instructionContainer.style.display = 'none'
  quizover.style.display = 'none'
  question()
}


function question() {
  selected = false
  quest.innerText = quizQuestions[question_no].question
  for (let i = 0; i < 4; i++) {
    options[i].innerText = quizQuestions[question_no].options[i]
    options[i].style.backgroundColor = '#fdfdfd';
    options[i].style.color = '#252525';
    options[i].style.pointerEvents = "auto";
  }
  
  checkAnswer()
}

next.onclick = () => {
  question_no++

  if (question_no < quizQuestions.length) {
    question()
  }
  else {
    quizover.style.display = 'flex'
    final_score.innerText = `Score: ${current_score}`;
    questionContainer.style.display = 'none'
    question_no = -1
  }
}

let again = document.getElementById('start-again')

again.onclick = () => {
  question_no = 0;
  current_score = 0;
  score.innerText = `Score: ${current_score}`;
  questionContainer.style.display = 'block'
  instructionContainer.style.display = 'none'
  quizover.style.display = 'none'
  question()
}



for (let i = 0; i < 4; i++) {
  options[i].addEventListener('click', handleAnswerClick)
}

function handleAnswerClick(e) {
  if (selected) return;

  selected = true
  let correct = quizQuestions[question_no].correctAnswer
  let userOption = e.target;
  if (userOption.innerText === correct) {
    console.log("true");
    current_score += 1
    score.innerText = `Score: ${current_score}`
    userOption.style.backgroundColor = '#1fab89'
  }
  else {
    console.log('false')
    userOption.style.backgroundColor = '#ff2e63'
  }

  for (let opt of options) {
    if (opt.innerText === correct) {
      opt.style.backgroundColor = '#1fab89';
    }
  }

  userOption.style.color = '#fff';
  score.innerText = `Score: ${current_score}`;

  for (let opt of options) {
    opt.style.pointerEvents = "none";
  }
}


