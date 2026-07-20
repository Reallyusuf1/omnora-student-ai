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
        
        let reply = data.reply || "No response received.";

reply = reply
    .replace(/\*\*/g, "")
    .replace(/^#/gm, "")
    .replace(/`/g, "");

response.innerHTML = reply
    .replace(/\r\n/g, "<br>")
    .replace(/\n/g, "<br>");
    }
    catch (error) {
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



/*Termination sessions on login and sing up buttons*/

async function updateAuthUI() {

    if (!window.supabaseClient) return;

    const { data: { session } } =
        await window.supabaseClient.auth.getSession();

    const loginButtons =
        document.querySelectorAll(".login-btn");

    const signupButtons =
        document.querySelectorAll(".signup-btn");

    if (session) {

        loginButtons.forEach(btn => {
            btn.style.display = "none";
        });

        signupButtons.forEach(btn => {
            btn.style.display = "none";
        });

    } else {

        loginButtons.forEach(btn => {
            btn.style.display = "";
        });

        signupButtons.forEach(btn => {
            btn.style.display = "";
        });

    }

}

document.addEventListener(
    "DOMContentLoaded",
    updateAuthUI
);

window.supabaseClient?.auth.onAuthStateChange(() => {

    updateAuthUI();

});
