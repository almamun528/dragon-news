import React from 'react';
import image from '../assets/logo.png'



const Logo = () => {
    return (
      <div className="flex items-center justify-center flex-col my-4 space-y-2">
        <img src={image} alt="" />
        <p className="capitalize text-gray-500 text-xl">
          Journalism without fear of favour
        </p>
        <p>Sunday, November 27, 2025</p>
      </div>
    );
};

export default Logo;