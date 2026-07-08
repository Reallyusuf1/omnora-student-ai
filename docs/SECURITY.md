# Security Guidelines

## Purpose

This document defines the security architecture of Omnora Student AI.

Security must be considered from the beginning of development rather than added later.

---

# Authentication

Supported authentication methods

• Google Sign In

• Phone Number Authentication

• Email Authentication

Future

• Microsoft

• Apple ID

---

# Authorization

Student

Can only access

- Personal Profile
- Personal Quiz Results
- Personal Study Plan
- AI Chat History

Teacher

Can access

- Assigned Classes
- Student Performance
- Quiz Management
- Lesson Plans

Administrator

Can access

- Entire Platform
- Analytics
- User Management
- Reports
- AI Configuration

---

# API Security

Never expose API Keys inside HTML.

Never expose API Keys inside CSS.

Never expose API Keys inside client-side JavaScript.

All AI requests must pass through secure backend APIs.

---

# Password Rules

Passwords must never be stored in plain text.

Passwords should be encrypted before storage.

Support password reset.

Support account recovery.

---

# Data Protection

Every student owns their own data.

Teachers only access their own school.

Parents only access linked students.

Administrators follow role-based permissions.

---

# Rate Limiting

Prevent spam requests.

Prevent AI abuse.

Prevent brute force login attempts.

Limit repeated API requests.

---

# Future Security

Support

- Two Factor Authentication

- Device Verification

- Login History

- Session Management

- Secure Tokens

- Encryption

---

# Privacy

Comply with international privacy standards.

Protect student information.

Never sell personal data.

Respect user consent.

---

# Security Principle

Security first.

Performance second.

Features third.
