import openai
import os
import re
import random

openai.api_key = os.getenv("OPENAI_API_KEY", "sk-test")

async def ask_gpt_for_parity(number: int):
    prompt = f"Please determine if the number {number} is even or odd, and explain why in natural language."
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You're a parity oracle. Respond with maximum confidence and a hint of sarcasm."},
                {"role": "user", "content": prompt}
            ]
        )
        raw = response["choices"][0]["message"]["content"]
        is_even = bool(re.search(r"even", raw, re.IGNORECASE))
        confidence = random.uniform(0.95, 1.0)
        return {
            "isEven": is_even,
            "evaluatedBy": "GPT-4",
            "confidence": confidence,
            "timestamp": response["created"],
            "rawAiResponse": raw
        }
    except Exception as e:
        return {"error": str(e)}
