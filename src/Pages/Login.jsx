import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "resh" && password === "143") {
      navigate("/product-hub/dashboard/products");
    } else {
      toggleShowA();
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
      <ToastContainer className="p-3" position="top-end" style={{ zIndex: 1 }}>
        <Toast show={showA} onClose={toggleShowA} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>Invalid Credentials</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
