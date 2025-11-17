import React from "react";
import Login from "./Pages/Login";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Products from "./Pages/Products";
import DeleteProduct from "./Pages/DeleteProduct";

function App() {
  // return <Login/>
  // return  <Footer/>
  // return <Header/>
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/delete/:id" element={<DeleteProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
