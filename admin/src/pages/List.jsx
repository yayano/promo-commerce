import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { currency } from "../App";
const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/products/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const removeHandler = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/products/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);

        await fetchList();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, [list]);
  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* ----------- List table title ------------- */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm ">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {/* --------Products List -------- */}
        {list.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
          >
            <img src={product.image[0]} alt="" />
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>
              {product.price}
              {currency}
            </p>
            <p
              className="text-right md:text-center cursor-pointer text-lg"
              onClick={() => removeHandler(product._id)}
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
