// ===== OMNORA STUDENT AI - GEMINI VERSION =====

async function askAI() {
    const input = document.getElementById("userQuestion");
    const response = document.getElementById("responseText");
    const askBtn = document.getElementById("askBtn");

    const question = input.value.trim();

    if (!question) {
        response.innerHTML = "Please type a question to get started. 🧠";
        return;
    }

    // Prevent multiple clicks
    askBtn.disabled = true;
    askBtn.innerHTML = "🧠 Thinking...";

    response.innerHTML = "🧠 Thinking...";

    try {
        const res = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: question
            })
        });

        const data = await res.json();

        if (!res.ok) {
            response.innerHTML = data.error || "Something went wrong.";
            return;
        }

        response.innerHTML = data.reply;

    } catch (error) {
        console.error(error);
        response.innerHTML =
            "❌ Unable to connect to Omnora Student AI. Please try again.";
    } finally {
        // Enable button again
        askBtn.disabled = false;
        askBtn.innerHTML = "Ask AI";
    }
}

// ===== EVENTS =====
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
