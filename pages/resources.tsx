import React from "react";
import Qutote from "../components/Qutote";
import { getPosts } from "../services";
import WideCard from "../components/WideCard";

const resources = ({ posts }: { posts: any }) => {
  return (
    <div className='container mx-auto mb-8 lg:mt-0 mt-4 px-4 lg:px-0'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1 bg-white shadow-sm'>
          <h1 className='pl-4 pt-4 font-bold text-2xl lg:text-3xl text-gray font-inter'>
            Resources
          </h1>
          <p className='text-sm pl-4 mb-1 text-slate-600 '>
            The best resources from across the globe recommended by us
          </p>
          <hr className='mb-6 mx-4 w-1/6 mt-1' />
          <div>
            {posts.map((post: any, i: number) => (
              <div className='px-4'>
                <WideCard post={post} key={i} />
                {posts.length - 1 === i ? null : <hr />}
              </div>
            ))}
          </div>
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='relative'>
            <Qutote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default resources;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
