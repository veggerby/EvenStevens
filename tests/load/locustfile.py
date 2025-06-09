from locust import HttpUser, task, between
import random

class EvenStevensLoadTest(HttpUser):
    wait_time = between(1, 3)

    @task
    def submit_and_query(self):
        n = random.randint(1, 10000)
        self.client.post("/graphql", json={"query": f"mutation {{ evaluateIsEven(number: {n}) }}"})
        self.client.post("/graphql", json={"query": f"query {{ parityOf(number: {n}) {{ isEven evaluatedBy timestamp rawAiResponse }} }}"})
