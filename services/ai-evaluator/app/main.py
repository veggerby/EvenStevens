from fastapi import FastAPI, HTTPException, Request
from app.routes import parity

app = FastAPI()
app.include_router(parity.router)
