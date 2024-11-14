import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightNAvBar = () => {
    return (
      <div>
        <h1 className="font-bold text-xl">Login With</h1>
        <div className="flex flex-col gap-3 mt-3">
          <button className="btn">
            <FaFacebook className="text-xl"></FaFacebook> with facebook
          </button>
          <button className="btn">
            <FaGithub className="text-xl"> </FaGithub> with github
          </button>
        </div>

        <div className="mt-10">
          <h1 className="font-bold text-xl mt-3">Find Us On</h1>

          <div className="flex flex-col gap-2">
            <button className="btn bg-base-100 border-none flex justify-start">
              <FaFacebook></FaFacebook> Facebook
            </button>
            <button className="btn bg-base-100 border-none justify-start">
              <FaInstagram></FaInstagram> Instagram
            </button>
            <button className="btn bg-base-100 border-none justify-start">
              <FaTwitter></FaTwitter> Twitter
            </button>
          </div>
        </div>
      </div>
    );
};

export default RightNAvBar;