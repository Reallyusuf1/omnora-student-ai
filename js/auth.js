/**
 * =====================================================
 * OMNORA STUDENTS AI V2
 * Authentication Core
 * File: js/auth.js
 * =====================================================
 */

"use strict";

/**
 * Return initialized Supabase client.
 */
function getSupabase() {
    if (!window.supabaseClient) {
        throw new Error("Supabase client is not initialized.");
    }

    return window.supabaseClient;
}

/**
 * Get current authenticated user.
 */
async function getCurrentUser() {
    const supabase = getSupabase();

    const {
        data: { user },
        error
    } = await supabase.auth.getUser();

    if (error) {
        console.error(error);
        return null;
    }

    return user;
}

/**
 * Get current session.
 */
async function getCurrentSession() {
    const supabase = getSupabase();

    const {
        data: { session },
        error
    } = await supabase.auth.getSession();

    if (error) {
        console.error(error);
        return null;
    }

    return session;
}

/**
 * Check whether user is authenticated.
 */
async function isAuthenticated() {
    const session = await getCurrentSession();

    return !!session;
}

/**
 * Protect private pages.
 */
async function requireAuth() {

    const loggedIn = await isAuthenticated();

    if (!loggedIn) {

        window.location.href =
            "student-login.html";

        return false;
    }

    return true;
}

/**
 * Logout current student.
 */
async function logoutStudent() {

    const supabase = getSupabase();

    const { error } =
        await supabase.auth.signOut();

    if (error) {

        console.error(error);

        return false;
    }

    window.location.href =
        "student-login.html";

    return true;
}

/**
 * Global Auth API
 */
window.OmnoraAuth = {

    getCurrentUser,

    getCurrentSession,

    isAuthenticated,

    requireAuth,

    registerStudent,

    loginStudent,
    
    logoutStudent

};


/**
 * Create Student Profile
 */
async function createStudentProfile(
    userId,
    profile
) {

    const supabase = getSupabase();

    const { error } =
        await supabase
            .from("profiles")
            .insert({

                id: userId,

                oms_id: profile.oms_id,

                full_name: profile.full_name,

                school_name: profile.school_name,

                country: profile.country,

                admission_number:
                    profile.admission_number || null,

                class_level:
                    profile.class_level || null,

                gender:
                    profile.gender || null,

                state:
                    profile.state || null,

                city:
                    profile.city || null,

                date_of_birth:
                    profile.date_of_birth || null,

                goal:
                    profile.goal || null,

                avatar_url:
                    profile.avatar_url || null,

                role: "student"

            });

    if (error) {
        throw error;
    }
}


/**
 * Register Student
 */
async function registerStudent(formData) {

    const supabase = getSupabase();

    if (
        !formData.full_name ||
        !formData.school_name ||
        !formData.country ||
        !formData.password
    ) {

        throw new Error(
            "Please complete all required fields."
        );
    }

    const {
    data: omsId,
    error: omsError
} = await supabase.rpc("generate_oms_id");

if (omsError) {
    throw omsError;
}

    const pseudoEmail =
        `${omsId.toLowerCase()}@students.omnora.ai`;

    const {

        data,

        error

    } = await supabase.auth.signUp({

        email: pseudoEmail,

        password: formData.password

    });

    if (error) {
        throw error;
    }

    if (!data?.user) {
    throw new Error("Student account was not created.");
    }

    await createStudentProfile(

        data.user.id,

        {

            ...formData,

            oms_id: omsId

        }

    );

    return {

        success: true,

        oms_id: omsId

    };

                }
/**
 * Login Student
 */
async function loginStudent(loginData) {

    const supabase = getSupabase();

    const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("oms_id")
        .eq("oms_id", loginData.omsId)
        .single();

    console.log("PROFILE:", profile);
console.log("PROFILE ERROR:", profileError);

    if (profileError || !profile) {
        return {
            success: false,
            message: "Invalid OMS-ID or password."
        };
    }

    const pseudoEmail =
        `${loginData.omsId.toLowerCase()}@students.omnora.ai`;
    
    console.log("Pseudo Email:", pseudoEmail);

    const {
    data,
    error
} = await supabase.auth.signInWithPassword({
    email: pseudoEmail,
    password: loginData.password
});

console.log("AUTH DATA:", data);
console.log("AUTH ERROR:", error);

    if (error) {
        return {
            success: false,
            message: "Invalid OMS-ID or password."
        };
    }

    return {
        success: true
    };
}
