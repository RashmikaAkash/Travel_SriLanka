import React, { useState } from "react";

function Levy(){

    const [amount, setAmount] = useState("");
      const [levy, setLevy] = useState(null);
    
      const calculateLevy = () => {
        if (isNaN(amount) || amount <= 0) {
          alert("Please enter a valid amount.");
          return;
        }
        const levyRate = 0.02; // Example: 2% Tourism Development Levy
        setLevy(amount * levyRate);
      };

    return (
        <div
        style={{
          margin: "40px auto",
          maxWidth: "600px",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "1.8rem", color: "#333", marginBottom: "15px" }}>
          Tourism Development Levy Calculator
        </h3>
        <p style={{ color: "#555", marginBottom: "20px" }}>
          Calculate the 2% Tourism Development Levy (TDL) for your business or activity.
        </p>
        <input
          type="number"
          placeholder="Enter amount (LKR)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "1rem",
            width: "calc(100% - 40px)",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "15px",
          }}
        />
        <br />
        <button
          onClick={calculateLevy}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#007BFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
        >
          Calculate Levy
        </button>
        {levy !== null && (
          <p style={{ marginTop: "15px", fontSize: "1.2rem", color: "#333" }}>
            Tourism Development Levy: <strong>LKR {levy.toFixed(2)}</strong>
          </p>
        )}
      </div>
    )
}

export default Levy;