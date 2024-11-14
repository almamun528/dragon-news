import React from 'react';
import image from '../assets/logo.png'
import moment from 'moment';



const Logo = () => {
    return (
      <div className="flex items-center justify-center flex-col my-4 space-y-2">
        <img src={image} alt="" />
        <p className="capitalize text-gray-500 text-xl">
          Journalism without fear of favour
        </p>
        {/* <p>moment().format('dddd')</p> */}
        <p> {moment().format("LL")} </p>
      </div>
    );
};

export default Logo;