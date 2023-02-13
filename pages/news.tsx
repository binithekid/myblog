import React from "react";
import Qutote from "../components/Qutote";
import { getCategoryPost } from "../services";
import WideCard from "../components/WideCard";
import { NextSeo } from "next-seo";
const news = ({ posts }: { posts: any }) => {
  return (
    <>
      <NextSeo title='News | Bentech.' />
      <div className='container mx-auto mb-8 lg:mt-0 mt-4 px-4 lg:px-0'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1 bg-white shadow-sm'>
            <h1 className='pl-4 pt-4 font-bold text-2xl lg:text-3xl text-gray font-inter'>
              News
            </h1>
            <p className='text-sm pl-4 mb-1 text-slate-600'>
              The latest news coming in from the world of tech
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
    </>
  );
};

export default news;

// Fetch data at build time
export async function getStaticProps({ params }: any) {
  const posts = await getCategoryPost("news");

  return {
    props: { posts },
  };
}
