import Link from "next/link";
import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { ImNewspaper } from "react-icons/im";
import { FaBook, FaHome, FaPencilAlt } from "react-icons/fa";
import { MdEmail, MdOndemandVideo } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";

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
        className={`top-0 left-0 w-[20vw] bg-white shadow-xl text-white fixed h-full z-10
            ${
              showSidebar ? "-translate-x-0" : "-translate-x-full"
            } ease-in-out duration-500`}>
        <button
          className='flex text-3xl text-black items-center cursor-pointer fixed pl-5 top-6 hover:cursor-pointer mb-20'
          onClick={() => setShowSidebar(!showSidebar)}>
          <GrFormClose className='hover:cursor-pointer ease-in-out duration-300 hover:opacity-40' />
        </button>
        <div className='mb-8 flex flex-col mt-36'>
          <Link href={"/"}>
            <div className='p-3 pl-5 hover:bg-gray-200 ease-in-out duration-300 cursor-pointer'>
              <div className='flex flex-row'>
                <FaHome
                  style={{
                    fill: "black",
                    marginTop: "4px",
                    fontSize: "1.2rem",
                  }}
                />
                <span
                  className='align-middle cursor-pointer text-lg text-black ml-4 font-medium'
                  onClick={() => setShowSidebar(false)}>
                  Home
                </span>

                <IoChevronForward
                  color='black'
                  style={{
                    marginTop: "9px",
                    fontSize: "0.8rem",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                />
              </div>
            </div>
          </Link>
          <Link href={"/"}>
            <div className='p-3 pl-5 hover:bg-gray-200 ease-in-out duration-300 cursor-pointer'>
              <div className='flex flex-row'>
                <ImNewspaper
                  style={{
                    fill: "black",
                    marginTop: "5px",
                    fontSize: "1.2rem",
                  }}
                />
                <span
                  className='align-middle cursor-pointer text-lg text-black ml-4'
                  onClick={() => setShowSidebar(false)}>
                  News
                </span>
                <IoChevronForward
                  color='black'
                  style={{
                    marginTop: "9px",
                    fontSize: "0.8rem",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                />
              </div>
            </div>
          </Link>
          <Link href={"/"}>
            <div className='p-3 pl-5 hover:bg-gray-200 ease-in-out duration-300 cursor-pointer'>
              <div className='flex flex-row'>
                <FaPencilAlt
                  style={{
                    fill: "black",
                    marginTop: "5px",
                    fontSize: "1.1rem",
                  }}
                />
                <span
                  className='align-middle cursor-pointer text-lg text-black ml-4'
                  onClick={() => setShowSidebar(false)}>
                  Opinion
                </span>
                <IoChevronForward
                  color='black'
                  style={{
                    marginTop: "9px",
                    fontSize: "0.8rem",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                />
              </div>
            </div>
          </Link>
          <Link href={"/"}>
            <div className='p-3 pl-5 hover:bg-gray-200 ease-in-out duration-300 cursor-pointer'>
              <div className='flex flex-row'>
                <MdOndemandVideo
                  style={{
                    fill: "black",
                    marginTop: "4px",
                    fontSize: "1.3rem",
                  }}
                />
                <span
                  className='align-middle cursor-pointer text-lg text-black ml-4'
                  onClick={() => setShowSidebar(false)}>
                  Watch
                </span>
                <IoChevronForward
                  color='black'
                  style={{
                    marginTop: "9px",
                    fontSize: "0.8rem",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                />
              </div>
            </div>
          </Link>
          <Link href={"/"}>
            <div className='p-3 pl-5 hover:bg-gray-200 ease-in-out duration-300 cursor-pointer'>
              <div className='flex flex-row'>
                <FaBook
                  style={{
                    fill: "black",
                    marginTop: "5px",
                    fontSize: "1.1rem",
                  }}
                />
                <span
                  className='align-middle cursor-pointer text-lg text-black ml-4'
                  onClick={() => setShowSidebar(false)}>
                  Resources
                </span>
                <IoChevronForward
                  color='black'
                  style={{
                    marginTop: "9px",
                    fontSize: "0.8rem",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                />
              </div>
            </div>
          </Link>

          <Link href={"/"}>
            <div className='p-3 pl-5 hover:bg-gray-200 ease-in-out duration-300 cursor-pointer'>
              <div className='flex flex-row'>
                <MdEmail
                  style={{
                    fill: "black",
                    marginTop: "5px",
                    fontSize: "1.2rem",
                  }}
                />
                <span
                  className='align-middle cursor-pointer text-lg text-black ml-4'
                  onClick={() => setShowSidebar(false)}>
                  Contact
                </span>
                <IoChevronForward
                  color='black'
                  style={{
                    marginTop: "9px",
                    fontSize: "0.8rem",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                />
              </div>
            </div>
          </Link>

          {/* {categories.map((category) => (
            <div className='mb-7 pl-5'>
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span
                  className='align-middle text-black cursor-pointer font-medium hover:opacity-70'
                  onClick={() => setShowSidebar(false)}>
                  {category.name}
                </span>
              </Link>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
