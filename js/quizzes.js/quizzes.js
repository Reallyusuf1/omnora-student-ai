
// ================================
// Quiz State
// ================================

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let quizStarted = false;
let quizQuestions = [];
let studentData = {};

// ==================================================
// Quiz Engine Module
// --------------------------------------------------
// Responsibilities:
// • Load quiz questions
// • Display current question
// • Handle answer selection
// • Track quiz progress
// • Calculate score
// • Navigate between questions
// • Complete the quiz
// ==================================================

function showQuestion() {
            const q = quizQuestions[currentQuestionIndex];
            document.getElementById('quizQuestion').innerHTML = `<p><strong>Question ${currentQuestionIndex + 1}:</strong> ${q.question}</p>`;
            
            let optionsHTML = '';
            q.options.forEach(opt => {
                optionsHTML += `<button onclick="selectAnswer('\( {opt[0]}')"> \){opt}</button>`;
            });
            document.getElementById('quizOptions').innerHTML = optionsHTML;
          updateProgress();
            document.getElementById('nextBtn').style.display = 'none';
}

function selectAnswer(selected) {
            const correct = quizQuestions[currentQuestionIndex].answer;
            if (selected === correct) score += 2.5;
            document.getElementById('nextBtn').style.display = 'block';
}


function nextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                showQuestion();
                      clearInterval(quizTimer);
            } 
            else {
                finishQuiz(`Quiz Complete! You earned ${Math.round(score)} points!`);
                window.location.href = "index.html"; // Return to main page
            }
          clearInterval(quizTimer);
}

// ==============================
// Registration
// ==============================

function registerStudent(event) {
    event.preventDefault();

    if (!validateRegistration()) {
        return;
    }

    studentData = {
        fullName: document.getElementById("fullName").value.trim(),
        schoolName: document.getElementById("schoolName").value.trim(),
        admissionNumber: document.getElementById("admissionNumber").value.trim(),
        country: document.getElementById("country").value,
        studentClass: document.getElementById("studentClass").value,
        quizPin: document.getElementById("quizPin").value
    };

    quizStarted = true;

    unlockQuiz();
}

function validateRegistration() {

    const fullName = document.getElementById("fullName").value.trim();
    const schoolName = document.getElementById("schoolName").value.trim();
    const admissionNumber = document.getElementById("admissionNumber").value.trim();
    const country = document.getElementById("country").value;
    const studentClass = document.getElementById("studentClass").value;
    const quizPin = document.getElementById("quizPin").value.trim();

    if (
        !fullName ||
        !schoolName ||
        !admissionNumber ||
        !country ||
        !studentClass
    ) {
        alert("Please complete all required fields.");
        return false;
    }

    if (!/^\d{4}$/.test(quizPin)) {
        alert("Quiz PIN must be exactly 4 digits.");
        return false;
    }

    return true;
}

function unlockQuiz() {

    document.getElementById("quizContainer").style.display = "block";

    document.querySelector(".registration-container").style.display = "none";

    showQuestion();
    startTimer();

}

function resetRegistration() {

    document.getElementById("registrationForm").reset();

    studentData = {};

    quizStarted = false;

    selectedAnswer = null;

    currentQuestionIndex = 0;

    score = 0;

}

// ==============================
// Timer
// ==============================
let quizTimer = null;
let timeRemaining = 600; // 10 minutes

function startTimer() {

    clearInterval(quizTimer);

    timeRemaining = 600;

    updateTimer();

    quizTimer = setInterval(() => {

        timeRemaining--;

        updateTimer();

        if (timeRemaining <= 0) {

            clearInterval(quizTimer);

            finishQuiz("Time is up!");

        }

    }, 1000);

}

function updateTimer() {

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    const timer = document.getElementById("timer");

    if (timer) {
        timer.textContent =
            `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

}

// ==============================
// Progress
// ==============================
function updateProgress() {

    const progressText =
        document.getElementById("progressText");

    const progressFill =
        document.getElementById("progressFill");

    progressText.textContent =
        `Question ${currentQuestionIndex + 1} / ${quizQuestions.length}`;

    progressFill.style.width =
        `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;

}

// ==============================
// Results
// ==============================
function finishQuiz() {

    clearInterval(quizTimer);

    const totalQuestions = quizQuestions.length;

alert(`
🎉 Congratulations!

You scored ${score} / ${totalQuestions}

You earned ${score} OSAI Points.
`);

}

// ==============================
// Storage
// ==============================

// ==============================
// Initialize Quiz
// ==============================
document
    .getElementById("registrationForm")
    .addEventListener("submit", registerStudent);
