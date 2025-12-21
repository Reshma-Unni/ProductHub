import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

export default function ViewProd() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container mt-5">
      <Card className="p-4 shadow-lg border-0">
        <Row>
          {/* LEFT SECTION — IMAGE */}
          <Col md={5} className="text-center border-end">
            <img
              src={product.thumbnail}
              //   alt={product.title}
              className="img-fluid rounded"
              style={{ maxHeight: "350px" }}
            />

            {/* Flipkart buttons */}
            <div className="mt-4 d-flex gap-3 justify-content-center">
              <Button variant="warning" size="lg">
                Add to Cart
              </Button>
            </div>
          </Col>

          {/* RIGHT SECTION — DETAILS */}
          <Col md={7} className="px-4">
            <h3 className="fw-bold">{product.title}</h3>
            <p className="text-muted">{product.description}</p>

            {/* Rating */}
            <div className="d-flex align-items-center">
              <span className="bg-success text-white px-2 py-1 rounded small">
                {product.rating} <FaStar className="ms-1" />
              </span>
            </div>

            <hr />

            {/* Flipkart Price Design */}
            <h2 className="text-success fw-bold">₹{product.price * 80}</h2>
            <p className="text-muted">
              MRP: <del>₹{product.price * 90}</del> &nbsp;
              <span className="text-danger fw-bold">
                {product.discountPercentage}% OFF
              </span>
            </p>

            <hr />

            <table className="table">
              <tbody>
                <tr>
                  <td className="fw-bold">Brand</td>
                  <td>{product.brand}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Category</td>
                  <td>{product.category}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Availability</td>
                  <td>{product.stock > 0 ? "In Stock" : "Out of Stock"}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Weight</td>
                  <td>{product.weight} Kg</td>
                </tr>
                <tr>
                  <td className="fw-bold">Stock</td>
                  <td>{product.stock} </td>
                </tr>
                <tr>
                  <td className="fw-bold">Warranty</td>
                  <td>{product.warrantyInformation} </td>
                </tr>
                <tr>
                  <td className="fw-bold">Rating</td>
                  <td>{product.rating} </td>
                </tr>
                <tr>
                  <td className="fw-bold">shipping</td>
                  <td>{product.shippingInformation} </td>
                </tr>
                <tr>
                  <td className="fw-bold">ReturnPolicy</td>
                  <td>{product.returnPolicy} </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Card>
      <div className="d-flex justify-content-end gap-2 mt-3">
        <Button
          variant="primary"
          onClick={() => navigate("/product-hub/dashboard/products")}
        >
          Back
        </Button>

        <Button
          variant="warning"
          onClick={() => navigate(`/edit-product/${id}`)}
        >
          Edit
        </Button>
      </div>
    </div>
  );
}
