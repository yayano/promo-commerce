import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import PlaceOrder from "./PlaceOrder";
const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("S");

  const directOrder = () => {};
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        console.log(item);
        setImage(item.image[0]);
        return;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/**Products Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/**Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer dark:rounded-md  dark:opacity-60"
                alt=""
                onMouseEnter={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              className="w-full h-auto dark:rounded-md "
              alt=""
            />
          </div>
        </div>
        {/** ----------------Product Info */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2 dark:text-[#fff] dark:opacity-85">
            {" "}
            {productData.name}{" "}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2 dark:text-[#fff] dark:opacity-85">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium text-blue-400 ">
            {productData.price}
            {currency}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 dark:text-[#fff] dark:opacity-85">
            {productData.description}
          </p>
          <div className="hidden flex-col gap-4 my-8 ">
            <p className="dark:text-[#fff] dark:opacity-85">Select Size</p>
            <div className="flex gap-2 ">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => directOrder(productData._id, size)}
            className="bg-black text-white dark:text-[#121212] dark:bg-[#fff] dark:opacity-85 px-8 py-3 text-sm active:bg-gray-700 dark:active:bg-gray-700 mt-5"
          >
            COMMANDER
          </button>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="ml-5 bg-black text-white dark:text-[#121212] dark:bg-[#fff] dark:opacity-85 px-8 py-3 text-sm active:bg-gray-700 dark:active:bg-gray-700 mt-5"
          >
            ADD TO CARD
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 dark:text-gray-200 mt-5 flex flex-col gap-1">
            <p>100% Original product. </p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      <PlaceOrder />
      {/**Description and review section */}
      <div className="mt-20">
        <div className="flex dark:text-gray-200">
          <b className="border px-5 py-3 text-sm ">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 dark:text-gray-200">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            deserunt nesciunt commodi nemo atque, quos quae soluta aperiam a
            ipsa debitis voluptatibus est accusamus minus enim provident
            obcaecati voluptates quo?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            quidem rem iste omnis a, magnam sunt doloremque, error tempora
            blanditiis minus incidunt in culpa ratione, nihil harum modi odio
            placeat sit. Laboriosam ut inventore alias distinctio repellat,
            asperiores id eaque!
          </p>
        </div>
      </div>
      {/**Display related products --- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
