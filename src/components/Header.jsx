import { useNavigate } from "react-router-dom";
import { Button, Container, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <Navbar
      variant="dark"
      // className="shadow px-3"
      className="text-white py-4 mt-auto"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/src/assets/Image-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container fluid className="justify-content-end">
        {/* RIGHT — USER INFO */}
        <div className="d-flex align-items-center gap-3 text-white">
          <span className="d-flex align-items-center gap-2">
            <FaUserCircle size={22} />
            <span className="fw-semibold">
              {user ? user.username : "Guest"}
            </span>
          </span>

          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}
