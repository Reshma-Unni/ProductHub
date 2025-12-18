import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditProd() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    brand: "",
    category: "",
    price: "",
    weight: "",
    stock: "",
    warrantyInformation: "",
    rating: "",
    shippingInformation: "",
    returnPolicy: "",
  });

  // Fetch product data by ID
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  console.log(product);

  // Update input fields
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Submit edited data
  const handleSubmit = () => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Product Updated Successfully!");
      });
  };

  return (
    <div className="container mt-4">
      <h3>Edit Product</h3>

      <label>Title</label>
      <input
        className="form-control"
        name="title"
        value={product.title}
        onChange={handleChange}
      />

      <label className="mt-3">Brand</label>
      <input
        className="form-control"
        name="brand"
        value={product.brand}
        onChange={handleChange}
      />

      <label className="mt-3">Category</label>
      <input
        className="form-control"
        name="category"
        value={product.category}
        onChange={handleChange}
      />

      <label className="mt-3">Price</label>
      <input
        type="number"
        className="form-control"
        name="price"
        value={product.price}
        onChange={handleChange}
      />

      <label className="mt-3">Weight</label>
      <input
        type="number"
        className="form-control"
        name="weight"
        value={product.weight}
        onChange={handleChange}
      />

      <label className="mt-3">Stock</label>
      <input
        type="number"
        className="form-control"
        name="stock"
        value={product.stock}
        onChange={handleChange}
      />
      <label className="mt-3">Warranty</label>
      <input
        type="text"
        className="form-control"
        name="warrantyInformation"
        value={product.warrantyInformation}
        onChange={handleChange}
      />
      <label className="mt-3">Rating</label>
      <input
        type="number"
        className="form-control"
        name="rating"
        value={product.rating}
        onChange={handleChange}
      />
      <label className="mt-3">Shipping</label>
      <input
        type="text"
        className="form-control"
        name="shippingInformation"
        value={product.shippingInformation}
        onChange={handleChange}
      />
      <label className="mt-3">ReturnPolicy</label>
      <input
        type="text"
        className="form-control"
        name="returnPolicy"
        value={product.returnPolicy}
        onChange={handleChange}
      />

      <button className="btn btn-success mt-4" onClick={handleSubmit}>
        Save Changes
      </button>

      <button
        className="btn btn-secondary mt-4 ms-2"
        onClick={() => navigate(`/product/${id}`)}
      >
        Cancel
      </button>
    </div>
  );
}
