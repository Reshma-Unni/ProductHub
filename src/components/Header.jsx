import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Header() {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null); // clear user from context
    navigate("/login");
  };

  return (
    <header className="bg-dark py-3 text-white">
      <Container className="d-flex justify-content-end align-items-center">
        <div className="me-3">
          {user ? `Logged in as ${user.username}` : "Not logged in"}
        </div>
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </header>
  );
}
