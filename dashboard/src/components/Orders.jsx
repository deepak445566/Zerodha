import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Orders.css'

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/allOrders")
      .then((response) => {
        setOrders(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          <h2>Your Orders</h2>
          <ul>
            {orders.map((order, index) => (
              <li key={index} className="order-item">
                <p><strong>Stock:</strong> {order.name}</p>
                <p><strong>Qty:</strong> {order.qty}</p>
                <p><strong>Price:</strong> ₹{order.price}</p>
                <p><strong>Mode:</strong> {order.mode}</p>
              </li>
            ))}
          </ul>
          <Link to={"/"} className="btn">
            Place more orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
