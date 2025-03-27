import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { useTranslation } from "react-i18next";

const CartTotal = () => {
  const [t, i18n] = useTranslation();
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={t("cardTotals")} text2={""} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm dark:text-gray-300">
        <div className="flex justify-between">
          <p>{t("subTotal")}</p>
          <p>
            {getCartAmount()}.00 {currency}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>{t("shippingFees")}</p>
          <p>
            {delivery_fee}
            {currency}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>{t("total")}</b>
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
