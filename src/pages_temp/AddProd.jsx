import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
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

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...product,
          //   price: Number(product.price),
          //   stock: Number(product.stock),
          //   weight: Number(product.weight),
          //   rating: Number(product.rating),
        }),
      });

      if (!response.ok) throw new Error("Failed to add product");

      const added = await response.json();
      console.log("Product Added:", added);
      alert(`Product added with ID: ${added.id}`);
      navigate("/product-hub/dashboard/products");
    } catch (error) {
      console.error(error);
      alert("Failed to add product. Check console.");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add New Product</h3>

      <form onSubmit={handleSubmit}>
        <label className="mt-3">Title</label>
        <input
          className="form-control"
          name="title"
          value={product.title}
          onChange={handleChange}
          required
        />

        <label className="mt-3">Description</label>
        <textarea
          className="form-control"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />

        <label className="mt-3">Brand</label>
        <input
          className="form-control"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          required
        />

        <label className="mt-3">Category</label>
        <input
          className="form-control"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />

        <label className="mt-3">Price</label>
        <input
          type="number"
          className="form-control"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
          min="0"
        />

        <label className="mt-3">Weight</label>
        <input
          type="number"
          className="form-control"
          name="weight"
          value={product.weight}
          onChange={handleChange}
          required
          min="0"
        />

        <label className="mt-3">Stock</label>
        <input
          type="number"
          className="form-control"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          required
          min="0"
        />

        <label className="mt-3">Warranty</label>
        <input
          type="text"
          className="form-control"
          name="warrantyInformation"
          value={product.warrantyInformation}
          onChange={handleChange}
          required
        />

        <label className="mt-3">Rating</label>
        <input
          type="number"
          className="form-control"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          required
          min="1"
          max="5"
        />

        <label className="mt-3">Shipping</label>
        <input
          type="text"
          className="form-control"
          name="shippingInformation"
          value={product.shippingInformation}
          onChange={handleChange}
          required
        />

        <label className="mt-3">Return Policy</label>
        <input
          type="text"
          className="form-control"
          name="returnPolicy"
          value={product.returnPolicy}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-success mt-4">
          Add Product
        </button>

        <button
          type="button"
          className="btn btn-secondary mt-4 ms-2"
          onClick={() => navigate("/product-hub/dashboard/products")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
