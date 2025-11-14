import React from "react";
import Login from "./Pages/Login";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";

function App() {
  // return <Login/>
  // return  <Footer/>
  // return <Header/>
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
