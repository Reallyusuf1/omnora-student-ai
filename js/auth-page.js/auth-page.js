/* ==========================================
   OMNORA STUDENTS AI
   AUTHENTICATION PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const googleButton = document.querySelector(".google-auth");

    const xButton = document.querySelector(".x-auth");

    const studentButton = document.querySelector(".student-button");

    /* ===================================
       GOOGLE AUTH
    =================================== */

    if (googleButton) {

        googleButton.addEventListener("click", async (event) => {

            event.preventDefault();

            await window.supabaseClient.auth.signInWithOAuth(...)

        });

    }

    /* ===================================
       X AUTH
    =================================== */

    if (xButton) {

        xButton.addEventListener("click", async (event) => {

            event.preventDefault();

            await window.supabaseClient.auth.signInWithOAuth(...)

        });

    }

    /* ===================================
       STUDENT REGISTRATION
    =================================== */

    if (studentButton) {

        studentButton.addEventListener("click", () => {

            window.location.href = "student-register.html";

        });

    }

});
