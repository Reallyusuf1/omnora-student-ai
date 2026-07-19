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
