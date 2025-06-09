# Makefile
.PHONY: lint test build up down

lint:
	docker compose run --rm api-gateway npm run lint
	docker compose run --rm command-handler npm run lint
	docker compose run --rm ai-evaluator flake8 app/
	docker compose run --rm projector golangci-lint run
	docker compose run --rm query-api golangci-lint run
	docker compose run --rm frontend npm run lint
	echo "No modulo linter engaged. If you used %, you failed."

test:
	docker compose run --rm api-gateway npm test
	docker compose run --rm command-handler npm test
	docker compose run --rm ai-evaluator pytest
	docker compose run --rm projector go test ./...
	docker compose run --rm query-api go test ./...
	docker compose run --rm frontend npm test

build:
	docker compose build

up:
	docker compose up --build

down:
	docker compose down
