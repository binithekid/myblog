import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getMostRecentPost } from "../services";

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
  const [recentPost, getRecentPost] = useState([]);

  useEffect(() => {
    const post = getMostRecentPost();
    post.then((result) => getRecentPost(result));
  }, []);

  return (
    <div className='flex flex-row w-full mb-8 gap-2 bg-white shadow-sm rounded-lg p-8'>
      {recentPost.map((post: RecentPost) => (
        <>
          <div className='w-1/2 '>
            <img src={post?.featuredImage?.url} className='shadow-sm' />
          </div>
          <div className='w-1/2'>
            <h1 className='font-bold text-4xl text-gray font-inter mb-1 ml-5'>
              {post?.title}
            </h1>
            <div className='ml-5 mb-1 text-gray-700 font-medium'>
              <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
            </div>
            <p className='ml-5 font-light text-lg text-gray-700'>
              {post?.excerpt}
            </p>
            <Link href={`/post/${post.slug}`}>
              <button className='rounded-lg ml-5 mt-5 px-8 py-3 shadow-sm transition duration-500 transform hover:-translate-y-1 hover:shadow-lg inline-block border'>
                Read More
              </button>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default HomePageFeature;
