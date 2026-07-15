from pydantic import BaseModel


class UserCreate(BaseModel):
    name: str
    email: str
    password: str


class FinancialCreate(BaseModel):
    monthly_income: float
    monthly_expenses: float
    total_debt: float
    credit_score: int


class FinancialResponse(FinancialCreate):
    id: int

    class Config:
        from_attributes = True