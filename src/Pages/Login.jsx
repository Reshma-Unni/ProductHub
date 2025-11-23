// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Toast from "react-bootstrap/Toast";
// import ToastContainer from "react-bootstrap/ToastContainer";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showA, setShowA] = useState(false);
//   const toggleShowA = () => setShowA(!showA);
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (username === "resh" && password === "143") {
//       navigate("/product-hub/dashboard/products");
//     } else {
//       toggleShowA();
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div
//         className="p-4 rounded shadow"
//         style={{ backgroundColor: "#222", width: "320px" }}
//       >
//         <h2 className="text-center mb-4 text-white">Login</h2>
//         <div className="mb-3">
//           <label className="form-label text-light">UserName</label>
//           <input
//             type="text"
//             id="username"
//             className="form-control"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           ></input>
//         </div>

//         <div className="mb-3">
//           <label className="form-label text-light">Password</label>
//           <input
//             type="text"
//             id="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           ></input>
//         </div>

//         <button type="button" class="btn btn-primary" onClick={handleLogin}>
//           Submit
//         </button>
//       </div>
//       <ToastContainer className="p-3" position="top-end" style={{ zIndex: 1 }}>
//         <Toast show={showA} onClose={toggleShowA} delay={3000} autohide>
//           <Toast.Header>
//             <img
//               src="holder.js/20x20?text=%20"
//               className="rounded me-2"
//               alt=""
//             />
//             <strong className="me-auto">Error</strong>
//           </Toast.Header>
//           <Toast.Body>Invalid Credentials</Toast.Body>
//         </Toast>
//       </ToastContainer>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function LoginPage() {
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
    <Container fluid className="p-0">
      <Row>
        {/* LEFT SIDE */}
        <Col sm={6} className="p-5">
          <div className="d-flex flex-row pt-4">
            <i
              className="bi bi-cup-hot-fill fs-1 me-3"
              style={{ color: "#709085" }}
            ></i>
          </div>

          <div className="d-flex flex-column justify-content-center w-75 pt-4">
            <h3
              className="fw-normal mb-3 ps-3 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              <strong>Login</strong>
            </h3>

            <Form.Group className="mb-4 ps-3 pe-3">
              <Form.Label> UserName</Form.Label>
              <Form.Control
                type="username"
                size="lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4 ps-3 pe-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                variant="dark"
                size="lg"
                className="mb-3 mx-3 w-75"
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>

            {/* <p className="small mb-3 ps-3">
              <a href="#!" className="text-muted">
                Forgot password?
              </a>
            </p> */}
            <p className="ps-3">
              Don't have an account?{" "}
              <a href="#!" className="link-info">
                Register here
              </a>
            </p>
          </div>
        </Col>

        <Col sm={6} className="d-none d-sm-block p-0">
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
              alt="beauty"
              className="w-100"
              style={{
                height: "100vh",
                objectPosition: "right",
                objectFit: "cover",
              }}
            />
          </div>
        </Col>
      </Row>
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
    </Container>
  );
}
