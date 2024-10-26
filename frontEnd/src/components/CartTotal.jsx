import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CARD"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm dark:text-gray-300">
        <div className="flex justify-between">
          <p>Sous-total</p>
          <p>
            {getCartAmount()}.00 {currency}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Frais de livraison</p>
          <p>
            {delivery_fee}
            {currency}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
            {currency}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
