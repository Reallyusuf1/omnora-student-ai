// ==========================================
// OMNORA STUDENTS AI
// SUPABASE CLIENT
// ==========================================

alert("Supabase JS loaded");

alert(typeof window.supabase);

const SUPABASE_URL = "https://qnheojayfgtdohmezxju.supabase.co";

const SUPABASE_ANON_KEY =  = "sb_publishable_xds1jJt0bjywElP-9tN_sg_TUBC6zgT";

if (!window.supabase) {
    alert("Supabase SDK not loaded");
    throw new Error("Supabase SDK not loaded");
}
const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

window.supabaseClient = supabase;

alert(typeof window.supabaseClient);
