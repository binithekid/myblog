import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getMostRecentPost } from "../services";
import { motion } from "framer-motion";
import sunsetboat from "../public/sunsetboat.jpeg";
import { AiFillStar } from "react-icons/ai";

type RecentPost = {
  slug: any;
  featuredImage: {
    url: string;
  };
  title: string;
  excerpt: string;
  createdAt: string;
};

const HomePageFeature = () => {
  const boxVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        type: "spring",
        stiffness: 50,
      },
    },
    hidden: { y: 20, opacity: 0 },
  };

  return (
    <>
      <motion.div
        variants={boxVariant}
        initial='hidden'
        animate='visible'
        className='flex flex-nowrap overflow-hidden'>
        <div className='flex flex-row w-full mb-8 gap-2 bg-white shadow-sm transition-transform'>
          <div className='w-1/2'>
            <Link href={`/post/first-post`}>
              <img
                src={sunsetboat.src}
                className='cursor-pointer hover:opacity-70 transition ease-in-out duration-300'
              />
            </Link>
          </div>
          <div className='w-1/2 flex flex-col justify-center'>
            <div className='flex flex-row'>
              <h5 className='ml-4 text-red-500 uppercase text-sm'>
                Editor's Pick
              </h5>
              <AiFillStar
                style={{ fill: "rgb(239 68 68)" }}
                className='ml-1 mt-1.5'
                size='0.5rem'
              />
            </div>
            <Link href={`/post/first-post`}>
              <h1 className='text-3xl text-gray font-inter ml-4 cursor-pointer hover:opacity-60 transition ease-in-out duration-300'>
                Do not be foolish
              </h1>
            </Link>
            <h4 className='ml-4 text-sm text-slate-600'>NOV 27, 2022 </h4>
            <p className='ml-4 text-md text-zinc-800 mr-10 leading-7'>
              Ms Veasey, who represented herself, said video evidence showed 27
              people in her home but maintained it was not a party. She admitted
              she was in the wrong for inviting people from outside her
              household to the property, which she shared with seven other
              people. She added she would have paid a smaller fine but felt the
              £10,000 fine was unjust. "It seems like a bit of a con. They're
              trying to pull money out of people, pushing people through court
              cases," she said.
            </p>
            <h4 className='ml-4 text-sm text-slate-600 mt-1 mb-1'>
              4 MIN READ
            </h4>
            {/* <Link href={`/post/first-post`}>
              <button className='cursor-pointer shadow-lg text-md font-light rounded-sm ml-5 mt-6 px-6 py-2 w-32 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:opacity-4 text-white bg-gradient-to-r from-amber-200 via-red-400 to-red-500'>
                Read More
              </button>
            </Link> */}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HomePageFeature;
