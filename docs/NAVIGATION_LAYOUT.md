# Navigation Layout Specification

## Purpose

This document defines the complete navigation architecture for Omnora Student AI.

The goal is to ensure that future features can be added without changing the HTML structure, CSS architecture, or JavaScript logic.

---

# Sidebar Structure

Navigation is divided into six independent sections.

```
Sidebar

├── Header
│   ├── Logo
│   ├── Project Name
│   └── Close Button

├── Authentication
│   ├── Login
│   └── Sign Up

├── Main Navigation
│   ├── Home
│   ├── AI Learning
│   ├── Ask AI
│   ├── Daily Quiz
│   ├── Study Plan
│   ├── Leaderboard
│   ├── Teacher Dashboard
│   └── Learning Materials

├── User Preferences
│   ├── Profile
│   ├── Settings
│   ├── Notifications
│   └── Dark Mode

├── Information
│   ├── About
│   ├── Contact
│   └── Help Center

└── Footer
    ├── Start Learning
    └── App Version
```

---

# Design Rules

Every section must have its own container.

Each section can be modified independently.

No feature should directly depend on another section.

CSS must style sections independently.

JavaScript must target sections independently.

---

# Authentication Rules

If user is NOT logged in

Show:

• Login

• Sign Up

If user IS logged in

Replace Login/Sign Up with

• User Avatar

• Student Name

• Profile Shortcut

---

# Scrolling Rules

Sidebar should scroll independently.

Main page must stop scrolling while sidebar is open.

Clicking outside sidebar closes the menu.

Clicking inside sidebar must NEVER close the menu.

---

# Future Ready

The navigation architecture must support future modules including

• Parent AI

• School Portal

• Voice AI

• Omnora Exams

• Omnora Scholarships

• Omnora Library

• Omnora University

• Premium

• Wallet

without restructuring HTML.
