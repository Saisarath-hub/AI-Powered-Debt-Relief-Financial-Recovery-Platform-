                         +------------------+
                         |      User        |
                         +------------------+
                                   |
     ---------------------------------------------------------------
     |             |             |             |            |        |
     |             |             |             |            |        |
+-----------+ +--------------+ +----------------+ +---------------+ +-----------------+ +---------------+
|   Login   | | Enter Financial| | View Financial| | Get AI        | | View Financial  | | Logout        |
|           | | Details         | | Summary       | | Recommendation| | Charts & Reports| |               |
+-----------+ +--------------+ +----------------+ +---------------+ +-----------------+ +---------------+
                    |                   |                   |
                    |                   |                   |
                    +-------------------+-------------------+
                                        |
                                        |
                              +-----------------------+
                              |    FastAPI Backend    |
                              +-----------------------+
                                        |
                        --------------------------------
                        |                              |
                        |                              |
              +------------------+          +-------------------+
              | SQLite Database  |          | AI Recommendation |
              | Store Records    |          | Financial Analysis|
              +------------------+          +-------------------+
              # Use Case Diagram

## Project Title

AI Powered Debt Relief and Financial Recovery Platform

## Actor

User

## Description

The user logs into the application and enters financial details such as monthly income, monthly expenses, total debt, and credit score. The backend processes the information, stores it in the SQLite database, performs financial analysis, and generates AI-based recommendations. The user can also view financial summaries, charts, reports, and securely log out of the system.

## Use Cases

- Login
- Enter Financial Details
- View Financial Summary
- Get AI Recommendation
- View Financial Charts
- View Reports
- Logout

## Conclusion

The Use Case Diagram illustrates the interaction between the user and the AI Powered Debt Relief Platform, showing how financial data flows through the backend and AI recommendation system.