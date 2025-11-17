import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Products from "./Pages/Products";

function App() {
  // return <Login/>
  // return  <Footer/>
  // return <Header/>
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/delete/:id" element={<DeleteProduct />} /> */}
        <Route path="/product-hub/dashboard" element={<Home />}>
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
