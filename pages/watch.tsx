import React from "react";
import Qutote from "../components/Qutote";
import { getPosts } from "../services";
import WideCard from "../components/WideCard";
import { Head } from "next/document";

const watch = ({ posts }: { posts: any }) => {
  return (
    <div className='container mx-auto mb-8 lg:mt-0 mt-4 px-4 lg:px-0'>
      <Head>
        <title>Watch | BenTech. </title>
        <link rel='icon' href='/static/favicon.ico' />
        <meta
          name='description'
          content='BenTech serves as a platform to share insights and musings on the intersection of tech, self-improvement, innovation, and entrepreneurship.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1 bg-white shadow-sm'>
          <h1 className='pl-4 pt-4 font-bold text-2xl lg:text-3xl text-gray font-inter'>
            Watch
          </h1>
          <p className='text-sm pl-4 mb-1 text-slate-600'>
            The latest videos from our YouTube channel
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

export default watch;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
