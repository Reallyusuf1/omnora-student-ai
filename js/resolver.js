"use strict";

/**
 * ============================================
 * OMNORA STUDENTS AI V2
 * Resolver Layer
 * File: js/resolver.js
 * ============================================
 */

/**
 * Resolve OMS-ID to pseudo email.
 */
async function resolveOmsEmail(omsId) {
    const supabase = window.supabaseClient;

    if (!supabase) {
        throw new Error("Supabase client is not initialized.");
    }

    const { data, error } = await supabase.rpc(
        "resolve_oms_email",
        {
            p_oms_id: omsId
        }
    );

    if (error) {
        throw error;
    }

    return data;
}

window.OmnoraResolver = {
    resolveOmsEmail
};
