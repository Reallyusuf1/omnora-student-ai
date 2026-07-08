# API_ARCHITECTURE.md

# Omnora Student AI API Architecture

Version: 2.0

Maintained by: Omnora Labs

---

# Purpose

This document defines how Omnora Student AI communicates with AI providers, backend services, and future cloud infrastructure.

---

# Architecture

User

↓

Frontend (HTML / CSS / JavaScript)

↓

API Layer

↓

AI Providers

↓

Response

---

# API Layer

The frontend must never communicate directly with AI providers.

All requests must pass through the backend API layer.

---

# Current AI Provider

Groq API

---

# Future AI Providers

- OpenAI
- Google Gemini
- Anthropic Claude
- DeepSeek
- Local AI Models

---

# API Files

server.js

Main backend entry point.

providers.js

Manages AI providers.

ai.js

Frontend AI communication.

utils.js

Shared helper functions.

---

# Request Flow

User asks a question

↓

Frontend validates input

↓

Request sent to server.js

↓

Provider selected

↓

AI generates response

↓

Frontend displays answer

---

# Error Handling

- Network timeout
- Invalid API key
- Provider unavailable
- Empty response
- Rate limiting

---

# Security

- Never expose API keys in frontend.
- Store secrets securely.
- Validate every request.
- Sanitize user input.

---

# Future Expansion

The API architecture must support multiple AI providers without requiring major frontend changes.
