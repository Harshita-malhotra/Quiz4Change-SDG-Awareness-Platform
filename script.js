const questions = [
    {
        question: "What is Goal 1 of the SDGs?",
        options: ["No Poverty", "Quality Education", "Gender Equality"],
        answer: "No Poverty"
    },
    {
        question: "What is Goal 2 of the SDGs?",
        options: ["Zero Hunger", "Clean Water", "Affordable Energy"],
        answer: "Zero Hunger"
    }
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    questionElement.innerText = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = '';

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
}

// Initialize quiz on page load
window.onload = loadQuestion;
