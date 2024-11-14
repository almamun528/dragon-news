import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className="flex flex-row gap-3 p-3 bg-gray-100 items-center justify-center w-10/12 mx-auto">
      <button className="btn btn-error rounded-none text-white">
        Latest News
      </button>
    
        <Marquee>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          assumenda illum delectus neque soluta corporis sapiente ea natus,
          cupiditate quia?
        </Marquee>
    
    </div>
  );
};

export default Marque;
