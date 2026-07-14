# Sequence Diagram

## Project Title

AI Powered Debt Relief and Financial Recovery Platform

## Objective

The Sequence Diagram shows how the frontend, backend, database, and AI module interact when a user submits financial information.

## Sequence Diagram

```
User
 |
 | Login
 v
Frontend (React)
 |
 | Open Dashboard
 |
 | Enter Financial Details
 |
 | Click Save
 v
FastAPI Backend
 |
 | Validate Data
 |
 | Store Financial Record
 v
SQLite Database
 |
 | Data Saved
 |
 +----------------------+
                        |
                        v
               AI Recommendation Module
                        |
            Calculate Savings
            Calculate Debt Ratio
            Calculate EMI
            Calculate Settlement
            Generate Recommendation
                        |
                        v
                FastAPI Backend
                        |
                 Send Response
                        |
                        v
               Frontend Dashboard
                        |
         Display Summary & Charts
                        |
                        v
                     User
```

## Description

1. The user logs into the application.
2. The user enters monthly income, expenses, debt, and credit score.
3. The React frontend sends the information to the FastAPI backend.
4. The backend validates the request.
5. The financial data is stored in the SQLite database.
6. The AI module performs financial analysis.
7. The backend returns the financial summary and AI recommendations.
8. The frontend displays charts, financial metrics, and AI advice.

## Components

- User
- React Frontend
- FastAPI Backend
- SQLite Database
- AI Recommendation Module

## Conclusion

The Sequence Diagram illustrates the communication between all system components and explains how financial data is processed to generate AI-based recommendations.