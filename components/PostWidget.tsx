import React, { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }: any) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result: any) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result: any) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className='bg-white shadow-md mb-8 rounded-sm'>
      <h3 className='text-lg mb-5 font-light border-b p-2 rounded-t-sm text-white bg-gradient-to-r to-gray-600 from-black'>
        {slug ? "Related Posts" : "Most Recent"}
      </h3>
      {relatedPosts.map((post: any, i) => (
        <div
          key={post.title}
          className={`flex items-center w-full pl-3 ${
            relatedPosts.length - 1 == i ? "pb-7" : "pb-5"
          }`}>
          <div className='w-16 flex-none'>
            <img
              alt={post.title}
              height='80px'
              width='80px'
              className='rounded-sm'
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <Link href={`/post/${post.slug}`} key={post.title}>
              <p className='text-lg -mb-1'>{post.title}</p>
            </Link>
            <p className='text-gray-500 font-light text-sm'>
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
