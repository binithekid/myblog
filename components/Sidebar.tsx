import Link from "next/link";
import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";

const Sidebar = ({
  showSidebar,
  setShowSidebar,
}: {
  setShowSidebar: any;
  showSidebar: boolean;
}) => {
  const categories = [
    { name: "React", slug: "react" },
    { name: "Development", slug: "dev" },
    { name: "Java", slug: "java" },
    { name: "CMS", slug: "cms" },
  ];

  return (
    <>
      <div
        className={`top-0 left-0 w-[20vw] bg-white shadow-xl p-10 pl-2 text-white fixed h-full z-10
            ${
              showSidebar ? "-translate-x-0" : "-translate-x-full"
            } ease-in-out duration-500`}>
        <button
          className='flex text-3xl text-black items-center cursor-pointer fixed pl-5 top-6 hover:cursor-pointer'
          onClick={() => setShowSidebar(!showSidebar)}>
          <GrFormClose className='hover:cursor-pointer ease-in-out duration-300 hover:opacity-40' />
        </button>
        <div className='mb-8 flex flex-col mt-20'>
          <div className='mb-7 pl-5'>
            <Link href={"/"}>
              <span
                className='align-middle text-black cursor-pointer font-medium hover:opacity-70'
                onClick={() => setShowSidebar(false)}>
                Home
              </span>
            </Link>
          </div>
          {categories.map((category) => (
            <div className='mb-7 pl-5'>
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span
                  className='align-middle text-black cursor-pointer font-medium hover:opacity-70'
                  onClick={() => setShowSidebar(false)}>
                  {category.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
