import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Login from "./Pages/Login";
import Products from "./Pages/Products";
import View from "./Pages/ViewProd";
import Layout from "./pages/Layout";
import EditProduct from "./pages/EditProd";
import AddProduct from "./pages/AddProd";
import UserProvider from "./context/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />

          <Route element={<Layout />}>
            <Route
              path="/product-hub/dashboard/products/:id"
              element={<View />}
            />
            <Route
              path="/product-hub/dashboard/products"
              element={<Products />}
            />
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/addproduct" element={<AddProduct />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}
