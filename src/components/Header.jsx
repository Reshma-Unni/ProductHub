import { useNavigate } from "react-router-dom";
import { Button, Container, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FaUserCircle } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);

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
        <div className="d-flex align-items-center gap-3 text-white">
          <span className="d-flex align-items-center gap-2">
            <div
              className="position-relative d-flex align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart size={22} />

              {cartItems.length > 0 && (
                <span
                  className="position-absolute top-0 end-0 badge rounded-pill bg-danger"
                  style={{
                    fontSize: "0.6rem",
                    padding: "4px 6px",
                    transform: "translate(40%, -40%)",
                  }}
                >
                  {cartItems.length}
                </span>
              )}

              <span className="ms-1 fw-semibold text-white">Cart</span>
            </div>

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
