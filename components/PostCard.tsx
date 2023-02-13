import React from "react";
import Link from "next/link";

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
  return (
    <div className='bg-white shadow-sm pb-3 lg:pb-3 mb-8 rounded lg:mx-0 mx-4'>
      <div className='border-b mb-3'>
        <Link href={`/post/${post.slug}`}>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className='rounded-t md:h-64 md:w-full object-cover h-56 w-full cursor-pointer transition hover:opacity-60 ease-in-out duration-500'
          />
        </Link>
      </div>
      <div className='ml-3'>
        <span className='text-xs uppercase mb-1 text-slate-600'>
          {post.categories[0].name}
        </span>
      </div>
      <h1 className='transition ease-in-out duration-500 text-left text-gray-800 cursor-pointer hover:opacity-60 lg:text-2xl text-xl font-semibold ml-3'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='block lg:flex w-full'></div>
      <p className='leading-normal text-sm  ml-3 mr-2 text-ellipsis overflow-hidden line-clamp-3'>
        {post.excerpt}
      </p>
      <div className='-mb-0 mt-2'>
        <span className='text-xs ml-3 text-slate-600'>
          {post.read} MIN READ
        </span>
      </div>
    </div>
  );
};

export default PostCard;
