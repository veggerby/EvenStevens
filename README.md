# 🧠 EvenStevens™

> _The world's most overengineered, AI-powered, event-sourced, distributed parity detection system._

> ⚠️ **Disclaimer**
> Portions of this project, including code and architectural patterns, were generated with the assistance of AI models (e.g., OpenAI's GPT-4 and GitHub Copilot). While reviewed and modified by humans, this repository reflects a hybrid of automated and manual authorship.
> This project is intentionally and unapologetically overengineered — it is meant as a joke, parodying enterprise architectures by taking a simple task (checking if a number is even) and turning it into an infrastructure-heavy, AI-driven microservice extravaganza.


![License](https://img.shields.io/badge/license-MIT-green)
![Build](https://img.shields.io/github/actions/workflow/status/your-org/evenstevens/ci.yml)
![GPT-Verified](https://img.shields.io/badge/evenness-GPT--Certified-blue)
![MadeWithLove](https://img.shields.io/badge/made%20with-overengineering-red)

---

## 📣 Why?

You could write this in one line:

```ts
const isEven = (n) => n % 2 === 0;
````

But where’s the **fun**, **complexity**, and **infrastructure budget burn** in that?

**EvenStevens™** turns this trivial operation into a fully distributed, AI-driven, event-sourced architectural masterpiece featuring:

* Command Query Responsibility Segregation (CQRS)
* Event Sourcing with Kafka
* GPT-4 as the ultimate parity oracle
* GraphQL and gRPC interfaces
* Polyglot microservices (Node.js, Python, Go)
* Redis, MongoDB, and Postgres (for no good reason)
* Blockchain-ready audit logging
* Full CI/CD pipeline, monitoring, and service mesh

---

## 🚀 What It Does

> You give it a number. It asks GPT-4 if it’s even. Then it stores that answer in five places. Then you can query it again. Beautiful.

---

## 🏗️ Architecture

See [`/docs/architecture.md`](./docs/architecture.md) for full documentation

---

## 🧪 Quickstart (Dev)

### 🐳 Prerequisites

* Docker + Docker Compose
* Node.js (LTS)
* Python 3.10+
* Go 1.21+
* OpenAI API key (`OPENAI_API_KEY` in `.env`)

### 🛠️ Run It All Locally

```bash
git clone https://github.com/your-org/evenstevens.git
cd evenstevens

# Spin up microservices, Kafka, Redis, DBs
docker-compose up --build
```

---

## 💡 Usage

### 1. Submit a Number

```graphql
mutation {
  evaluateIsEven(number: 42)
}
```

### 2. Retrieve the Result

```graphql
query {
  parityOf(number: 42) {
    isEven
    evaluatedBy
    timestamp
    rawAiResponse
  }
}
```

Or via gRPC:

```bash
grpcurl -d '{"number":42}' localhost:50051 parity.ParityService/GetParity
```

---

## 🧬 Tech Stack

| Layer         | Tech                            |
| ------------- | ------------------------------- |
| Frontend      | React + Apollo GraphQL          |
| Gateway       | GraphQL + Express (Node.js)     |
| Command Side  | Kafka, Node.js                  |
| AI Service    | Python + FastAPI + OpenAI GPT-4 |
| Event Store   | Kafka + MongoDB                 |
| Query Service | Go + Redis/Postgres + gRPC      |
| CI/CD         | GitHub Actions + ArgoCD         |
| Monitoring    | Prometheus + Grafana            |

---

## 🧠 AI Prompt Example

The system sends this to GPT-4:

> *"Please determine if the number 42 is even or odd, and explain why in natural language."*

GPT-4 returns something like:

> *"42 is even because it is divisible by 2 with no remainder."*

That response is then parsed, logged, and legally notarized in a blockchain ledger.\*

\* *feature not yet implemented, but we act like it is.*

---

## 🤖 Contributing

This is an **open-source parody** project—but contributions are welcome, especially in the form of:

* More unnecessary microservices
* Alternate parity evaluation strategies (quantum? Tarot?)
* Kubernetes Helm charts
* Terraform deployments to multiple clouds simultaneously

PRs must pass the **no-modulo linter** (`no_modulo.yaml`), ensuring no one cheats with `%`.

---

## 🧯 FAQ

### Q: Why use GPT-4 for checking evenness?

A: Because AI alignment isn’t expensive enough yet.

### Q: Is this serious?

A: No. But it's also kind of brilliant.

### Q: What if GPT is wrong?

A: That’s why we built a Kafka-based reconciliation system. Duh.

---

## 📄 License

MIT – free to fork, free to waste compute.

---

## 💌 Acknowledgements

* OpenAI for indulging us
* The CQRS community for not suing us
* Everyone who didn't use `%` to solve this problem
