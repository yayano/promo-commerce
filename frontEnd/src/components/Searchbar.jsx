import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [location]);
  return showSearch ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2  ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img src={assets.search_icon} className="w-4" alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        className="inline w-3 cursor-pointer"
        alt=""
      />
    </div>
  ) : null;
};

export default Searchbar;
