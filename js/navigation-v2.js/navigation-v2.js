// ==========================================
// Navigation V2
// ==========================================

const menuToggle = document.querySelector(".menu-toggle");
const mobileSidebar = document.querySelector(".mobile-sidebar");
const menuOverlay = document.querySelector(".menu-overlay");

function openSidebar() {
    mobileSidebar.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.classList.add("menu-open");

    alert("Sidebar Open");
}

function closeSidebar() {
    mobileSidebar.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
}

function toggleSidebar() {
    mobileSidebar.classList.contains("active")
        ? closeSidebar()
        : openSidebar();
}

function initializeNavigation() {
    if (!menuToggle || !mobileSidebar || !menuOverlay) return;

    menuToggle.addEventListener("click", toggleSidebar);

    menuOverlay.addEventListener("click", closeSidebar);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeSidebar();
        }
    });
}

document.addEventListener("DOMContentLoaded", initializeNavigation);
