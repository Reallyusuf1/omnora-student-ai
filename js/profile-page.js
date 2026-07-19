/* ==========================================
   OMNORA STUDENTS AI V2
   PROFILE PAGE
========================================== */

document.addEventListener("DOMContentLoaded", async () => {

    if (!window.supabaseClient) {
        console.error("Supabase Client not found.");
        return;
    }

    const {
        data: { session }
    } = await window.supabaseClient.auth.getSession();

    if (!session) {
        window.location.href = "auth-page.html";
        return;
    }

    const user = session.user;

    /* ==========================================
       PROFILE ELEMENTS
    ========================================== */

    const avatar = document.getElementById("profile-image");
    const studentName = document.getElementById("student-name");
    const studentEmail = document.getElementById("student-email");
    const memberSince = document.getElementById("member-since");

    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email-address");

    const schoolName = document.getElementById("school-name");
    const studentClass = document.getElementById("student-class");
    const admissionNumber = document.getElementById("admission-number");

    /* ==========================================
       USER DATA
    ========================================== */

    const profilePhoto =
        user.user_metadata.avatar_url ||
        "assets/images/default-avatar.png";

    const name =
        user.user_metadata.full_name ||
        user.user_metadata.name ||
        "Student";

    const joinedYear =
        new Date(user.created_at).getFullYear();

    avatar.src = profilePhoto;

    studentName.textContent = name;
    studentEmail.textContent = user.email;
    memberSince.textContent = "Joined Omnora • " + joinedYear;

    fullName.value = name;
    email.value = user.email;

    /* ==========================================
       OPTIONAL LOCAL PROFILE
       (Za a maye gurbinsa da Supabase DB daga baya)
    ========================================== */

    const savedProfile = JSON.parse(
        localStorage.getItem("studentProfile") || "{}"
    );

    if (schoolName)
        schoolName.value = savedProfile.schoolName || "";

    if (studentClass)
        studentClass.value = savedProfile.studentClass || "";

    if (admissionNumber)
        admissionNumber.value =
            savedProfile.admissionNumber || "";

});


/* ==========================================
   EDIT PROFILE
========================================== */

const editButton =
document.getElementById("edit-profile-btn");

if (editButton) {

    editButton.addEventListener("click", () => {

        document.getElementById("school-name").readOnly = false;

        document.getElementById("student-class").disabled = false;

        document.getElementById("admission-number").readOnly = false;

        alert("You can now edit your profile.");

    });

}


/* ==========================================
   CHANGE PIN
========================================== */

const pinButton =
document.getElementById("change-pin-btn");

if (pinButton) {

    pinButton.addEventListener("click", () => {

        alert("PIN feature coming soon.");

    });

}


/* ==========================================
   LOGOUT
========================================== */

const logoutButton =
document.getElementById("logout-btn");

if (logoutButton) {

    logoutButton.addEventListener("click", async () => {

        const confirmLogout =
            confirm("Are you sure you want to logout?");

        if (!confirmLogout) return;

        await window.supabaseClient.auth.signOut();

        localStorage.removeItem("studentProfile");

        window.location.href = "index.html";

    });

}


/* ==========================================
   DARK MODE
========================================== */

const themeToggle =
document.getElementById("theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("change", () => {

        document.body.classList.toggle("dark-mode");

    });

}
