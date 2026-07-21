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

    logoutStudent

};
