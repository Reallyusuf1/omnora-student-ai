/**
 * ==========================================================
 * Omnora Students AI V2
 * Student Registration Controller
 * File: js/student-register.js
 * ==========================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("studentRegisterForm");

    if (!form) return;

    form.addEventListener("submit", handleStudentRegistration);
});

/**
 * Student Registration
 */
async function handleStudentRegistration(event) {
    event.preventDefault();

    try {
        // --------------------------------------------------
        // Collect Form Data
        // --------------------------------------------------

        const formData = {
            fullName: getValue("fullName"),
            schoolName: getValue("schoolName"),
            admissionNumber: getValue("admissionNumber"),
            classLevel: getValue("classLevel"),
            gender: getValue("gender"),
            country: getValue("country"),
            state: getValue("state"),
            city: getValue("city"),
            dateOfBirth: getValue("dateOfBirth"),
            goal: getValue("goal"),
            password: getValue("password"),
            confirmPassword: getValue("confirmPassword"),
            acceptedTerms: document.getElementById("terms").checked
        };

        // --------------------------------------------------
        // Validation
        // --------------------------------------------------

        const validation = validateRegistration(formData);

        if (!validation.success) {
            return showError(validation.message);
        }

        // --------------------------------------------------
        // Loading
        // --------------------------------------------------

        showLoading(true);

        // --------------------------------------------------
        // Send To Authentication Layer
        // --------------------------------------------------

        const result = await OmnoraAuth.registerStudent(formData);

        // --------------------------------------------------
        // Success
        // --------------------------------------------------

        if (result.success) {

            showSuccess(
                `Registration successful!\n\nYour Student ID is:\n${result.omsId}`
            );

            window.location.href = "student-login.html";

            return;
        }

        // --------------------------------------------------
        // Error
        // --------------------------------------------------

        showError(result.message);

    } catch (error) {

        console.error(error);

        showError("Something went wrong.");

    } finally {

        showLoading(false);

    }
}

/**
 * Validate Registration Form
 */
function validateRegistration(data) {

    if (!data.fullName.trim()) {
        return {
            success: false,
            message: "Full Name is required."
        };
    }

    if (!data.schoolName.trim()) {
        return {
            success: false,
            message: "School Name is required."
        };
    }

    if (!data.country.trim()) {
        return {
            success: false,
            message: "Country is required."
        };
    }

    if (!data.password) {
        return {
            success: false,
            message: "Password is required."
        };
    }

    if (data.password.length < 8) {
        return {
            success: false,
            message: "Password must be at least 8 characters."
        };
    }

    if (data.password !== data.confirmPassword) {
        return {
            success: false,
            message: "Passwords do not match."
        };
    }

    if (!data.acceptedTerms) {
        return {
            success: false,
            message: "Please accept the Terms & Privacy Policy."
        };
    }

    return {
        success: true
    };
}

/**
 * Get Input Value
 */
function getValue(id) {

    const input = document.getElementById(id);

    return input ? input.value.trim() : "";

}

/**
 * Loading UI
 */
function showLoading(status) {

    const button = document.querySelector(
        "#studentRegisterForm button[type='submit']"
    );

    if (!button) return;

    button.disabled = status;

    button.textContent = status
        ? "Creating Account..."
        : "Create Student Account";

}

/**
 * Success UI
 */
function showSuccess(message) {

    alert(message);

}

/**
 * Error UI
 */
function showError(message) {

    alert(message);

}
