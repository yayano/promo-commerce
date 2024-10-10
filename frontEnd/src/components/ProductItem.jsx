import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/products/${id}`}>
      <div className="overflow-hidden relative h-[200px] ">
        <img
          className="hover:scale-110 transition ease-in-out object-center"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm ">{name}</p>
      <p className="text-sm font-medium text-blue-500">
        {price} {currency}
      </p>
    </Link>
  );
};

export default ProductItem;
