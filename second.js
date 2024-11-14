const categories = {
  math: [
    {
      question: "Find the equation of a circle with center at (0,0) and diameter 8.",
      options: ["x^2 - y^2 = 16", "x^2 + y^2 = 16", "x^2 + y^2 = -16", "x^2 - y^2 = -16"],
      correct: 1
  },
  {
      question: "Evaluate (1,0)^5",
      options: ["1", "-1", "0", "none"],
      correct: 0
  },
  {
      question: "Find the value of K so that 4x^2 - 17x + k = 0 has reciprocal roots.",
      options: ["0", "none", "4", "-4"],
      correct: 2
  },
  {
      question: "For what value of p will the equation px^2 - 30x + 25 = 0 have equal roots?",
      options: ["5", "7", "9", "3"],
      correct: 2
  },
  ],
  history: [
    { question: "Who was the first president of the USA?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], answer: 0 },
    { question: "When did World War II end?", options: ["1944", "1945", "1946", "1947"], answer: 1 },
    {
      question: "Who is known as the king of justice in the history of Nepal?",
      options: ["Prithivi Narayan Shah", "Ram Shah", "Gyanendra Shah", "Pratap Malla"],
      correct: 1
  },
  {
      question: "Which king of Nepal died while watching Harisiddhi Dance?",
      options: ["Siddhi Narsingh Malla", "Pratap Malla", "Abhaya Malla", "Gyanendra Shah"],
      correct: 1
  },
  {
      question: "Who introduced the Manapathi system in the history of Nepal?",
      options: ["Pratap Malla", "King Jaysthiith Malla", "Gyanendra Shah", "Prithivi Narayan Shah"],
      correct: 1
  },
  {
      question: "Who is known as the memory king of Nepal?",
      options: ["Nabal Pajiyar", "Bijay Sahi", "Gyanendra Shah", "Ram Shah"],
      correct: 0
  }
  ],
  computer: [
    { question: "Who is known as the father of computers?", options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"], answer: 0 },
    { question: "What does CPU stand for?", options: ["Central Processing Unit", "Central Power Unit", "Central Peripheral Unit", "Central Program Unit"], answer: 0 },
    {
      question: "Which is the first computer brought in Nepal?",
      options: ["IBM 1401", "IBM 1414", "UNIVAC 1108", "CDC 3600"],
      correct: 0
  },
  {
      question: "How many nibbles create one byte?",
      options: ["1", "2", "4", "8"],
      correct: 3
  },
  {
      question: "When was cyber crime introduced in Nepal?",
      options: ["2064", "2061", "2070", "2081"],
      correct: 1
  },
  {
      question: "Which stores more data than a DVD?",
      options: ["CD rom", "Floppy", "Blu-Ray disk", "RED Ray disk"],
      correct: 2
  },
  ],
  sports: [
    {
      question: "Who is known as the king of justice in the history of Nepal?",
      options: ["Prithivi Narayan Shah", "Ram Shah", "Gyanendra Shah", "Pratap Malla"],
      correct: 1
  },
  {
      question: "Which king of Nepal died while watching Harisiddhi Dance?",
      options: ["Siddhi Narsingh Malla", "Pratap Malla", "Abhaya Malla", "Gyanendra Shah"],
      correct: 1
  },
  {
      question: "Who introduced the Manapathi system in the history of Nepal?",
      options: ["Pratap Malla", "King Jaysthiith Malla", "Gyanendra Shah", "Prithivi Narayan Shah"],
      correct: 1
  },
  {
      question: "Who is known as the memory king of Nepal?",
      options: ["Nabal Pajiyar", "Bijay Sahi", "Gyanendra Shah", "Ram Shah"],
      correct: 0
  }
  
  ]
};

let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;

const categoryButtons = document.querySelectorAll('.category-btn');
const quizSection = document.getElementById('quiz-section');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultSection = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const playAgainBtn = document.getElementById('play-again-btn');

categoryButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    currentCategory = event.target.id.replace('-btn', '');
    startQuiz();
  });
});

function startQuiz() {
  document.querySelector('header').style.display = 'none';
  document.querySelector('.category-buttons').style.display = 'none';
  quizSection.style.display = 'block';
  nextBtn.style.display = 'none';
  
  score = 0;
  currentQuestionIndex = 0;
  
  loadQuestion();
}

function loadQuestion() {
  const currentQuestion = categories[currentCategory][currentQuestionIndex];
  
  questionContainer.querySelector('p').textContent = currentQuestion.question;
  
  optionsContainer.innerHTML = '';

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(index));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const correctAnswerIndex = categories[currentCategory][currentQuestionIndex].answer;
  
  if (selectedIndex === correctAnswerIndex) {
    score++;
  }
  
  nextBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click', loadNextQuestion);

function loadNextQuestion() {
  currentQuestionIndex++;
  

  if (currentQuestionIndex < categories[currentCategory].length) {
    loadQuestion();
    nextBtn.style.display = 'none';
  } else {
    showResult();
  }
}

function showResult() {

  quizSection.style.display = 'none';
  resultSection.style.display = 'block';
  
  scoreDisplay.textContent = `You scored ${score} out of ${categories[currentCategory].length}`;
  playAgainBtn.style.display = 'block';
}


playAgainBtn.addEventListener('click', restartQuiz);

document.getElementById("Restart").addEventListener("click", restartQuiz);

function restartQuiz() {

  resultSection.style.display = 'none';
  playAgainBtn.style.display = 'none';
  document.querySelector('header').style.display = 'block';
  document.querySelector('.category-buttons').style.display = 'flex';
   
  score = 0;
  currentQuestionIndex = 0;
  currentCategory = '';
}
