import React from "react";
import Link from "next/link";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Opinion from "./OpinionWidget";

const Footer = () => {
  const categories = [
    { name: "News", slug: "news" },
    { name: "Opinion", slug: "opinion" },
    { name: "Watch", slug: "watch" },
    { name: "Resources", slug: "resources" },
    { name: "Contact", slug: "contact" },
  ];

  return (
    <div className='flex w-full flex-col bg-black mx-auto px-10'>
      <div className='flex flex-start pl-4 flex-col'>
        <Link href='/'>
          <h1 className='cursor-pointer mt-10 font-bold text-3xl text-white font-inter transition ease-in-out duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-amber-200 via-red-400 to-red-500'>
            TruthSeekers.
          </h1>
        </Link>
        <p className='text-white text-sm font-light w-2/3 mt-2'>
          WIRED is where tomorrow is realised. It is the essential source of
          information and ideas that make sense of a world in constant
          transformation. The WIRED conversation illuminates how technology is
          changing every aspect of our lives—from culture to business, science
          to design. The breakthroughs and innovations that we uncover lead to
          new ways of thinking, new connections, and new industries.
        </p>
      </div>
      <div className='flex flex-row flex-start pl-4 mt-4'>
        <div className='flex flex-row mb-4 gap-6'>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className=' mt-3 text-gray cursor-pointer font-light hover:opacity-70'>
              <FaTwitter style={{ fill: "white" }} size={25} />
            </span>
          </Link>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className=' mt-3 text-gray cursor-pointer font-light hover:opacity-70 '>
              <FaYoutube style={{ fill: "white" }} size={25} />
            </span>
          </Link>
          <Link href='https://www.bbc.co.uk/sport/football'>
            <span className=' mt-3 text-gray cursor-pointer font-light hover:opacity-70'>
              <FaInstagram style={{ fill: "white" }} size={25} />
            </span>
          </Link>
        </div>
      </div>
      <div className='flex flex-col mb-8 font-normal text-sm text-white border-t mt-5 border-gray-600'>
        <div className='flex flex-row mt-3 pl-4'>
          {categories.map((category, i) => (
            <Link href={`/${category.slug}`}>
              <p className='text-gray-400 text-xs mr-5 cursor-pointer hover:text-white'>
                {category.name}{" "}
              </p>
            </Link>
          ))}
        </div>
        <p className='mt-7 font-light pl-4 text-gray-400 text-xs -mb-2 transition ease-in-out duration-200'>
          Copyright &copy; 2022 TruthSeekers
        </p>
      </div>
    </div>
  );
};

export default Footer;
