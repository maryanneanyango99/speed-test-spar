
const questions = [
    {
        question: "question one",
        a: "choice one",
        b: "choice two",

        correct: "b"

    },
    {
        question: "question one",
        a: "choice one",
        b: "choice two",

        correct: "b"
    }
];

const question = document.getElementById("question-text")
const answerOne = document.getElementsByClassName("answer-one")
const choiceOne = document.getElementById("choice-one")
const choiceTwo = document.getElementById("choice-two")
const choiceThree = document.getElementById("choice-three")
const submitBtn = document.getElementById("submit")
const optionChoices = document.querySelectorAll(answer-one)

let newQuestions = 0
let totalScore = 0

// generate questions
generateQuiz()
function generateQuiz(){
    deselect ()
    const currentQuestions = questions[newQuestions]
    question.innerText = currentQuestions.question
    choiceOne.innerText = currentQuestions.a
    choiceTwo.innerText = currentQuestions.b
}


// deselecting answers
function checkOptions(){
    optionChoices.forEach(optionChoice => optionChoice.checked = false)
}

//check for answers in the array
function chosenAnswers(){
    let chosenAnswer
    optionChoices.forEach(optionChoice => {
        if (optionChoice.checked){
            chosenAnswer = optionChoice.id
        }
    })
    return chosenAnswer
}

//appends questions to the list

submitBtn.addEventListener('click', () => {
    const chosenAnswer = chosenAnswers()
    if(chosenAnswer){
        if(chosenAnswer === questions[newQuestions].correct){
            totalScore++
        }
        newQuestions++
    }
})

alert("hey thre");
