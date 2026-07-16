/* ==========================================
   OMNORA STUDENTS AI
   STUDENT REGISTRATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("studentForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const fullName = form.querySelector('input[placeholder="Full Name"]').value.trim();

        const schoolName = form.querySelector('input[placeholder="School Name"]').value.trim();

        const admissionNumber = form.querySelector('input[placeholder="Admission Number"]').value.trim();

        const studentClass = form.querySelector("select").value;

        const gender = form.querySelectorAll("select")[1].value;

        const country = form.querySelector('input[placeholder="Country"]').value.trim();

        const state = form.querySelector('input[placeholder="State / Province"]').value.trim();

        const city = form.querySelector('input[placeholder="City / LGA"]').value.trim();

        const dob = form.querySelector('input[type="date"]').value;

        const goal = form.querySelector("textarea").value.trim();

        const password = form.querySelector('input[placeholder="Create Password"]').value;

        const confirmPassword = form.querySelector('input[placeholder="Confirm Password"]').value;

        const agree = form.querySelector('input[type="checkbox"]').checked;

        /* ===========================
           VALIDATION
        =========================== */

        if (
            !fullName ||
            !schoolName ||
            !admissionNumber ||
            !country ||
            !state ||
            !city ||
            !dob ||
            !password ||
            !confirmPassword
        ) {

            alert("⚠ Please complete all required fields.");

            return;

        }

        if (studentClass === "Select Class") {

            alert("⚠ Please select your class.");

            return;

        }

        if (gender === "Gender") {

            alert("⚠ Please select your gender.");

            return;

        }

        if (password !== confirmPassword) {

            alert("❌ Passwords do not match.");

            return;

        }

        if (!agree) {

            alert("⚠ Please accept the Terms of Service.");

            return;

        }

        /* ===========================
           CREATE STUDENT ACCOUNT
        =========================== */

        const student = {

            id: "OMNORA-" + Date.now(),

            fullName,

            schoolName,

            admissionNumber,

            studentClass,

            gender,

            country,

            state,

            city,

            dateOfBirth: dob,

            learningGoal: goal,

            password,

            points: 0,

            streak: 0,

            quizzesCompleted: 0,

            verified: false,

            loginProvider: "Student",

            createdAt: new Date().toISOString()

        };

        /* ===========================
           SAVE
        =========================== */

        localStorage.setItem(
            "omnoraStudent",
            JSON.stringify(student)
        );

        localStorage.setItem(
            "omnoraLoggedIn",
            "true"
        );

        /* ===========================
           SUCCESS
        =========================== */

        alert(
`🎉 Congratulations!

Welcome to Omnora Students AI.

Your student account has been created successfully.

Click OK to continue to Home.`
        );

        window.location.href = "index.html";

    });

});
