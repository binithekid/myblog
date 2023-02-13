import React, { useEffect, useState } from "react";
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
    <div className='bg-white mb-8 rounded shadow hidden lg:block'>
      <h3 className='text-sm -mb-1 p-2 rounded-t-sm text-black'>
        {slug ? "Related Posts" : "Most Recent"}
      </h3>
      <hr className='mb-3 mx-2' />
      {relatedPosts.map((post: any, i) => (
        <div
          key={post.title}
          className={`flex items-center w-full pl-3 ${
            relatedPosts.length - 1 == i ? "pb-5" : "pb-5"
          }`}>
          <div className='flex-grow'>
            <Link href={`/post/${post.slug}`} key={post.title}>
              <p className='text-md cursor-pointer hover:opacity-70'>
                {post.title}
              </p>
            </Link>
            <p className='text-xs uppercase text-slate-600'>
              {post.read} MIN READ
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
