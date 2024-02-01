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

let currentQuestionIndex= 0;
let score= 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score= 0;
    nextButton.innerHTML = "Next";
    showQuestion();
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
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
startQuiz();