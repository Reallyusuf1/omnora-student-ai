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

        alert("Google button clicked");
       alert(typeof window.supabaseClient);

        try {
            const { data, error } =
                await window.supabaseClient.auth.signInWithOAuth({
                    provider: "google",
                    options: {
                        redirectTo: window.location.origin
                    }
                });

            console.log("DATA:", data);
            console.log("ERROR:", error);

            if (error) {
                alert(error.message);
            }

        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    });
    }

    /* ===================================
       X AUTH
    =================================== */

    if (xButton) {
        xButton.addEventListener("click", async (event) => {
            event.preventDefault();

            await window.supabaseClient.auth.signInWithOAuth({
                provider: "twitter",
                options: {
                    redirectTo: window.location.origin
                }
            });
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
