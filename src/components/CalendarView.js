import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/CalendarView.css";

const CalendarView = ({ orders }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setTimeout(() => {
      const tableContainer = document.querySelector(".table-container2");
      if (tableContainer) {
        tableContainer.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // 3000 milliseconds = 3 seconds
  };

  const ordersForSelectedDate = selectedDate
    ? orders.filter(
        (order) =>
          formatDate(new Date(order.expected_delivery)) ===
          formatDate(selectedDate)
      )
    : [];

  const highlightedDates = orders.map(
    (order) => new Date(order.expected_delivery)
  );

  const tileClassName = ({ date }) => {
    const formattedDate = formatDate(date);
    const isHighlighted = highlightedDates.some(
      (highlightedDate) => formatDate(highlightedDate) === formattedDate
    );

    return isHighlighted ? "highlighted-date green-background" : null;
  };

  return (
    <div className="calendar-view">
      <div className="calendar-container">
        <h2 className="data">Orders Calendar View</h2>
        <Calendar tileClassName={tileClassName} onClickDay={handleDateClick} />
      </div>
      {selectedDate && (
        <div className="table-container2">
          <h3 className="data data1">Orders for {formatDate(selectedDate)}</h3>
          <div className="res">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Order Date</th>
                  <th>Status</th>
                  <th>Expected Delivery</th>
                </tr>
              </thead>
              <tbody>
                {ordersForSelectedDate.map((order) => (
                  <tr key={order.order_id}>
                    <td>{order.order_id}</td>
                    <td>{order.customer_name}</td>
                    <td>{order.order_date}</td>
                    <td>{order.status}</td>
                    <td>{order.expected_delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
