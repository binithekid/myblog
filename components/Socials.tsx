import React from "react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='bg-white shadow-md mb-8 rounded-sm'>
      <h3 className='text-lg mb-5 font-light border-b p-2 rounded-t-sm text-white bg-gradient-to-r to-gray-600 from-black'>
        Socials
      </h3>
      <div className='flex flex-col pl-4'>
        <div className='mb-8 flex flex-row'>
          <FaTwitter size={32} style={{ fill: "#1DA1F2" }} />
          <h2 className='mt-1 ml-4'>Follow Our Twitter</h2>
        </div>
        <div className='mb-8 flex flex-row'>
          <FaYoutube size={32} style={{ fill: "#FF0000" }} />
          <h2 className='mt-1 ml-4'>Follow Our Youtube</h2>
        </div>
        <div className='flex flex-row pb-6'>
          <FaInstagram size={32} style={{ fill: "#8a3ab9 " }} />
          <h2 className='mt-1 ml-4'>Follow Our Instagram</h2>
        </div>
      </div>
    </div>
  );
};

export default Socials;
