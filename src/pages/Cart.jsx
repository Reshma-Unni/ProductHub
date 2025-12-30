// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import { Button, Row, Col, Card } from "react-bootstrap";

// export default function Cart() {
//   const { cartItems } = useContext(CartContext);
//   const navigate = useNavigate();

//   return (
//     <div className="container mt-4">
//       <Button variant="primary" className="mb-3" onClick={() => navigate(-1)}>
//         ← Back
//       </Button>

//       <h2>My Cart</h2>

//       {cartItems.length === 0 ? (
//         <p>Cart is empty</p>
//       ) : (
//         cartItems.map((item) => (
//           <Card key={item.id} className="p-3 mb-2">
//             <Row className="align-items-center">
//               {/* Product Image */}
//               <Col md={3} className="text-center">
//                 <img
//                   src={item.thumbnail}
//                   alt={item.title}
//                   className="img-fluid rounded"
//                   style={{ maxHeight: "100px" }}
//                 />
//               </Col>

//               {/* Product Details */}
//               <Col md={6}>
//                 <h5>{item.title}</h5>
//                 <p>₹ {item.price}</p>
//               </Col>
//             </Row>
//           </Card>
//         ))
//       )}
//     </div>
//   );
// }

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, Card, ListGroup } from "react-bootstrap";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">
      {/* Back Button */}
      <Button variant="link" onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <Row className="mt-3">
        {/* LEFT SIDE — CART ITEMS */}
        <Col md={8}>
          <h4 className="mb-3">My Cart ({cartItems.length})</h4>

          {cartItems.length === 0 ? (
            <Card className="p-4 text-center">
              <h5>Your cart is empty</h5>
              <Button
                className="mt-3"
                onClick={() => navigate("/dashboard/products")}
              >
                Shop Now
              </Button>
            </Card>
          ) : (
            cartItems.map((item) => (
              <Card key={item.id} className="mb-3 p-3">
                <Row className="align-items-center">
                  {/* Image */}
                  <Col md={3} className="text-center">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="img-fluid"
                      style={{ maxHeight: "120px" }}
                    />
                  </Col>

                  {/* Details */}
                  <Col md={6}>
                    <h6>{item.title}</h6>
                    <p className="text-muted mb-1">Delivery in 3–5 days</p>
                    <h5>₹ {item.price}</h5>

                    <div className="d-flex gap-3 mt-2">
                      <Button variant="outline-secondary" size="sm">
                        Save for later
                      </Button>
                      <Button variant="outline-danger" size="sm">
                        Remove
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            ))
          )}
        </Col>

        {/* RIGHT SIDE — PRICE DETAILS */}
        <Col md={4}>
          <Card className="p-3">
            <h6 className="text-muted">PRICE DETAILS</h6>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Price ({cartItems.length} items)</span>
                <span>₹ {totalPrice}</span>
              </ListGroup.Item>

              <ListGroup.Item className="d-flex justify-content-between">
                <span>Delivery Charges</span>
                <span className="text-success">FREE</span>
              </ListGroup.Item>

              <ListGroup.Item className="d-flex justify-content-between fw-bold">
                <span>Total Amount</span>
                <span>₹ {totalPrice}</span>
              </ListGroup.Item>
            </ListGroup>

            <Button
              variant="warning"
              size="lg"
              className="mt-3"
              disabled={cartItems.length === 0}
            >
              PLACE ORDER
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
