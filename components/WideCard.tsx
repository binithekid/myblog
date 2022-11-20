import Link from "next/link";
import React from "react";

const WideCard = ({ post }: { post: any }) => {
  console.log(post);
  return (
    <div className='flex flex-row w-full items-center justify-center mb-3 bg-white shadow-sm'>
      <div className='w-1/2'>
        <img src={post.node.featuredImage.url} />
      </div>
      <div className='w-1/2 ml-4 '>
        <h1 className='font-bold text-2xl text-gray'>{post.node.title}</h1>
        <p className='text-ellipsis overflow-hidden line-clamp-3'>
          By <span className='uppercase'>{post.node.author.name}</span>
        </p>
        <p className='text-ellipsis overflow-hidden line-clamp-3 mr-3'>
          {post.node.excerpt}
        </p>
        <div className='mb-0'>
          <Link href={`/post/${post.node.slug}`}>
            <button className='border text-sm border-zinc-700 text-md rounded mt-3 px-3 py-1 shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block hover:opacity-4 text-black'>
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WideCard;
