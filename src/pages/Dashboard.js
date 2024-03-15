import React from "react";
import image1 from "../images/products.jpg";
import image2 from "../images/cart.jpg";
import image3 from "../images/history.jpg";
import { NavLink } from "react-router-dom";
import { useCart } from "../components/CartContext";

import "../styles/dashboard.css";

const Dashboard = () => {
  const { cart } = useCart();
  const cartItemCount = cart.length;
  return (
    <>
      <div className="box_parent">
        <div className="box box1">
          <figure>
            <img src={image1} alt="products" height={400} width={400} />
          </figure>
          <h3 className="box-data">PRODUCTS</h3>
          <h3 className="total">Total number of products : 7</h3>
          <NavLink to="/Home">
            <button className="box-button">Go to</button>
          </NavLink>
        </div>
        <div className="box box2">
          <figure>
            <img src={image2} alt="cart" height={400} width={400} />
          </figure>
          <h3 className="box-data">CART</h3>
          <h3 className="total">
            Total number of products in cart : {cartItemCount}
          </h3>
          <NavLink to="/Cart">
            <button className="box-button">Go to</button>
          </NavLink>
        </div>
        <div className="box box3">
          <figure>
            <img src={image3} alt="history" height={400} width={400} />
          </figure>
          <h3 className="box-data">HISTORY</h3>
          <h3 className="total">Total number of previous orders : 6</h3>
          <NavLink to="/History">
            <button className="box-button">Go to</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
