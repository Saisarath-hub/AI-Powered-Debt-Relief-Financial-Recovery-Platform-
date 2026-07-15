import { useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FinancialChart from "../components/FinancialChart";

function Dashboard() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [debt, setDebt] = useState("");
  const [creditScore, setCreditScore] = useState("");

  const savings =
    income && expenses ? Number(income) - Number(expenses) : 0;

  const debtRatio =
    income && debt
      ? ((Number(debt) / Number(income)) * 100).toFixed(2)
      : 0;

  const financialHealth =
    Number(debtRatio) > 100
      ? "High Debt Risk"
      : Number(debtRatio) > 50
      ? "Moderate"
      : "Healthy";

  const emi = debt ? Math.round(Number(debt) / 24) : 0;

  const settlement = debt ? Math.round(Number(debt) * 0.75) : 0;

  const advice =
    Number(debtRatio) > 100
      ? "Reduce unnecessary expenses, avoid taking new loans and negotiate with lenders."
      : Number(debtRatio) > 50
      ? "Control monthly expenses and increase savings."
      : "Your financial condition looks good. Continue saving regularly.";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/financial", {
        monthly_income: Number(income),
        monthly_expenses: Number(expenses),
        total_debt: Number(debt),
        credit_score: Number(creditScore),
      });

      console.log(response.data);
      alert("Financial Details Saved Successfully!");
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("Unable to connect to backend.");
      }
    }
  };

  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "250px",
          minHeight: "100vh",
          background: "#f4f6f9",
          padding: "25px",
        }}
      >
        <Navbar />

        <h1
          style={{
            color: "#2563eb",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          AI Powered Debt Relief Platform
        </h1>

        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "430px",
              background: "white",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Financial Details</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="number"
                placeholder="Monthly Income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                style={inputStyle}
                required
              />

              <input
                type="number"
                placeholder="Monthly Expenses"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
                style={inputStyle}
                required
              />

              <input
                type="number"
                placeholder="Total Debt"
                value={debt}
                onChange={(e) => setDebt(e.target.value)}
                style={inputStyle}
                required
              />

              <input
                type="number"
                placeholder="Credit Score"
                value={creditScore}
                onChange={(e) => setCreditScore(e.target.value)}
                style={inputStyle}
                required
              />

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Save Details
              </button>
            </form>
          </div>
                    <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              minWidth: "420px",
            }}
          >
            {/* Financial Summary */}

            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h2>Financial Summary</h2>

              <hr />

              <p><strong>Monthly Income:</strong> ₹{income || 0}</p>

              <p><strong>Monthly Expenses:</strong> ₹{expenses || 0}</p>

              <p><strong>Monthly Savings:</strong> ₹{savings}</p>

              <p><strong>Total Debt:</strong> ₹{debt || 0}</p>

              <p><strong>Debt Ratio:</strong> {debtRatio}%</p>

              <p><strong>Credit Score:</strong> {creditScore || "-"}</p>
            </div>

            {/* AI Recommendation */}

            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h2>🤖 AI Recommendation</h2>

              <hr />

              <p>
                <strong>Financial Health:</strong> {financialHealth}
              </p>

              <p>
                <strong>Suggested EMI:</strong> ₹{emi}
              </p>

              <p>
                <strong>Estimated Settlement:</strong> ₹{settlement}
              </p>

              <div
                style={{
                  background: "#eef5ff",
                  padding: "12px",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              >
                <strong>AI Advice:</strong>
                <br />
                {advice}
              </div>
            </div>

            {/* Chart */}

            <FinancialChart
              income={income}
              expenses={expenses}
              debt={debt}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  fontSize: "15px",
  outline: "none",
};

export default Dashboard;