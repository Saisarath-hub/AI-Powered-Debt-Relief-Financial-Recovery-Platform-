import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const today = new Date().toLocaleDateString();

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "15px 25px",
        borderRadius: "10px",
        marginBottom: "25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            color: "#1E3A8A",
          }}
        >
          AI Powered Debt Relief Platform
        </h2>

        <p
          style={{
            margin: "5px 0 0 0",
            color: "gray",
            fontSize: "14px",
          }}
        >
          Financial Recovery Dashboard
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div
          style={{
            textAlign: "right",
          }}
        >
          <h4
            style={{
              margin: 0,
            }}
          >
            Welcome
          </h4>

          <small>{today}</small>
        </div>

        <FaUserCircle
          size={40}
          color="#1E3A8A"
        />
      </div>
    </div>
  );
}

export default Navbar;