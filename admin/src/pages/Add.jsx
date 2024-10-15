import React, { useState } from "react";
import { assets } from "../assets/assets";

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("phone");
  const [subCategory, setSubCategory] = useState("audio");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  return (
    <form className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">uploed image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20"
              src={
                !image1 ? assets.upload_area : URL.createObjectURL({ image1 })
              }
              alt=""
            />
            <input
              onChange={(e) => setImage1(e.target.value)}
              type="file"
              hidden
              id="image1"
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20"
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
            />
            <input
              onChange={(e) => setImage2(e.target.value)}
              type="file"
              hidden
              id="image2"
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20"
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=""
            />
            <input
              onChange={(e) => setImage3(e.target.value)}
              type="file"
              hidden
              id="image3"
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20"
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
            />
            <input
              onChange={(e) => setImage4(e.target.value)}
              type="file"
              hidden
              id="image4"
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="type here"
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="write here"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select className="w-full px-3 py-2">
            <option value="phone">Phone</option>
            <option value="accessoires">Accessoires</option>
            <option value="pc">PC</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Product Sub Category</p>
          <select className="w-full px-3 py-2">
            <option value="audio">Audio</option>
            <option value="confort">Confort</option>
            <option value="chargement">Chargement</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Product Price</p>
          <input
            className="w-full sm:w-[120px] px-3 py-2"
            type="Number"
            placeholder="25"
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Product sizes </p>
        <div className="flex gap-3">
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">S</p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">M</p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">L</p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">XL</p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">XXL</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input type="checkbox" id="bestseller" />
        <label className="cursor-pointer" htmlFor="bestseller">
          add to best seller
        </label>
      </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Add;
