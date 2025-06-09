import pytest
from app.services.gpt_client import ask_gpt_for_parity
import asyncio

@pytest.mark.asyncio
def test_ai_returns_even(monkeypatch):
    async def mock_gpt(number):
        return {"isEven": True, "rawAiResponse": "Definitely even. Trust me, I'm an AI."}
    monkeypatch.setattr("app.services.gpt_client.ask_gpt_for_parity", mock_gpt)
    result = asyncio.run(ask_gpt_for_parity(2))
    assert result["isEven"] is True
    assert "even" in result["rawAiResponse"].lower()

def test_no_modulo_linter():
    # This test is a placeholder: JS linter is tested in Node, not Python.
    # If you want to test the JS linter from Python, use subprocess to call node.
    import subprocess
    result = subprocess.run([
        "node", "../../shared/utils/noModuloLinter.js"],
        input=b"x = 42 % 2",
        capture_output=True
    )
    assert b"Modulo operator (%) detected" in result.stderr or b"Modulo operator (%) detected" in result.stdout
