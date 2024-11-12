import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../utils/AuthService";

const Login = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!role) {
      alert("Please select a role to continue");
      return;
    }
    AuthService.login(role); // Mock login
    switch (role) {
      case "Admin":
        navigate("/admin");
        break;
      case "StationMaster":
        navigate("/station-master");
        break;
      case "MaintenanceEmployee":
        navigate("/maintenance");
        break;
      default:
        alert("Invalid role selected");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Login Page</h2>
      <div>
        <label>
          <input
            type="radio"
            value="Admin"
            checked={role === "Admin"}
            onChange={(e) => setRole(e.target.value)}
          />
          Login as Admin (Developer)
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="StationMaster"
            checked={role === "StationMaster"}
            onChange={(e) => setRole(e.target.value)}
          />
          Login as Station Master
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="MaintenanceEmployee"
            checked={role === "MaintenanceEmployee"}
            onChange={(e) => setRole(e.target.value)}
          />
          Login as Maintenance Employee
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
