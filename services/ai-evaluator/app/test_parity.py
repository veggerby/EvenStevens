import pytest
from app.services.gpt_client import ask_gpt_for_parity
import asyncio

def test_ai_returns_even(monkeypatch):
    async def mock_gpt(number):
        return {"isEven": True, "rawAiResponse": "Definitely even. Trust me, I'm an AI."}
    monkeypatch.setattr("app.services.gpt_client.ask_gpt_for_parity", mock_gpt)
    result = asyncio.run(ask_gpt_for_parity(2))
    assert result["isEven"] is True
    assert "even" in result["rawAiResponse"].lower()

def test_no_modulo_linter():
    from shared.utils.noModuloLinter import noModuloLinter
    import pytest
    with pytest.raises(Exception):
        noModuloLinter("x = 42 % 2")
