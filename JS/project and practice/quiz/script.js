const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++;
    setNextQuestion()
})


function startGame() {
  //   console.log("started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  console.log(shuffledQuestions);
  console.log(currentQuestionIndex);
  setNextQuestion();
}


function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}


function showQuestion(object) {
  questionElement.innerText = object.question;
    object.answer.forEach((ans) => {
    // console.log(ans);
        const button = document.createElement("button");
        button.innerText = ans.text;
        button.classList.add("btn");
            if (ans.correct) {
                 button.dataset.correct = ans.correct;
            }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}


function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}


function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if(shuffledQuestions.length > currentQuestionIndex + 1){
  nextButton.classList.remove('hide')
} else{
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
}


function setStatusClass(element, correct) {
  clearStateClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}


function clearStateClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}


const questions = [
  {
    question: "what is 2+2 ?",
    answer: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ]
  },
  {
    question: "what is 0*2 ?",
    answer: [
      { text: "0", correct: true },
      { text: "4", correct: false },
    ]
  },
  {
    question: "what is 7*2 ?",
    answer: [
      { text: "14", correct: true },
      { text: "22", correct: false },
    ]
  },
  {
    question: "what is 2+65 ?",
    answer: [
      { text: "67", correct: true },
      { text: "22", correct: false },
    ]
  },
  {
    question: "what is 2+8 ?",
    answer: [
      { text: "10", correct: true },
      { text: "4", correct: false },
    ]
  },
  {
    question: "what is 9+2 ?",
    answer: [
      { text: "11", correct: true },
      { text: "4", correct: false },
    ]
  },
  {
    question: "what is 4+2 ?",
    answer: [
      { text: "6", correct: true },
      { text: "2", correct: false },
    ]
  },
  {
    question: "what is 2/2 ?",
    answer: [
      { text: "0", correct: true },
      { text: "0.2", correct: false },
    ]
  },
  {
    question: "what is 2*2 ?",
    answer: [
      { text: "4", correct: true },
      { text: "2", correct: false },
    ]
  },
  {
    question: "what is 2-2 ?",
    answer: [
      { text: "0", correct: true },
      { text: "5", correct: false },
    ]
  },
  
];
