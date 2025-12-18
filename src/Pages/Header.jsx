import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div
      className="py-3"
      style={{ backgroundColor: "#020d35ff", color: "white" }}
    >
      <div className="container d-flex justify-content-end align-items-center">
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
