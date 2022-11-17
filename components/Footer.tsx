import React from "react";
import Link from "next/link";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex w-full flex-col bottom-0 border-t-2 bg-white'>
      <div className='flex justify-center items-center'>
        <Link href='/'>
          <span className='cursor-pointer mt-10 font-bold text-4xl text-gray font-inter hover:opacity-70 transition ease-in-out duration-500'>
            TruthSeekers.
          </span>
        </Link>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <div className='flex flex-row mb-4 gap-6'>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className=' mt-3 text-gray cursor-pointer font-light hover:opacity-70 '>
              <FaYoutube style={{ fill: "black" }} size={25} />
            </span>
          </Link>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className=' mt-3 text-gray cursor-pointer font-light hover:opacity-70'>
              <FaInstagram style={{ fill: "black" }} size={25} />
            </span>
          </Link>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className=' mt-3 text-gray cursor-pointer font-light hover:opacity-70'>
              <FaTwitter style={{ fill: "black" }} size={25} />
            </span>
          </Link>
        </div>
      </div>
      <div className='flex justify-center items-center mb-8 font-normal text-sm'>
        <p>Copyright &copy; 2022 TruthSeekers</p>
      </div>
    </div>
  );
};

export default Footer;
