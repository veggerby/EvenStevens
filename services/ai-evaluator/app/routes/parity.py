from fastapi import APIRouter, Request
from app.services.gpt_client import ask_gpt_for_parity
import os

router = APIRouter()

@router.post("/evaluate")
async def evaluate_parity(request: Request):
    data = await request.json()
    number = data.get("number")
    if number is None:
        return {"error": "Missing number"}
    # Call GPT-4 for the ultimate truth
    result = await ask_gpt_for_parity(number)
    return result
