import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-3 gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-3/2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ut
            neque, laudantium facere autem aliquam, magnam minima molestiae
            eveniet nobis enim fugit molestias dicta blanditiis. Soluta harum
            nemo ea itaque?
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+213-540-596-016</li>
            <li>boussetta13yahia@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center ">
          Copyright 2024@ yayaTM.com -All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
