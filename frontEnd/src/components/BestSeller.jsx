import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestSeller);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"MEILLEURE"} text2={"VENTE"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
          Découvrez nos produits les plus prisés, plébiscités par nos clients.
          Chacun de ces articles a fait ses preuves en alliant qualité et
          satisfaction. Ne manquez pas l'occasion de vous les procurer !
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
