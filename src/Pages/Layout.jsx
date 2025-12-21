import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Right side */}
      <div className="d-flex flex-column flex-grow-1 bg-white overflow-auto">
        <Header />

        {/* Content */}
        <div className="flex-grow-1 p-3">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
}
