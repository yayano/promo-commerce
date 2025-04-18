import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
const Orders = () => {
  const { currency, token, backendUrl } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);
  const loadOrderData = async () => {
    try {
      // if (!token) {
      //   console.log("no token");
      //   return null;
      // }
      const response = await axios.post(
        backendUrl + "/api/order/userOrders",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrdersItems = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItems.push(item);
            console.log(allOrdersItems);
          });
        });
        setOrderData(allOrdersItems.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadOrderData();
  }, [token]);
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {console.log(item)}
            <div className="flex items-start gap-6 text-sm">
              <img src={item.image[0]} className="w-16 sm:w-20" alt="" />
              <div>
                <p className="sm:text-base font-medium "> {item.name} </p>
                <div className="flex items-center gap-4 mt-1 text-base text-gray-700">
                  <p className="text-lg">
                    {" "}
                    {item.price} {currency}{" "}
                  </p>
                  <p>Quantité : {item.quantity}</p>
                  <p>Taille : {item.size}</p>
                </div>
                <p className="mt-1">
                  Date :{" "}
                  <span className="text-gray-400">
                    {new Date(item.date).toDateString()}
                  </span>{" "}
                </p>
                <p className="mt-2">
                  Paiement :{" "}
                  <span className="text-gray-400">{item.paymentMethod}</span>{" "}
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              <button
                onClick={loadOrderData}
                className="border px-4 py-2 text-sm font-medium rounded-sm"
              >
                Suivre la commande
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
