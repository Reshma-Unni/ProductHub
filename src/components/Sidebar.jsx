import { FaBoxOpen, FaShoppingCart, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className="text-white min-vh-100 p-3 d-flex flex-column align-items-center"
      style={{
        width: "260px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/src/assets/Image-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h4 className="fw-bold mb-4 text-center border-bottom w-100 pb-3">
        🛒 ProductHub
      </h4>

      {/* PRODUCTS */}
      <NavLink
        to="/product-hub/dashboard/products"
        className={({ isActive }) =>
          `btn w-100 d-flex justify-content-center gap-2 mb-2 ${
            isActive ? "btn-light text-dark" : "btn-outline-light"
          }`
        }
      >
        <FaBoxOpen /> Products
      </NavLink>

      {/* ADD PRODUCT */}
      <NavLink
        to="/addproduct"
        className={({ isActive }) =>
          `btn w-100 d-flex justify-content-center gap-2 mb-2 ${
            isActive ? "btn-light text-dark" : "btn-outline-light"
          }`
        }
      >
        <FaPlus /> Add Product
      </NavLink>

      {/* CART */}
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `btn w-100 d-flex justify-content-center gap-2 mb-2 ${
            isActive ? "btn-light text-dark" : "btn-outline-light"
          }`
        }
      >
        <FaShoppingCart /> Cart
      </NavLink>

      <div className="flex-grow-1" />
    </div>
  );
}
