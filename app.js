const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");

let currentQuestionIndex = 0;
let score = 0;
let passingScore = 8;
let timerInterval;
let selectedButton = null;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedButton = null;
    nextButton.innerHTML = "Nākamais";
    startButton.classList.add("hide");
    resetButton.classList.add("hide");
    resetState();
    startTimer();
    showQuestion();
}

function startTimer() {
    let timeLeft = 600; 
    const timerElement = document.getElementById("timer");
    
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz("Laiks ir beidzies!");
            return;
        }
        timeLeft--;
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function endQuiz(message) {
    clearInterval(timerInterval);
    resetState();
    questionElement.innerHTML = `${message}<br>Jūs atbildējāt pareizi uz ${score} no ${questions.length} jautājumiem`;
    startButton.innerHTML = "Sākt no jauna";
    startButton.classList.remove("hide");
    nextButton.classList.add("hide");
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNr = currentQuestionIndex + 1;
    
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question-container");
    
    const questionText = document.createElement("p");
    questionText.innerHTML = questionNr + ". " + currentQuestion.question;
    questionContainer.appendChild(questionText);
    
    if (currentQuestion.image) {
        const img = document.createElement("img");
        img.src = currentQuestion.image;
        img.classList.add("question-image");
        questionContainer.appendChild(img);
    }
    
    questionElement.innerHTML = "";
    questionElement.appendChild(questionContainer);

    if (currentQuestion.answers && Array.isArray(currentQuestion.answers)) {
        currentQuestion.answers.forEach(answer => {
            if (answer && answer.text) {
                const button = document.createElement("button");
                button.innerHTML = answer.text;
                button.classList.add("btn");
                answerButton.appendChild(button);
                if (answer.correct) {
                    button.dataset.correct = answer.correct;
                }
                button.addEventListener("click", selectAnswer);
            }
        });
    }
    nextButton.style.display = "block";
    nextButton.disabled = true;
}

function resetState() {
    nextButton.style.display = "none";
    nextButton.disabled = false;
    selectedButton = null;
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    if (selectedButton) {
        selectedButton.classList.remove("selected");
    }

    selectedButton = e.target;
    selectedButton.classList.add("selected");
    
    nextButton.disabled = false;
}

function handleNextButton() {
    if (!selectedButton) return;

    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        button.disabled = true;
    });

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            showQuestion();
        }, 1000);
    } else {
        setTimeout(() => {
            checkPassingScore();
        }, 1000);
    }
}

function checkPassingScore() {
    let message;
    if (score >= passingScore) {
        message = "Apsveicam! Jūs esat veiksmīgi nokārtojis testu!";
    } else {
        message = "Diemžēl tests nav nokārtots. Nepieciešams mēģināt vēlreiz!";
    }
    endQuiz(message);
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
});

startButton.addEventListener("click", startQuiz);

resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    startQuiz();
});

resetState();
startButton.classList.remove("hide"); 