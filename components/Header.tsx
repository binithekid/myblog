import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";

const categories = [
  { name: "React", slug: "react" },
  { name: "Development", slug: "dev" },
  { name: "Java", slug: "java" },
  { name: "CMS", slug: "cms" },
];

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
      <div className='mx-auto px-10 h-8 bg-black flex items-center justify-end'>
        <div className='hidden md:contents'>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className='text-gray ml-5 cursor-pointer font-light hover:opacity-70'>
              <FaTwitter style={{ fill: "white" }} />
            </span>
          </Link>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className='text-gray ml-5 cursor-pointer font-light hover:opacity-70'>
              <FaYoutube style={{ fill: "white" }} />
            </span>
          </Link>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className='text-gray ml-5 cursor-pointer font-light hover:opacity-70'>
              <FaInstagram style={{ fill: "white" }} />
            </span>
          </Link>
        </div>
      </div>
      <div className='flex items-center justify-center h-20 px-10 mb-8 bg-white shadow-sm'>
        <div ref={ref}>
          <FiMenu
            onClick={() => setShowSidebar(!showSidebar)}
            className='cursor-pointer text-xl ease-in-out duration-300 hover:opacity-40'
          />
        </div>
        <div className='w-full py-8 flex items-center justify-center'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-gray font-inter transition ease-in-out duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-amber-200 via-red-400 to-red-500'>
              TruthSeekers.
            </span>
          </Link>
        </div>
        {/* <div className='mb-8'>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='md:float-right align-middle text-gray ml-8 cursor-pointer font-medium hover:opacity-70'>
                {category.name}
              </span>
            </Link>
          ))}
        </div> */}
      </div>
      <div ref={ref}>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
    </div>
  );
};

export default Header;
