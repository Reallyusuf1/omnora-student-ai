# Omnora Student AI V2
## Engineering Principles

---

# Vision

Build Omnora Student AI as a long-term AI Education Platform.

We are not building an MVP.

We are building infrastructure.

---

# Core Engineering Principles

## Principle 01

Architecture before implementation.

Every feature must begin with architecture and design before code.

---

## Principle 02

Never sacrifice architecture for speed.

Quick fixes that damage architecture are not allowed.

Long-term maintainability always wins.

---

## Principle 03

One Module, One Responsibility.

Every module must have one clear responsibility.

Example:

Navigation Module
Hero Module
AI Module
Quiz Module
Authentication Module
Dashboard Module

No module should own another module's logic.

---

## Principle 04

Loose Coupling

Modules communicate through controllers or events.

Never through hidden dependencies.

---

## Principle 05

High Cohesion

Everything inside one module should belong to that module.

---

## Principle 06

Fix the smallest affected module.

If the bug exists inside Mobile Navigation,

Fix Mobile Navigation.

Do not edit Hero.

Do not edit AI.

Do not edit unrelated modules.

---

## Principle 07

Desktop and Mobile are independent UI systems.

If Mobile requires different logic,

Build different logic.

Never compromise Desktop.

---

## Principle 08

One Feature = One Module.

Large features are divided into modules.

Never continue growing one giant file.

---

## Principle 09

One Logical Change = One Commit.

Every commit should have one purpose.

Examples:

feat(navigation): mobile sidebar

fix(hero): animation timing

refactor(ai): modular API handler

---

## Principle 10

Documentation evolves with architecture.

Every architectural change updates:

PROJECT_ARCHITECTURE.md

DESIGN_SYSTEM.md

CHANGELOG.md

README.md

---

## Principle 11

Every line of code must justify its existence.

If code has no responsibility,

remove it.

---

## Principle 12

Build for scalability.

Today's code must still support tomorrow's:

AI Agents

Schools

Teachers

Parents

Android

iOS

API

Cloud

Millions of students

---

# Development Workflow

Architecture

↓

Documentation

↓

HTML

↓

CSS

↓

JavaScript

↓

Testing

↓

Commit

↓

Deployment

---

# Golden Rule

Never sacrifice architecture for speed.

---

# Omnora Engineering Philosophy

Build for decades.

Not for demos.

Build systems.

Not pages.

Build platforms.

Not projects.
