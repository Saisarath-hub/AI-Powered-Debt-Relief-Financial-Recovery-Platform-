from sqlalchemy.orm import Session
import models
import schemas


def create_financial(db: Session, financial: schemas.FinancialCreate):
    db_record = models.FinancialRecord(
        monthly_income=financial.monthly_income,
        monthly_expenses=financial.monthly_expenses,
        total_debt=financial.total_debt,
        credit_score=financial.credit_score,
    )

    db.add(db_record)
    db.commit()
    db.refresh(db_record)

    return db_record


def get_financials(db: Session):
    return db.query(models.FinancialRecord).all()