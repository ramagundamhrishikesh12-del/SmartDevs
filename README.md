# SmartDevs — Team Code Review & Engineering Memory Agent

[![Engine: Gemini 3.8 Flash](https://img.shields.io/badge/AI%20Engine-Gemini%203.8%20Flash-0284c7)](https://deepmind.google/technologies/gemini/)
[![Memory: 5 Layers + Hindsight](https://img.shields.io/badge/Memory-Hindsight%20Vectorize-purple)](https://vectorize.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![Database: Prisma](https://img.shields.io/badge/ORM-Prisma-emerald)](https://www.prisma.io/)

A narrow AI web application designed specifically for software engineering teams to analyze code, identify bugs, track historical mistakes across 5 structured memory layers, detect recurring patterns, and generate actionable team-level and management reports.

---

## 1. Core Principles

1. **Structured Engineering Memory**: Does not store generic chat conversations. Stores structured observations:
   - Who made the mistake & submission provenance
   - Categorized defect (e.g. `input_validation`, `null_handling`, `security`, `error_handling`)
   - Normalized semantic fingerprint (e.g. `typescript:input_validation:missing_input_validation`)
   - Severity, root cause, and constructive remediation
   - Trend direction (`IMPROVING`, `STABLE`, `INCREASING`)
   - Human confirmation status
2. **Zero-Trust Sensitive Data Scrubbing**: Automatically detects and redacts passwords, API keys, bearer tokens, private keys, and connection strings before any storage or analysis.
3. **Strict Narrow Scope**: Never functions as a general chatbot, therapist, or web crawler. Enforces anti-hallucination guardrails and only provides verified engineering feedback.
4. **Multi-Tenant Server-Side Isolation**: All data is strictly partitioned by `organization_id` and verified at the database query layer.

---

## 2. 5-Layer Engineering Memory Architecture

- **Layer 1 (Individual Developer Memory)**: Tracks recurring patterns associated with a specific developer.
- **Layer 2 (Team Memory)**: Consolidates common mistakes observed across squad members without exposing private developer identities.
- **Layer 3 (Organization Memory)**: Captures organization-wide engineering standards and architectural patterns.
- **Layer 4 (Codebase Memory)**: Technical conventions, frameworks, and verified coding standards.
- **Layer 5 (Temporary Analysis Memory)**: Short-retention AST and execution context used during a single review.
- **Hindsight Long-Term Memory**: Ingests structured pattern summaries into Hindsight Vectorize with a local fallback queue when offline.

---

## 3. User Roles & RBAC Matrix

| Role | Scope | Code & Submissions | Review & Verification | Reports & Analytics |
| :--- | :--- | :--- | :--- | :--- |
| **SUPER_ADMIN** | Organization-wide | All submissions | Global findings | Global analytics, audit trail & health |
| **TEAM_LEAD** | Managed Squad(s) | Member submissions | Confirm, reject, or resolve findings | Squad reports & team-level patterns |
| **TEAM_MEMBER** | Assigned Squad(s)| Own submissions only | View assigned feedback | Own metrics & constructive advice |
| **MANAGER** | Executive | Aggregated trends | Historical patterns | High-level management reports |

---

## 4. Development Seed Personas (1-Click Login)

The development database comes pre-seeded with realistic engineering telemetry, submissions, and recurring patterns. All accounts use password: `Password123!`

| Persona | Role | Email | Notable Pre-Seeded Context |
| :--- | :--- | :--- | :--- |
| **Sarah Connor** | Super Admin | `admin@demo.org` | Audit logs, node health, multi-org |
| **Alice Chen** | Team Lead | `alice@demo.org` | Leads Platform Core Team, verification controls |
| **Bob Smith** | Senior Dev | `bob@demo.org` | Recurring input validation & SQL injection findings |
| **Charlie Davis**| Fullstack Dev | `charlie@demo.org` | Swallowed error finding resolved in PR #88 |
| **Dave Miller** | VP Engineering | `dave@demo.org` | High-level executive reports & cross-team trends |

---

## 5. Getting Started (Local Development)

### Prerequisites
- Node.js >= 20 (Node 24 supported)
- npm >= 10

### 1. Configure Backend Environment
```bash
cd backend
cp .env.example .env
```
*(Optionally set `AI_API_KEY=your_gemini_key` for Gemini 3.8 Flash and `HINDSIGHT_API_KEY=your_key` for Hindsight. If keys are omitted, the application runs gracefully with deterministic static AST analysis and the local memory queue).*

### 2. Initialize Database & Seed Demo Data
```bash
cd backend
npm run prisma:push
npm run prisma:seed
```

### 3. Launch Development Servers
In two separate terminals:

**Terminal 1 (Backend - Port 5000):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend - Port 5173):**
```bash
cd frontend
npm run dev
```

Open your browser to: **http://localhost:5173**

---

## 6. Automated Test Suites

The backend includes a comprehensive Vitest test suite covering:
1. **Unit Tests**: Semantic fingerprint normalization, secret sanitization, static AST rules, memory decision engine, narrow AI scope guardrails.
2. **Integration & E2E Tests**: Full authentication flow, RBAC privacy boundaries, code submission pipeline, recurring pattern detection, human feedback loop, and 8-section report generation.

Run all tests:
```bash
cd backend
npm test
```

---

## 7. Production Deployment (Docker Compose)

For production deployment with PostgreSQL 16 and Redis:
```bash
docker-compose up --build -d
```
The frontend will be served on port `80` with Nginx reverse proxying `/api` traffic to the backend on port `5000`.

---

## 8. Definition of Done Checklist

- [x] Separate Frontend (Vite + React + TS + Tailwind) and Backend (Express + Prisma + Node.js).
- [x] Authentication & RBAC strictly enforced server-side.
- [x] Multi-tenancy with strict organization and team isolation.
- [x] Code submission engine with secret sanitization (zero password/key leaks).
- [x] Deterministic static analysis heuristics with Gemini 3.8 Flash AI engine.
- [x] Semantic mistake fingerprinting (`<language>:<category>:<pattern>`).
- [x] 5-Layer memory architecture with Hindsight Vectorize adapter and retry queue.
- [x] Human feedback loop for Team Leads (Confirm, Reject, Resolve).
- [x] Individual, Team Lead, and Executive Management dashboards.
- [x] Automated report generation compiling all 8 required sections.
- [x] Narrow AI assistant with off-topic guardrails and anti-hallucination rules.
- [x] Responsive layout (320px mobile to 1920px desktop).
- [x] Comprehensive automated test suites passing.
