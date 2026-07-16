// ==========================================
// OMNORA STUDENTS AI
// SUPABASE CLIENT
// ==========================================

const SUPABASE_URL = "https://qnheojayfgtdohmezxju.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_xds1jJt0bjywElP-9tN_sg_TUBC6zgT";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

window.supabaseClient = supabase;

