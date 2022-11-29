import React, { useEffect } from "react";
import Qutote from "../components/Qutote";
import { getPosts } from "../services";
import WideCard from "../components/WideCard";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const news = ({ posts }: { posts: any }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        type: "spring",
        stiffness: 50,
        delay: 0.2,
      },
    },
    hidden: { y: 20, opacity: 0 },
  };

  return (
    <div className='container mx-auto mb-8 lg:mt-0 mt-4 px-4 lg:px-0'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <motion.div
          variants={boxVariant}
          initial='hidden'
          ref={ref}
          animate={control}
          className='lg:col-span-8 col-span-1 bg-white shadow-sm'>
          <h1 className='pl-4 pt-4 font-bold text-2xl lg:text-3xl text-gray font-inter'>
            News
          </h1>
          <p className='text-sm pl-4 mb-1 text-slate-600'>
            The latest news coming in from all over the world
          </p>
          <hr className='mb-6 mx-4 w-1/6 mt-1' />
          <div>
            {posts.map((post: any, i: number) => (
              <div className='px-4'>
                <WideCard post={post} key={i} />
                {posts.length - 1 === i ? null : <hr />}
              </div>
            ))}
          </div>
        </motion.div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='relative'>
            <Qutote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default news;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
