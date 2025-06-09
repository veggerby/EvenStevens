# Vault integration stub for fetching secrets
import os

def get_secret(secret_name):
    # In a real system, this would query HashiCorp Vault
    print(f"[VAULT] Fetching secret: {secret_name}")
    return os.environ.get(secret_name, "stub-secret")
