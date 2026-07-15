import {
  FaHome,
  FaMoneyBillWave,
  FaRobot,
  FaChartBar,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        background: "#1E3A8A",
        color: "white",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        AI Debt Relief
      </h2>

      <hr
        style={{
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      />

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <div style={menuStyle}>
          <FaHome />
          <span>Dashboard</span>
        </div>

        <div style={menuStyle}>
          <FaMoneyBillWave />
          <span>Financial Details</span>
        </div>

        <div style={menuStyle}>
          <FaRobot />
          <span>AI Recommendation</span>
        </div>

        <div style={menuStyle}>
          <FaChartBar />
          <span>Reports</span>
        </div>

        <div style={menuStyle}>
          <FaUser />
          <span>Profile</span>
        </div>

        <div
          style={{
            ...menuStyle,
            marginTop: "40px",
            color: "#FFD700",
          }}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

const menuStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "0.3s",
  fontSize: "16px",
};

export default Sidebar;