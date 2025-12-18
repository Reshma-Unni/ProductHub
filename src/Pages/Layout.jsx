import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />
      {/* Right side (Header + Content + Footer) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "white",
          overflowY: "auto",
        }}
      >
        <Header />

        {/* Content area */}
        <div style={{ flexGrow: 1, padding: "20px" }}>
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
}
