import React from "react";
import Link from "next/link";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Logo from "../public/LogoWhite.png";

const Footer = () => {
  const categories = [
    { name: "Home", slug: "/" },
    { name: "News", slug: "news" },
    { name: "Opinion", slug: "opinion" },
    { name: "Tutorials", slug: "tutorials" },
    { name: "Contact", slug: "contact" },
  ];

  return (
    <div className='flex w-full flex-col bg-black mx-auto px-4 lg:px-10'>
      <div className='flex flex-start pl-4 flex-col'>
        <Link href='/'>
          <img
            src={Logo.src}
            className='w-24 md:w-32 mt-5 cursor-pointer transition hover:opacity-70'
          />
        </Link>
        <p className='text-white text-xs lg:text-sm font-light lg:w-1/2'>
          BenTech serves as a platform to share insights and musings on the
          intersection of tech, self-improvement, innovation, and
          entrepreneurship. From my own personal journey of becoming a Full
          Stack Developer to providing guidance on the best learning techniques,
          I aim to provide valuable insights and advice for those looking to get
          into the industry.
        </p>
      </div>
      <div className='flex flex-row flex-start pl-4 mt-4'>
        <div className='flex flex-row mb-4 gap-6'>
          <Link href='https://twitter.com/BenTech1_'>
            <span className=' mt-3 text-gray cursor-pointer font-light hover:opacity-70'>
              <FaTwitter style={{ fill: "white" }} size={25} />
            </span>
          </Link>
          <Link href=''>
            <span className=' mt-3 text-gray cursor-pointer font-light hover:opacity-70 '>
              <FaYoutube style={{ fill: "white" }} size={25} />
            </span>
          </Link>
          <Link href=''>
            <span className=' mt-3 text-gray cursor-pointer font-light hover:opacity-70'>
              <FaInstagram style={{ fill: "white" }} size={25} />
            </span>
          </Link>
        </div>
      </div>
      <div className='flex flex-col mb-8 font-normal text-sm text-white border-t mt-5 border-gray-600'>
        <div className='flex flex-row mt-3 pl-4'>
          {categories.map((category) => (
            <Link href={`/${category.slug}`} key={category.slug}>
              <p className='text-gray-400 text-xs mr-5 cursor-pointer hover:text-white'>
                {category.name}{" "}
              </p>
            </Link>
          ))}
        </div>
        <p className='mt-7 font-light pl-4 text-gray-400 text-xs -mb-2 transition ease-in-out duration-200'>
          Copyright &copy; 2023 BenTech
        </p>
      </div>
    </div>
  );
};

export default Footer;
