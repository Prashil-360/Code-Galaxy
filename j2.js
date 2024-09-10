const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Rome", correct: false },
            { text: "Berlin", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "Ernest Hemingway", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Pacific Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1905", correct: false },
            { text: "1898", correct: false },
            { text: "1920", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Oganesson", correct: false },
            { text: "Oxonium", correct: false }
        ]
    },
    {
        question: "Which artist painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "2", correct: true },
            { text: "1", correct: false },
            { text: "3", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Which planet is closest to the sun?",
        answers: [
            { text: "Mercury", correct: true },
            { text: "Venus", correct: false },
            { text: "Earth", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "Nile", correct: true },
            { text: "Amazon", correct: false },
            { text: "Yangtze", correct: false },
            { text: "Mississippi", correct: false }
        ]
    },
    {
        question: "Who is the author of 'Harry Potter'?",
        answers: [
            { text: "J.K. Rowling", correct: true },
            { text: "J.R.R. Tolkien", correct: false },
            { text: "George R.R. Martin", correct: false },
            { text: "Stephen King", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Carbon Dioxide", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Who was the first President of the United States?",
        answers: [
            { text: "George Washington", correct: true },
            { text: "Thomas Jefferson", correct: false },
            { text: "Abraham Lincoln", correct: false },
            { text: "John Adams", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Diamond", correct: true },
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        answers: [
            { text: "Brazil", correct: true },
            { text: "China", correct: false },
            { text: "Russia", correct: false },
            { text: "Japan", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water in Celsius?",
        answers: [
            { text: "100°C", correct: true },
            { text: "0°C", correct: false },
            { text: "50°C", correct: false },
            { text: "150°C", correct: false }
        ]
    },
    {
        question: "Which language is most spoken worldwide?",
        answers: [
            { text: "Mandarin", correct: true },
            { text: "English", correct: false },
            { text: "Spanish", correct: false },
            { text: "Hindi", correct: false }
        ]
    },
    {
        question: "In which city is the Eiffel Tower located?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Rome", correct: false },
            { text: "Berlin", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Earth's twin?",
        answers: [
            { text: "Venus", correct: true },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            { text: "Albert Einstein", correct: true },
            { text: "Isaac Newton", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false }
        ]
    }
];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

function startGame() {
    score = 0;
    resultContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    nextButton.style.display = 'none';
    shuffledQuestions = shuffleArray(questions.slice());
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    // Shuffle answers before displaying
    const shuffledAnswers = shuffleArray(currentQuestion.answers);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct) {
            button.classList.add('correct');
        }
    });
    nextButton.style.display = 'block';
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    resultElement.innerText = `Your Score: ${score} / ${shuffledQuestions.length}`;
    resultContainer.style.display = 'block';
}

function restartGame() {
    startGame();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

nextButton.addEventListener('click', showNextQuestion);
restartButton.addEventListener('click', restartGame);

startGame();
