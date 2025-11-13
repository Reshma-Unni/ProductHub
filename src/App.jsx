
import React from "react";
import Login from "./Pages/Login";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  // return <Login/>
  // return  <Footer/>
  // return <Header/>
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>

  )

}

export default App;
