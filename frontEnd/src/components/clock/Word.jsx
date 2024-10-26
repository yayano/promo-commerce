/**
 *  2022 Sergi S. - https://github.com/sergiss
 */

import React from "react";

export const Word = ({ value, hidden = false }) => {
  const getStyle = () => {
    return {
      visibility: hidden ? "hidden" : "visible",
    };
  };
  return (
    <div className="digital inline-block relative">
      <p className="w-full absolute text-[#422a32] m-0 ">{value}</p>
      <p style={getStyle()} className="relative text-[#ebebeb] m-0">
        {value}
      </p>
    </div>
  );
};
