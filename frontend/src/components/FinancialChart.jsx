import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function FinancialChart({ income, expenses, debt }) {
  const data = {
    labels: ["Income", "Expenses", "Debt"],
    datasets: [
      {
        label: "Financial Overview",
        data: [
          Number(income || 0),
          Number(expenses || 0),
          Number(debt || 0),
        ],
        backgroundColor: [
          "#22C55E",
          "#F59E0B",
          "#EF4444",
        ],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Financial Analysis",
      },
    },
  };

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
}

export default FinancialChart;