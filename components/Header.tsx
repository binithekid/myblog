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
    <>
      <div className='mx-auto px-10 h-10 bg-black border-b '>
        <div className='hidden md:float-right md:contents items-center'>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className='md:float-right mt-3 text-gray ml-5 cursor-pointer font-light hover:opacity-70'>
              <FaYoutube style={{ fill: "white" }} />
            </span>
          </Link>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className='md:float-right mt-3 text-gray ml-5 cursor-pointer font-light hover:opacity-70'>
              <FaInstagram style={{ fill: "white" }} />
            </span>
          </Link>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className='md:float-right mt-3 text-gray ml-5 cursor-pointer font-light hover:opacity-70'>
              <FaTwitter style={{ fill: "white" }} />
            </span>
          </Link>
        </div>
      </div>
      <div className='mx-auto px-10 mb-8 bg-white shadow-sm'>
        <div className='w-full inline-block py-8'>
          <div className='md:float-left block'>
            <Link href='/'>
              <span className='cursor-pointer font-bold text-4xl text-gray font-inter hover:opacity-70 transition ease-in-out duration-500'>
                TruthSeekers.
              </span>
            </Link>
          </div>
          <div className='hidden md:float-left md:contents'>
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className='md:float-right mt-2 align-middle text-gray ml-8 cursor-pointer font-medium hover:opacity-70'>
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
