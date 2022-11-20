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
    <div className='bg-white rounded-sm p-4 mb-8'>
      <h3 className='text-xl mb-5 font-medium border-b pb-2'>
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post: any) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <img
              alt={post.title}
              height='60px'
              width='60px'
              className='align-middle rounded-semi'
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className='text-md'>
              {post.title}
            </Link>
            <p className='text-gray-500 font-xs'>
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
