# Database Migration Plan

## Purpose

This document defines how Omnora Student AI will evolve from a browser-only application into a scalable cloud-based education platform.

The migration will happen in phases to ensure stability and avoid breaking existing features.

---

# Phase 1 — Local Storage (Current)

Purpose:
Fast development without backend infrastructure.

Data stored locally:

- Student profile
- Quiz progress
- Study plan
- Theme preference
- Settings
- Recent AI history

Advantages

- Fast
- Offline support
- Easy testing

Limitations

- Data lost when browser is cleared
- Cannot sync across devices
- No real leaderboard
- No cloud backup

---

# Phase 2 — Supabase

Purpose

Introduce cloud synchronization while keeping development simple.

Features

- User Authentication
- Cloud Database
- File Storage
- Real-time updates
- Secure API

Data moved to cloud

- Student Accounts
- Quiz Results
- XP Points
- Leaderboards
- Certificates
- School Information
- Teacher Accounts

---

# Phase 3 — PostgreSQL

Purpose

Support millions of students across Africa.

Database tables

Students

Schools

Teachers

Quizzes

Questions

Subjects

Results

Study Plans

Leaderboards

Achievements

Certificates

Notifications

Support Tickets

---

# Offline Strategy

The application should continue working when internet is unavailable.

When connection returns

Automatically synchronize

without losing user progress.

---

# Security Rules

Every student owns only their own data.

Teachers only access students from their schools.

Administrators manage the entire platform.

No client should directly modify database tables.

All requests must go through secure APIs.

---

# Future Expansion

Database architecture must support

- Parent Portal

- School Portal

- Omnora University

- AI Tutor

- AI Voice

- Scholarships

- Library

- Career Platform

without redesigning the database.
