// ========================================
// Omnora Students AI V2
// Theme Engine
// ========================================

import { supabase } from "./supabase.js";

class ThemeEngine {
    constructor() {
        this.currentTheme = "dark";
    }

    async init() {
        await this.loadTheme();
    }

    async loadTheme() {
    const {
        data: { session },
        error: sessionError
    } = await supabase.auth.getSession();

    if (sessionError || !session) {
        this.applyTheme("dark");
        return;
    }

    const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("theme")
        .eq("id", session.user.id)
        .single();

    if (profileError || !profile) {
        this.applyTheme("dark");
        return;
    }

    this.applyTheme(profile.theme || "dark");
    }

    applyTheme(theme) {
        this.currentTheme = theme;

        if (theme === "light") {
            document.body.classList.add("light-theme");
        } else {
            document.body.classList.remove("light-theme");
        }
    }

    async saveTheme(theme) {
        // Za mu cika wannan a Phase 3
    }

    async toggleTheme() {
        const nextTheme =
            this.currentTheme === "dark"
                ? "light"
                : "dark";

        this.applyTheme(nextTheme);

        await this.saveTheme(nextTheme);
    }
}

export const themeEngine = new ThemeEngine();
