from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import schemas
import crud

from database import Base, engine, SessionLocal

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Powered Debt Relief Platform")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home():
    return {"message": "Welcome to AI Powered Debt Relief Platform"}


@app.post("/financial")
def save_financial(
    financial: schemas.FinancialCreate,
    db: Session = Depends(get_db)
):
    saved = crud.create_financial(db, financial)

    return {
        "message": "Financial Details Saved Successfully",
        "data": {
            "id": saved.id,
            "monthly_income": saved.monthly_income,
            "monthly_expenses": saved.monthly_expenses,
            "total_debt": saved.total_debt,
            "credit_score": saved.credit_score,
        },
    }

@app.get("/financials")
def get_financials(db: Session = Depends(get_db)):
    return crud.get_financials(db)