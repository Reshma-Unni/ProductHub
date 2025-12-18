import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "./Pages/Login";
import Products from "./Pages/Products";

import View from "./Pages/ViewProd";
import Layout from "./Pages/Layout";
import EditProduct from "./Pages/EditProd";
// import AddProd from "./Pages/AddProd";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          {/* <Route path="/product/addprod" element={<AddProd />} /> */}
          <Route path="/product/:id" element={<View />} />
          <Route
            path="/product-hub/dashboard/products"
            element={<Products />}
          />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}
