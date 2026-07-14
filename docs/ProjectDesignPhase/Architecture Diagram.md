# Architecture Diagram

## Project Title

AI Powered Debt Relief and Financial Recovery Platform

## Architecture

```
               User
                 |
                 |
        React Frontend
(Login, Dashboard, Charts)
                 |
          REST API (Axios)
                 |
           FastAPI Backend
                 |
      ----------------------
      |                    |
SQLite Database      AI Recommendation
      |                    |
      ----------------------
                 |
          Financial Results
                 |
         React Dashboard
```

## Components

### Frontend
- React
- Vite
- Chart.js
- Axios

### Backend
- FastAPI
- Python

### Database
- SQLite

### AI Module
- Financial Analysis
- Recommendation Engine

## Conclusion

The architecture follows a client-server model where React communicates with FastAPI APIs and stores information in SQLite while generating AI recommendations.