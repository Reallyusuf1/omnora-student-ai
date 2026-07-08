// ===== OMNORA STUDENT AI =====

let isCooldown = false;

// ==================== AI CHAT ====================
async function askAI() {
    const input = document.getElementById("userQuestion");
    const response = document.getElementById("responseText");
    const askBtn = document.getElementById("askBtn");

    if (isCooldown) {
        response.innerHTML = "⏳ Please wait 3 seconds before asking another question.";
        return;
    }

    const question = input.value.trim();

    if (!question) {
        response.innerHTML = "Please type a question to get started. 🧠";
        return;
    }

    isCooldown = true;
    askBtn.disabled = true;
    askBtn.innerHTML = "🧠 Thinking...";
    response.innerHTML = "🧠 Thinking...";

    try {
        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: question })
        });

        const data = await res.json();

        if (!res.ok) {
            response.innerHTML = data.error || "Something went wrong.";
            return;
        }

        response.innerHTML = data.reply || "No response received.";

    } catch (error) {
        console.error(error);
        response.innerHTML = "❌ Unable to connect. Please try again.";
    } finally {
        setTimeout(() => {
            askBtn.disabled = false;
            askBtn.innerHTML = "Ask AI";
            isCooldown = false;
        }, 3000);
    }
}

// ==================== QUIZ SYSTEM ====================
let currentQuestionIndex = 0;
let score = 0;

const dailyQuestions = [
  { question: "Who is the current President of Nigeria?", options: ["A. Muhammadu Buhari", "B. Bola Ahmed Tinubu", "C. Goodluck Jonathan", "D. Atiku Abubakar"], answer: "B" },
  { question: "What is the National Animal of Nigeria?", options: ["A. Lion", "B. Eagle", "C. Horse", "D. Camel"], answer: "A" },
  { question: "Which is the National Anthem of Nigeria?", options: ["A. Arise, O Compatriots", "B. God Save the Queen", "C. The Star-Spangled Banner", "D. Nkosi Sikelel' iAfrika"], answer: "A" },
  { question: "What does SSS3 stand for?", options: ["A. Senior Secondary School 3", "B. Science Students School 3", "C. Special Science School 3", "D. Secondary School Stage 3"], answer: "A" }
];

function startDailyQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('dailyQuizContainer').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const q = dailyQuestions[currentQuestionIndex];
    document.getElementById('quizQuestion').innerHTML = `<p><strong>Question ${currentQuestionIndex + 1}:</strong> ${q.question}</p>`;
    
    let optionsHTML = '';
    q.options.forEach(opt => {
        optionsHTML += `<button onclick="selectAnswer('${opt[0]}')" style="display:block; width:100%; margin:8px 0; padding:12px; background:#eee; border:none; border-radius:6px;"> \){opt}</button>`;
    });
    document.getElementById('quizOptions').innerHTML = optionsHTML;
    document.getElementById('nextBtn').style.display = 'none';
}

function selectAnswer(selected) {
    const correct = dailyQuestions[currentQuestionIndex].answer;
    if (selected === correct) {
        score += 2.5;
        alert("✅ Correct!");
    } else {
        alert(`❌ Wrong! Correct is ${correct}`);
    }
    document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < dailyQuestions.length) {
        showQuestion();
    } else {
        const points = Math.round(score);
        alert(`🎉 Quiz Complete! You earned ${points} points today!`);
        
        let student = JSON.parse(localStorage.getItem('omnoraStudent')) || {};
        student.points = (student.points || 0) + points;
        localStorage.setItem('omnoraStudent', JSON.stringify(student));
        
        document.getElementById('dailyQuizContainer').style.display = 'none';
    }
}

// ==================== VERIFICATION MODAL ====================
function showQuizModal() {
    document.getElementById('quizModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('quizModal').style.display = 'none';
}

function verifyStudent() {
    const fullName = document.getElementById('fullName').value.trim();
    const schoolName = document.getElementById('schoolName').value.trim();
    const studentClass = document.getElementById('studentClass').value.trim();
    const admissionNumber = document.getElementById('admissionNumber').value.trim();
    const promoCode = document.getElementById('promoCode').value.trim();

    if (!fullName || !schoolName || !studentClass || !admissionNumber) {
        alert("Please fill all required fields.");
        return;
    }

    const studentData = { fullName, schoolName, studentClass, admissionNumber, promoCode, points: 0, verified: true };
    localStorage.setItem('omnoraStudent', JSON.stringify(studentData));

    alert(`✅ Welcome ${fullName}! You are verified.`);
    closeModal();
    startDailyQuiz();
}

// ==================== EVENTS ====================
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("userQuestion");
    const askBtn = document.getElementById("askBtn");

    if (input) {
        input.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                askAI();
            }
        });
    }

    if (askBtn) {
        askBtn.addEventListener("click", askAI);
    }

    // Suggestions
    document.querySelectorAll(".suggestions a").forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const question = this.dataset.question;
            input.value = question;
            askAI();
        });
    });
});
// ================= MOBILE MENU =================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const menuOverlay = document.querySelector(".menu-overlay");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();

    nav.classList.toggle("active");
        menuOverlay.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

    document.addEventListener("click", function (e) {

        if (
            !nav.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {
            nav.classList.remove("active");
            menuOverlay.classList.remove("active");
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }

    });
    
}/* ==========================================
   AUTHENTICATION MODAL
========================================== */

const authModal = document.getElementById("auth-modal");

const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");

const closeBtn = document.querySelector(".auth-close");

const loginTab = document.querySelector('[data-tab="login"]');
const signupTab = document.querySelector('[data-tab="signup"]');

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

function openLoginModal() {
    authModal.style.display = "flex";

    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    loginForm.classList.add("active");
    signupForm.classList.remove("active");
}

function openSignupModal() {
    authModal.style.display = "flex";

    signupTab.classList.add("active");
    loginTab.classList.remove("active");

    signupForm.classList.add("active");
    loginForm.classList.remove("active");
}

function closeAuthModal() {
    authModal.style.display = "none";
}

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    openLoginModal();
});

signupBtn.addEventListener("click", function (e) {
    e.preventDefault();
    openSignupModal();
});

closeBtn.addEventListener("click", closeAuthModal);

window.addEventListener("click", function (e) {
    if (e.target === authModal) {
        closeAuthModal();
    }
});
