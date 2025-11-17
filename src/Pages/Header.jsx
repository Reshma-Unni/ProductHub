import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Header() {
  const navigate = useNavigate();

  const handleSearch = () => {
    alert("Search");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <button className="btn btn-primary" onClick={handleSearch}>
          Search Product
        </button>

        {/* <button className="btn btn-danger" onClick={handleLogout}>
          LogOut
        </button> */}
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
