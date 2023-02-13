import Link from "next/link";
import React from "react";
import gradient from "../public/gradient.png";
import { AiFillStar } from "react-icons/ai";

const HomePageFeature = () => {
  return (
    <>
      <div className='flex flex-nowrap overflow-hidden px-4 lg:p-0 mt-4 lg:mt-0'>
        <div className='flex flex-col lg:flex-row lg:h-96 w-full mb-8 gap-2 bg-white shadow-sm lg:shadow-sm transition-transform rounded-md'>
          <div className='lg:w-1/2'>
            <Link href={`/post/first-post`}>
              <img
                src={gradient.src}
                className='cursor-pointer hover:opacity-70 transition ease-in-out duration-300 lg:h-96 object-cover w-full rounded-l '
              />
            </Link>
          </div>
          <div className='lg:w-1/2 flex flex-col justify-center mt-3 gap-1.5 lg:mt-0'>
            <div className='flex flex-row '>
              <h5 className='ml-4 text-red-500 uppercase text-xs'>
                Editor's Pick
              </h5>
              <AiFillStar
                style={{ fill: "rgb(239 68 68)" }}
                className='ml-1 mt-1'
                size='0.5rem'
              />
            </div>
            <Link href={`/post/css-gradient-text-animation`}>
              <h1 className='lg:text-3xl text-2xl text-gray-800 font-semibold font-inter ml-4 mr-4 cursor-pointer hover:opacity-60 transition ease-in-out duration-300'>
                How to make a text gradient animation using purely CSS
              </h1>
            </Link>
            <h4 className='ml-4 text-sm text-slate-600'>FEB 13, 2023</h4>
            <p className='ml-4 text-md mr-10 leading-normal lg:mt-0'>
              Web design is cyclical, with popular trends fading out only to be
              replaced by new ones. Color gradients, once forgotten, are making
              a comeback after being replaced for a while by minimalistic, flat
              colors. This brief tutorial will demonstrate how to create a
              smooth text gradient animation purely with CSS. Many tutorials
              available online over-complicate the process, but there is a more
              straightforward approach using keyframes that can achieve the
              desired effect.
            </p>
            <h4 className='ml-4 text-xs text-slate-600 mb-4 lg:mb-0'>
              4 MIN READ
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageFeature;
