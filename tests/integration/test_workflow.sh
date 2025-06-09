#!/bin/bash
# Integration test workflow for EvenStevens™
set -e

echo "[TEST] Submitting number 42 via GraphQL mutation..."
curl -s -X POST http://localhost:4000/graphql \
  -H 'Content-Type: application/json' \
  -d '{"query": "mutation { evaluateIsEven(number: 42) }"}'

sleep 2

echo "[TEST] Querying parity result for 42..."
curl -s -X POST http://localhost:4000/graphql \
  -H 'Content-Type: application/json' \
  -d '{"query": "query { parityOf(number: 42) { isEven, evaluatedBy, rawAiResponse } }"}'

echo "[TEST] If this worked, Kafka, GPT-4, and five databases just checked if 42 is even."
