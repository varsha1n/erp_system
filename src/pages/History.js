import React, { useState } from "react";
import { history } from "../data/historyData.js";
import "../styles/History.css";
import CalendarView from "../components/CalendarView.js";

const Dashboard = () => {
  const [orders, setOrders] = useState(history);

  const handleChangeStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.order_id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.order_id !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <div className="container">
      <div className="table-container1">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Expected Delivery</th>
              <th>Status</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.order_id}>
                <td>{order.order_id}</td>
                <td>{order.customer_name}</td>
                <td>{order.order_date}</td>
                <td>{order.expected_delivery}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleChangeStatus(order.order_id, e.target.value)
                    }
                  >
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td>
                  <button
                    className="bn"
                    onClick={() => handleDeleteOrder(order.order_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CalendarView orders={orders} />
    </div>
  );
};

export default Dashboard;
