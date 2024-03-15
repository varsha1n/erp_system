import React from "react";
import { Link } from "react-router-dom";
import "../styles/products.css"; // Import the CSS file
import { products } from "../data/productsData";
import { useCart } from "../components/CartContext";

const Home = () => {
  const { addToCart } = useCart();
  const handleAddToCart = (product) => {
    addToCart(product);

    alert(`${product.title} has been added to the cart!`);
  };

  return (
    <div className="section">
      <div className="container1 grid grid-three-column">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <figure>
              <img src={product.image} alt={product.title} />
            </figure>
            <div className="card-data">
              <div className="card-data-left">
                <h3>{product.title}</h3>
                <p>Category: {product.category}</p>
              </div>
              <div className="card-data-right">
                <p className="card-data--price">${product.price}</p>
                <p>Stock: {product.stock}</p>
              </div>
            </div>
            <div className="btn">
              <Link
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
