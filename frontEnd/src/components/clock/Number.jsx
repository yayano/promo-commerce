/**
 *  2022 Sergi S. - https://github.com/sergiss
 */

import React from "react";

export const Number = ({ value = 0 }) => {
  const result = String(value).padStart(2, "0");
  return (
    <div className="digital inline-block relative">
      <p className="w-full absolute text-[#474646] m-0 opacity-30">88</p>
      <p className="relative text-[#ebebeb] m-0">{result}</p>
    </div>
  );
};
