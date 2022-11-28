import React from "react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='bg-white shadow-sm mb-8 rounded-sm hidden lg:block'>
      <h3 className='text-sm -mb-1 p-2 rounded-t-sm text-black'> Socials</h3>
      <hr className='mb-3 mx-2' />
      <div className='flex flex-col pl-4'>
        <div className='mb-8 mt-1 flex flex-row'>
          <FaTwitter size={22} style={{ fill: "#1DA1F2" }} />
          <h2 className='ml-3'>Follow Our Twitter</h2>
        </div>
        <div className='mb-8 flex flex-row'>
          <FaYoutube size={22} style={{ fill: "#FF0000" }} />
          <h2 className='ml-3'>Follow Our Youtube</h2>
        </div>
        <div className='flex flex-row pb-5'>
          <FaInstagram size={22} style={{ fill: "#8a3ab9 " }} />
          <h2 className='ml-3'>Follow Our Instagram</h2>
        </div>
      </div>
    </div>
  );
};

export default Socials;
