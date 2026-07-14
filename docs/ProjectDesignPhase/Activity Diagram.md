# Activity Diagram

## Project Title

AI Powered Debt Relief and Financial Recovery Platform

## Objective

The Activity Diagram illustrates the workflow of the application from user login to receiving AI-based financial recommendations.

## Activity Flow

```
Start
   |
   v
User Opens Website
   |
   v
Login
   |
   v
Dashboard Opens
   |
   v
Enter Financial Details
(Income, Expenses, Debt, Credit Score)
   |
   v
Click "Save Details"
   |
   v
Frontend Sends Data to FastAPI
   |
   v
Backend Validates Data
   |
   +--------No--------+
   |                  |
   |          Show Error Message
   |                  |
   |                  |
   +------Yes---------+
              |
              v
Store Data in SQLite Database
              |
              v
Calculate:
• Savings
• Debt Ratio
• EMI
• Settlement Amount
              |
              v
Generate AI Recommendation
              |
              v
Display Financial Summary
              |
              v
Display Financial Chart
              |
              v
Logout
              |
              v
End
```

## Description

The user logs into the system and enters financial information. The frontend sends the data to the FastAPI backend, where it is validated and stored in the SQLite database. Financial calculations are performed, and AI recommendations are generated. Finally, the dashboard displays the financial summary, charts, and recommendations.

## Conclusion

The Activity Diagram demonstrates the complete workflow of the AI Powered Debt Relief and Financial Recovery Platform from login to logout.