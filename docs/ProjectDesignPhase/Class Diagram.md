# Class Diagram

## Project Title

AI Powered Debt Relief and Financial Recovery Platform

## Objective

The Class Diagram represents the classes, attributes, and relationships used in the project.

## Class Diagram

```
+----------------+
|      User      |
+----------------+
| id             |
| name           |
| email          |
| password       |
+----------------+

        |
        | creates
        |
        V

+-------------------------+
|   FinancialRecord       |
+-------------------------+
| id                      |
| monthly_income          |
| monthly_expenses        |
| total_debt              |
| credit_score            |
+-------------------------+

        |
        | analyzed by
        |
        V

+-------------------------+
| AIRecommendation        |
+-------------------------+
| calculateSavings()      |
| calculateDebtRatio()    |
| calculateEMI()          |
| calculateSettlement()   |
| generateAdvice()        |
+-------------------------+
```

## Classes

### User
- id
- name
- email
- password

### FinancialRecord
- monthly_income
- monthly_expenses
- total_debt
- credit_score

### AIRecommendation
- Savings Calculation
- Debt Ratio Calculation
- EMI Calculation
- Settlement Calculation
- AI Advice Generation

## Conclusion

The Class Diagram shows how the User, Financial Record, and AI Recommendation modules interact within the application.