## 📁 `evenstevens/` — Monorepo Root Structure

```plaintext
evenstevens/
├── README.md
├── .env.example
├── docker-compose.yml
├── Makefile
├── .gitignore
├── docs/
│   ├── ARCHITECTURE.md
│   ├── images/
│   │   └── evenstevens-architecture.png
├── infra/
│   ├── helm/
│   ├── k8s/
│   └── terraform/
├── services/
│   ├── api-gateway/           # GraphQL API (Node.js)
│   ├── command-handler/       # Kafka consumer + event emitter (Node.js)
│   ├── ai-evaluator/          # GPT-4 Service (Python)
│   ├── event-store/           # MongoDB + Kafka config
│   ├── projector/             # Kafka consumer for read model (Go)
│   ├── query-api/             # gRPC read interface (Go)
│   ├── frontend/              # React + Apollo client
├── shared/
│   ├── proto/                 # gRPC proto definitions
│   ├── schemas/               # JSON/event schemas
│   └── utils/                 # Shared utils/helpers
└── tests/
    ├── integration/
    └── load/
```

---

### 🧩 `/services/api-gateway/` – GraphQL Server (Node.js + Apollo)

```plaintext
api-gateway/
├── src/
│   ├── index.ts
│   ├── schema.graphql
│   ├── resolvers/
│   │   └── parityResolver.ts
│   └── kafka/
│       └── producer.ts
├── package.json
├── tsconfig.json
└── Dockerfile
```

**Sample `index.ts`:**

```ts
import { ApolloServer } from 'apollo-server';
import typeDefs from './schema.graphql';
import { resolvers } from './resolvers/parityResolver';

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀 API ready at ${url}`);
});
```

---

### 🤖 `/services/ai-evaluator/` – GPT-4 Evaluator (Python + FastAPI)

```plaintext
ai-evaluator/
├── app/
│   ├── main.py
│   ├── routes/
│   │   └── parity.py
│   └── services/
│       └── gpt_client.py
├── requirements.txt
├── Dockerfile
└── openai.env (ignored)
```

**Sample `main.py`:**

```python
from fastapi import FastAPI
from app.routes import parity

app = FastAPI()
app.include_router(parity.router)
```

---

### 📦 `/services/command-handler/` – Command Consumer (Node.js)

```plaintext
command-handler/
├── src/
│   ├── index.ts
│   ├── kafka/
│   │   └── consumer.ts
│   ├── services/
│   │   └── eventPublisher.ts
│   └── api/
│       └── aiClient.ts  # calls GPT service
├── package.json
├── tsconfig.json
└── Dockerfile
```

---

### 📊 `/services/projector/` – Read Model Updater (Go)

```plaintext
projector/
├── main.go
├── kafka/
│   └── consumer.go
├── store/
│   ├── redis.go
│   └── postgres.go
├── Dockerfile
├── go.mod
└── go.sum
```

---

### 🧠 `/services/query-api/` – gRPC Query Server (Go)

```plaintext
query-api/
├── main.go
├── proto/
│   └── parity.proto
├── server/
│   └── parity.go
├── Dockerfile
├── go.mod
└── go.sum
```

---

### 🎨 `/services/frontend/` – UI Client (React + Apollo)

```plaintext
frontend/
├── public/
├── src/
│   ├── App.tsx
│   ├── components/
│   │   ├── NumberInput.tsx
│   │   └── ResultDisplay.tsx
│   ├── graphql/
│   │   ├── mutations.ts
│   │   └── queries.ts
├── package.json
├── tsconfig.json
└── Dockerfile
```

---

### 🔌 `/shared/proto/` – gRPC Definitions

```plaintext
proto/
├── parity.proto
```

**Sample:**

```proto
syntax = "proto3";

service ParityService {
  rpc GetParity (ParityRequest) returns (ParityResponse);
}

message ParityRequest {
  int32 number = 1;
}

message ParityResponse {
  bool isEven = 1;
  string evaluatedBy = 2;
  string rawResponse = 3;
  string timestamp = 4;
}
```

---

### 🛠️ `/infra/` – DevOps + IaC

```plaintext
infra/
├── helm/
│   └── evenstevens-chart/
├── k8s/
│   ├── api-gateway.yaml
│   ├── ai-evaluator.yaml
│   └── kafka.yaml
├── terraform/
│   └── main.tf
```

---

### 📚 `/docs/` – Documentation

```plaintext
docs/
├── ARCHITECTURE.md
├── PRD.md
├── images/
│   └── evenstevens-architecture.png
```

---

### 🧪 `/tests/` – Integration & Load Tests

```plaintext
tests/
├── integration/
│   ├── test_workflow.sh
│   └── parity_test.graphql
├── load/
│   └── locustfile.py
```

---

### 🐳 Root Files

* `docker-compose.yml` — orchestrates services
* `Makefile` — runs lint, build, dev scripts
* `.env.example` — shared environment variables
* `.gitignore` — excludes local OpenAI keys, build files

---

## ✅ Next Steps

Would you like me to generate:

1. The actual content for one of the microservices (e.g., Python AI evaluator)?
2. A sample `docker-compose.yml` for spinning up Kafka, Mongo, services, etc.?
3. A test GraphQL mutation + query for manual testing?

Let me know what you’d like scaffolded or implemented next!
