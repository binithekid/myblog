import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategoryPosts } from "../services";

const Opinion = () => {
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    getCategoryPosts("Thoughts").then((result) => setOpinions(result.posts));
  }, []);

  return (
    <div className='bg-white mb-8 rounded-sm hidden lg:block'>
      <h3 className='text-sm -mb-1 p-2 rounded-t-sm text-black'>Opinion</h3>
      <hr className='mb-3 mx-2' />
      {opinions.length > 0 &&
        opinions.map((post: any, i) => (
          <div
            key={post.title}
            className={`flex items-center w-full pl-3 ${
              opinions.length - 1 == i ? "pb-7" : "pb-5"
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

export default Opinion;
