import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [guestorders, setGuestOrders] = useState([]);
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const [response1, response2] = await axios.all([
        axios.post(backendUrl + "/api/order/list"),
        axios.post(backendUrl + "/api/guest/guestOrders"),
        {},
        { headers: { token } },
      ]);
      if (response1.data.success || response2.data.success) {
        setOrders(response1.data.orders.reverse());
        setGuestOrders(response2.data.guestorders.reverse());
      } else {
        toast.error(response1.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("message" + error.message);
    }
  };
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };
  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return (
    <>
      <h3>Order Page</h3>

      <div className="flex  gap-3  ">
        <div className="w-1/2">
          {orders.map((order, index) => (
            <div
              key={index}
              className=" bg-blue-100 grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text:sm text-gray-700 "
            >
              <img className="w-12" src={assets.parcel_icon} alt="" />
              <div>
                <div>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return (
                        <p className="py-0.5" key={index}>
                          {item.name} x {item.quantity}{" "}
                          <span> {item.size} </span>
                        </p>
                      );
                    } else {
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity} <span> {item.size} </span>
                        ,
                      </p>;
                    }
                  })}
                </div>
                <p className="mt-3 mb-2 font-medium">
                  {" "}
                  {order.address.firstName + ", " + order.address.lastName}{" "}
                </p>
                <div>
                  <p> {order.address.street + ", "} </p>

                  <p>
                    {" "}
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipCode}{" "}
                  </p>
                </div>
                <p>{order.address.phone}</p>
              </div>
              <div>
                <p className="text-sm sm:text-[15px]">
                  Items : {order.items.length}
                </p>
                <p className="mt-3">Methode : {order.paymentMethod}</p>
                <p>Payment : {order.payment ? "Done" : "Pending"} </p>
                <p> Date : {new Date(order.data).toLocaleDateString()} </p>
              </div>
              <p className="text-sm sm:text-[15px]">
                {" "}
                {order.amount} {currency}
              </p>
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
                className="p-2 sont-semibold"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out dor delivery">Out dor delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
        <div className=" w-1/2">
          <p>non user orders</p>
          {guestorders.map((guestorder, index) => (
            <div
              key={index}
              className="bg-red-200 grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text:sm text-gray-700 "
            >
              <img className="w-12" src={assets.parcel_icon} alt="" />
              <div>
                <div>
                  {guestorder.items.map((item, index) => {
                    if (index === guestorder.items.length - 1) {
                      return (
                        <p className="py-0.5" key={index}>
                          {item.name} x {item.quantity}{" "}
                          <span> {item.size} </span>
                        </p>
                      );
                    } else {
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity} <span> {item.size} </span>
                        ,
                      </p>;
                    }
                  })}
                </div>
                <p className="mt-3 mb-2 font-medium">
                  {" "}
                  {guestorder.address.firstName +
                    ", " +
                    guestorder.address.lastName}{" "}
                </p>
                <div>
                  <p> {guestorder.address.street + ", "} </p>

                  <p>
                    {" "}
                    {guestorder.address.city +
                      ", " +
                      guestorder.address.state +
                      ", " +
                      guestorder.address.country +
                      ", " +
                      guestorder.address.zipCode}{" "}
                  </p>
                </div>
                <p>{guestorder.address.phone}</p>
              </div>
              <div>
                <p className="text-sm sm:text-[15px]">
                  Items : {guestorder.items.length}
                </p>
                <p className="mt-3">Methode : {guestorder.paymentMethod}</p>
                <p>Payment : {guestorder.payment ? "Done" : "Pending"} </p>
                <p> Date : {new Date(guestorder.data).toLocaleDateString()} </p>
              </div>
              <p className="text-sm sm:text-[15px]">
                {" "}
                {guestorder.amount} {currency}
              </p>
              <select
                onChange={(event) => statusHandler(event, guestorder._id)}
                value={guestorder.status}
                className="p-2 sont-semibold"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out dor delivery">Out dor delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
