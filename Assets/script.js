
const questions = [
    {
        question: "Where does the javascript go in the html code",
        answers: [
                { text: "At the end of the Body", correct: true},
                { text: "In the Header", correct: false},
                { text: "Only in a Div", correct: false},
                { text: "Wherever you want it to be", correct: false},
        ]
    },
    {
        question: "what is a fixed variable",
        answers: [
                { text: "var", correct: false},
                { text: "let", correct: false},
                { text: "const", correct: true},
                { text: "if", correct: false},
        ]
    },
    {
        question: "what operator checks if things are not equal",
        answers: [
                { text: "===", correct: false},
                { text: "==", correct: false},
                { text: ">", correct: false},
                { text: "!=", correct: true},
        ]
    },
    {
        question: "What alert can you type in",
        answers: [
                { text: "Prompt", correct: true},
                { text: "Alert", correct: false},
                { text: "Confirm", correct: false},
                { text: "For", correct: false},
        ]
    },
    {
        question: "How can you change text to lowercase",
        answers: [
                { text: "toUpperCase", correct: false},
                { text: "ToLowerCase", correct: false},
                { text: "toLowerCase", correct: true},
                { text: "ToUpperCase", correct: false},
            ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("awnser-button");
const nextButton = document.getElementById("next-btn");
const forms = document.getElementById("forms");
let currentQuestionIndex= 0;
let score= 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score= 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    var timer= document.querySelector("#time");
    var secondsLeft = 90;


    function startTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timer.textContent = secondsLeft;
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
          }
      
        }, 1000);
      }


    startTime();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button= document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    forms.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=> { 
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
        });
        nextButton.style.display = "block";
}

        function showScore(){
            resetState()
            questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
            nextButton.innerHTML = "Play Again";
            nextButton.style.display = "block";
        }

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
        forms.style.display = "block";
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()
        startTime()
        document.getElementById("Highscores")
        
    }
})
const username = document.getElementById('username'); 
const saveScoreBtn = document.getElementById('saveScoreBtn');



saveHighscore = e =>{
    e.preventDefault();

}
username.addEventListener('keyup',() =>{
    console.log(username.value);
    saveScoreBtn.disabled= !username.value;
})

startQuiz();