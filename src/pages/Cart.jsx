import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, Card } from "react-bootstrap";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <Button variant="primary" className="mb-3" onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <h2>My Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <Card key={item.id} className="p-3 mb-2">
            <Row className="align-items-center">
              {/* Product Image */}
              <Col md={3} className="text-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="img-fluid rounded"
                  style={{ maxHeight: "100px" }}
                />
              </Col>

              {/* Product Details */}
              <Col md={6}>
                <h5>{item.title}</h5>
                <p>₹ {item.price}</p>
              </Col>
            </Row>
          </Card>
        ))
      )}
    </div>
  );
}
