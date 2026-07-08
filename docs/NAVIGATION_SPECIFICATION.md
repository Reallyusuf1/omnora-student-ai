# NAVIGATION_SPECIFICATION.md

# Omnora Student AI Navigation V2

Version: 2.0

Maintained by: Omnora Labs

---

# Purpose

This document defines the structure and behavior of the Omnora Student AI navigation system.

The navigation must remain modular, scalable, and independent from other application features.

---

# Navigation Layout

Desktop

Top Navigation Bar

Mobile

Slide-out Sidebar

---

# Mobile Sidebar Sections

Section 1

- Profile
- Home
- AI Learning
- Ask AI
- Daily Quiz
- Study Plan
- Leaderboard
- Teacher Dashboard

Section 2

- Settings
- Dark Mode

Section 3

- About
- Contact
- Help Center

Section 4

- Start Learning Button

---

# Sidebar Behavior

- Opens from the left.
- Covers approximately 85% of the screen.
- Main page must not scroll while the sidebar is open.
- Sidebar must scroll independently.
- Clicking outside the sidebar closes it.
- Clicking inside the sidebar must NOT close it.
- Navigation links remain clickable.
- Future menu items can be added without changing JavaScript logic.

---

# Engineering Rules

- HTML defines structure.
- JavaScript controls behavior.
- CSS controls appearance.
- Never mix responsibilities.

---

# Future Expansion

Navigation must support:

- Notifications
- Parent Dashboard
- Admin Dashboard
- Language Switcher
- User Avatar
- Account Switcher
