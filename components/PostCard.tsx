import React from "react";
import moment from "moment";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface Posts {
  excerpt: string;
  featuredImage: {
    url: string;
  };
  slug: string;
  title: string;
  author: {
    name: string;
    photo: {
      url: string;
    };
  };
  createdAt: string;
}

const PostCard = ({ post }: { post: Posts }) => {
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

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      variants={boxVariant}
      initial='hidden'
      ref={ref}
      animate={control}
      className='bg-white shadow-sm p-0 lg:pb-8 mb-8 rounded-b-sm'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top absolute h-80 w-full object.cover shadow-lg '
        />
      </div>
      <h1 className='transition ease-in-out duration-500 text-left text-gray  mt-1 mb-1 cursor-pointer hover:opacity-75 text-3xl font-semibold font-inter ml-5'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='block lg:flex mb-1 w-full'>
        <div className='ml-5'>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className='text-zinc-800 leading-7 lg:px-1 mb-1 ml-4 mr-2 text-ellipsis overflow-hidden line-clamp-3'>
        {post.excerpt}
      </p>
      <div className='mb-0'>
        <Link href={`/post/${post.slug}`}>
          <button className='font-light ml-5 bg-gradient-to-r to-sky-500 from-blue-500 text-md rounded mt-3 px-5 py-2 shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block hover:opacity-4 text-white'>
            Read More
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PostCard;
