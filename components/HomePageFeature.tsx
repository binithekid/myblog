import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getMostRecentPost } from "../services";
import { motion } from "framer-motion";
import sunsetboat from "../public/sunsetboat.jpeg";

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
  const [recentPost, getRecentPostss] = useState([]);

  useEffect(() => {
    const post = getMostRecentPost();
    post.then((result) => getRecentPostss(result));
  }, []);

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
        <div className='flex flex-row w-full mb-8 gap-2 bg-white shadow-sm rounded-lg p-8 transition-transform'>
          <div className='w-1/2'>
            <img src={sunsetboat.src} className='shadow-sm' />
          </div>
          <div className='w-1/2'>
            <h1 className='font-bold text-4xl text-gray font-inter mb-1 ml-5'>
              Do not be foolish
            </h1>
            <div className='ml-5 mb-1 text-gray-700 font-medium'>
              <span>October 13, 2022</span>
            </div>
            <p className='ml-5 font-light text-lg text-gray-700'>
              Ms Veasey, who represented herself, said video evidence showed 27
              people in her home but maintained it was not a party. She admitted
              she was in the wrong for inviting people from outside her
              household to the property, which she shared with seven other
              people. She added she would have paid a smaller fine but felt the
              £10,000 fine was unjust. "It seems like a bit of a con. They're
              trying to pull money out of people, pushing people through court
              cases," she said. "I think it's a large waste of time. I've had
              numerous court cases, and they probably spent more on these court
              cases out of the taxpayers' money than the fine would have been in
              the first place." S
            </p>
            <Link href={`/post/first-post`}>
              <button className='rounded-lg ml-5 mt-5 px-8 py-3 shadow-sm transition duration-500 transform hover:-translate-y-1 hover:shadow-lg inline-block border'>
                Read More
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HomePageFeature;
