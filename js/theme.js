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
        // Za mu cika wannan a Phase 2
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
