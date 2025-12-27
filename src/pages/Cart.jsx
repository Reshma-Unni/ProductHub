import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>My Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="card p-3 mb-2">
            <h5>{item.title}</h5>
            <p>₹ {item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
