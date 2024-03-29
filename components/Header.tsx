import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import Logo from "../public/betechlogo.png";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const ref: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowSidebar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSidebar]);

  return (
    <div>
      <div className='mx-auto px-4 lg:px-10 md:h-8 bg-black flex items-center justify-end h-7'>
        <div className='flex flex-row md:contents '>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className='text-gray ml-4 cursor-pointer font-light hover:opacity-70'>
              <FaTwitter className='fill-white' />
            </span>
          </Link>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className='text-gray ml-4 cursor-pointer font-light hover:opacity-70'>
              <FaYoutube className='fill-white' />
            </span>
          </Link>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className='text-gray ml-4 cursor-pointer font-light hover:opacity-70'>
              <FaInstagram className='fill-white' />
            </span>
          </Link>
        </div>
      </div>
      <div className='flex items-center justify-center h-20 px-10 mb-0 bg-white border-b md:shadow-sm md:mb-8 '>
        <div ref={ref}>
          <FiMenu
            onClick={() => setShowSidebar(!showSidebar)}
            className='cursor-pointer text-xl ease-in-out duration-300 hover:opacity-40'
          />
        </div>
        <div className='w-full py-8 flex items-center justify-center'>
          <Link href='/'>
            <img
              src={Logo.src}
              className='w-32 md:w-36 cursor-pointer transition hover:opacity-70'
            />
          </Link>
        </div>
      </div>
      <div ref={ref}>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
    </div>
  );
};

export default Header;
