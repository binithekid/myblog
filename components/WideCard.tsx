import Link from "next/link";
import React from "react";
import moment from "moment";

const WideCard = ({ post }: { post: any }) => {
  return (
    <div className='flex flex-col lg:flex-row  w-full items-center justify-center mb-5 mt-5 bg-white'>
      <div className='w-full lg:w-1/3'>
        <Link href={`/post/${post.node.slug}`}>
          <img
            src={post.node.featuredImage.url}
            className='cursor-pointer ease-in-out duration-300 hover:opacity-60'
          />
        </Link>
      </div>
      <div className='w-full lg:w-2/3 ml-4 mt-2'>
        <Link href={`/post/${post.node.slug}`}>
          <h1 className='text-gray cursor-pointer pr-4 font-semibold text-xl transition ease-in-out duration-300 hover:opacity-60'>
            {post.node.title}
          </h1>
        </Link>
        <p className='text-ellipsis overflow-hidden line-clamp-3 mr-3 mb-2'>
          {post.node.excerpt}
        </p>
        <span className='text-xs text-slate-600'>
          {post.node.read} MIN READ
        </span>
      </div>
    </div>
  );
};

export default WideCard;
