import Link from "next/link";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import { MdOndemandVideo, MdOutlineLibraryBooks } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";
import { HiOutlineChat } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { BiNews } from "react-icons/bi";
import { TiHomeOutline } from "react-icons/ti";

const Sidebar = ({
  showSidebar,
  setShowSidebar,
}: {
  setShowSidebar: any;
  showSidebar: boolean;
}) => {
  return (
    <>
      <div
        className={`top-0 left-0 w-[20vw] bg-white shadow-xl text-white fixed h-full z-10
            ${
              showSidebar ? "-translate-x-0" : "-translate-x-full"
            } ease-in-out duration-500`}>
        <button
          className='flex text-3xl text-black items-center cursor-pointer fixed pl-4 top-6 hover:cursor-pointer mb-20'
          onClick={() => setShowSidebar(!showSidebar)}>
          <GrFormClose className='hover:cursor-pointer ease-in-out duration-300 hover:opacity-40' />
        </button>
        <div className='mb-8 flex flex-col mt-20'>
          <Link href={"/"}>
            <div className='p-3 pl-5 hover:bg-gray-200 ease-in-out duration-300 cursor-pointer'>
              <div className='flex flex-row'>
                <TiHomeOutline
                  style={{
                    color: "black",
                    marginTop: "3px",
                    fontSize: "1.3rem",
                  }}
                />
                <span
                  className='align-middle cursor-pointer text-lg text-zinc-800 ml-3'
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
                <BiNews
                  style={{
                    color: "black",
                    marginTop: "4px",
                    fontSize: "1.3rem",
                  }}
                />
                <span
                  className='align-middle cursor-pointer text-lg text-zinc-800 ml-3'
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
                <HiOutlineChat
                  style={{
                    color: "black",
                    marginTop: "3px",
                    fontSize: "1.4rem",
                  }}
                />
                <span
                  className='align-middle cursor-pointer text-lg text-zinc-800 ml-2'
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
                  className='align-middle cursor-pointer text-lg text-zinc-800 ml-3'
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
                <MdOutlineLibraryBooks
                  style={{
                    color: "black",
                    marginTop: "3px",
                    fontSize: "1.3rem",
                  }}
                />
                <span
                  className='align-middle cursor-pointer text-lg text-zinc-800 ml-3'
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
                <FiMail
                  style={{
                    color: "black",
                    marginTop: "5px",
                    fontSize: "1.1rem",
                  }}
                />
                <span
                  className='align-middle cursor-pointer text-lg text-zinc-800 ml-3'
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
