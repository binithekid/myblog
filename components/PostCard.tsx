import React from "react";
import moment from "moment";
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
  createdAt: string;
}

const PostCard = ({ post }: { post: Posts }) => {
  return (
    <div className='bg-white shadow-sm rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top absolute h-80 w-full object.cover shadow-lg rounded-t-lg lg:rounded-lg'
        />
      </div>
      <h1 className='transition ease-in-out duration-500 text-left mb-2 cursor-pointer hover:opacity-75 text-3xl font-semibold font-inter ransition'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='block lg:flex  mb-2 w-full'>
        <div className='font-medium text-gray-700 '>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className='text-lg text-gray-700 px-4 lg:px-1 mb-3 font-light'>
        {post.excerpt}
      </p>
      <div className=''>
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer hover:opacity-70 mt-3'>
            Continue reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
