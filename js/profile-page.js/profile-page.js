/* ==========================================
   OMNORA STUDENTS AI
   PROFILE PAGE
========================================== 

document.addEventListener("DOMContentLoaded", () => {
    loadProfile();

    document
        .getElementById("change-photo-btn")
        ?.addEventListener("click", changeProfilePhoto);

    document
        .getElementById("edit-profile-btn")
        ?.addEventListener("click", editProfile);

    document
        .getElementById("change-pin-btn")
        ?.addEventListener("click", changePin);

    document
        .getElementById("theme-btn")
        ?.addEventListener("click", toggleTheme);

    document
        .getElementById("logout-btn")
        ?.addEventListener("click", logoutUser);

    document
        .getElementById("delete-account-btn")
        ?.addEventListener("click", deleteAccount);
});

/* ==========================================
   LOAD PROFILE
========================================== 

function loadProfile() {

    const student = JSON.parse(
        localStorage.getItem("student")
    );

    if (!student) return;

    document.getElementById("student-name").textContent =
        student.fullName || "Student";

    document.getElementById("full-name").textContent =
        student.fullName || "-";

    document.getElementById("school-name").textContent =
        student.schoolName || "-";

    document.getElementById("student-class").textContent =
        student.className || "-";

    document.getElementById("admission-number").textContent =
        student.admissionNumber || "-";

    document.getElementById("member-since").textContent =
        student.memberSince || "Joined Omnora";

    if (student.photo) {
        document.querySelector(".profile-avatar img").src =
            student.photo;
    }

}

/* ==========================================
   CHANGE PHOTO
========================================== 

function changeProfilePhoto() {

    alert("Profile photo upload coming soon.");

}

/* ==========================================
   EDIT PROFILE
========================================== *

function editProfile() {

    alert("Edit Profile feature coming soon.");

}

/* ==========================================
   CHANGE PIN
========================================== 

function changePin() {

    alert("Change PIN feature coming soon.");

}

/* ==========================================
   THEME
========================================== 

function toggleTheme() {

    document.body.classList.toggle("light-theme");

    const isLight =
        document.body.classList.contains("light-theme");

    localStorage.setItem("theme", isLight);

}

/* ==========================================
   LOGOUT
========================================== *

function logoutUser() {

    const confirmLogout = confirm(
        "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("student");

    window.location.href = "auth-page.html";

}

/* ==========================================
   DELETE ACCOUNT
========================================== *

function deleteAccount() {

    const confirmDelete = confirm(
        "Delete your account permanently?"
    );

    if (!confirmDelete) return;

    localStorage.removeItem("student");

    alert("Account deleted successfully.");

    window.location.href = "index.html";

}
