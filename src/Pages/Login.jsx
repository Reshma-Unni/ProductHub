import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "resh" && password === "143") {
      // alert("Login Successful");
      navigate("/products");
    } else {
      alert("Invalid Cred");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="p-4 rounded shadow"
        style={{ backgroundColor: "#222", width: "320px" }}
      >
        <h2 className="text-center mb-4 text-white">Login</h2>
        <div className="mb-3">
          <label className="form-label text-light">UserName</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label text-light">Password</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button type="button" class="btn btn-primary" onClick={handleLogin}>
          Submit
        </button>
      </div>
    </div>
  );
}
