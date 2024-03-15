import React from "react";
import { useCart } from "../components/CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [quantities, setQuantities] = React.useState({});

  // Update quantities state based on the items in the cart
  React.useEffect(() => {
    const newQuantities = {};
    cart.forEach((item) => {
      newQuantities[item.id] = quantities[item.id] || 1;
    });
    setQuantities(newQuantities);
  }, [cart]);

  const handleAdd = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const handleSubtract = (id) => {
    if (quantities[id] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: (prevQuantities[id] || 0) - 1,
      }));
    }
  };

  const handleDelete = (id) => {
    removeFromCart(id);
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>

            <th>Quantity</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.category}</td>

              <td>
                <button
                  className="btn1"
                  onClick={() => handleSubtract(item.id)}
                >
                  -
                </button>
                {quantities[item.id] || 0}
                <button className="btn2" onClick={() => handleAdd(item.id)}>
                  +
                </button>
              </td>

              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
