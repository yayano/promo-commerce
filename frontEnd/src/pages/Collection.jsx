import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { useTranslation } from "react-i18next";
const Collection = () => {
  const [t, i18n] = useTranslation();
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
    console.log(category, "category");
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };
  const applyFilter = () => {
    let productsCopy = products.slice();
    console.log("1", productsCopy);
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };
  const sortProducts = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);
  useEffect(() => {
    sortProducts();
  }, [sortType]);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/**Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 dark:text-gray-200"
        >
          {t("filters")}
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/**Category filters  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium dark:text-gray-300 ">
            {t("categories")}
          </p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-400">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Accessoires"}
                onChange={toggleCategory}
              />
              {t("accessoire")}
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Phones"}
                onChange={toggleCategory}
              />
              {t("phone")}
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"PC"}
                onChange={toggleCategory}
              />
              {t("pc")}
            </p>
          </div>
        </div>

        {/**Sub Category filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium dark:text-gray-300 ">
            {t("subCategories")}
          </p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-400">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Audio"}
                onChange={toggleSubCategory}
              />{" "}
              {t("audio")}
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Confort"}
                onChange={toggleSubCategory}
              />{" "}
              {t("confort")}
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Chargement"}
                onChange={toggleSubCategory}
              />{" "}
              {t("chargement")}
            </p>
          </div>
        </div>
      </div>
      {/**right side products */}
      <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={t("allCollections")} text2={""} />
          {/**Products Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2 dark:bg-[#121212] dark:border-gray-400 dark:text-gray-400"
          >
            <option value="relavent">{t("sortByRelevant")}</option>
            <option value="low-high">{t("sortByLowToHigh")}</option>
            <option value="high-low">{t("sortByHighToLow")}</option>
          </select>
        </div>
        {/**Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
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
    </div>
  );
};

export default Collection;
