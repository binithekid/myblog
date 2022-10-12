import React from "react";
import Link from "next/link";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const categories = [
  { name: "React", slug: "react" },
  { name: "Development", slug: "dev" },
  { name: "Java", slug: "java" },
  { name: "CMS", slug: "cms" },
];

const Header = () => {
  return (
    <div className='mx-auto px-10 mb-8 bg-white border-b'>
      <div className='w-full inline-block py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-gray font-inter'>
              TruthSeekers
            </span>
          </Link>
        </div>
        <div className='hidden md:float-right md:contents items-center'>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className='md:float-right mt-3 text-gray ml-8 cursor-pointer font-light hover:opacity-70'>
              <FaYoutube />
            </span>
          </Link>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className='md:float-right mt-3 text-gray ml-8 cursor-pointer font-light hover:opacity-70'>
              <FaInstagram />
            </span>
          </Link>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className='md:float-right mt-3 text-gray ml-8 cursor-pointer font-light hover:opacity-70'>
              <FaTwitter />
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='md:float-right mt-2 align-middle text-gray ml-8 cursor-pointer font-light hover:opacity-70'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
