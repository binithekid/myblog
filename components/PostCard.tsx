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
  read: string;
  createdAt: string;
  categories: {
    name: string;
  }[];
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
      className='bg-white shadow-sm pb-3 lg:pb-3 mb-8 rounded-b-sm lg:mx-0 mx-4'>
      <div className='shadow-md mb-3'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='shadow-sm'
        />
      </div>
      <div className='ml-3'>
        <span className='text-xs uppercase mb-1 text-slate-600'>
          {post.categories[0].name}
        </span>
      </div>
      <h1 className='transition ease-in-out duration-500 text-left text-gray cursor-pointer hover:opacity-60 lg:text-2xl text-xl font-semibold ml-3'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='block lg:flex w-full'></div>
      <p className='text-zinc-800 leading-normal text-sm  ml-3 mr-2 text-ellipsis overflow-hidden line-clamp-3'>
        {post.excerpt}
      </p>
      <div className='-mb-0'>
        <span className='text-xs ml-3 text-slate-600'>
          {post.read} MIN READ
        </span>
      </div>
    </motion.div>
  );
};

export default PostCard;
