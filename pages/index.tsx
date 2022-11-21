import type { NextPage } from "next";
import Head from "next/head";
import { PostCard, Categories, PostWidget, Socials } from "../components";
import { getCategoryPost, getPosts, getMostRecentPost } from "../services";
import HomePageFeature from "../components/HomePageFeature";
import { useEffect, useState } from "react";
import Newsletter from "../components/Newsletter";
import Qutote from "../components/Qutote";

const Home: NextPage = ({ posts }: any) => {
  const [gridItems, setGridItems] = useState([]);

  useEffect(() => {
    getCategoryPost("thoughts").then((result) => setGridItems(result));
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='container mx-auto mb-8'>
        <Head>
          <title>Blog</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <HomePageFeature />
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
            {posts.map((post: any) => (
              <PostCard post={post.node} key={post.title} />
            ))}
            <div className='flex flex-row flex-wrap'>
              {gridItems &&
                gridItems?.map((gridItem: any) => (
                  <div className='w-1/2' key={gridItem.title}>
                    <div className='mb-5 mr-3 shadow-sm rounded-b-sm bg-white'>
                      <img
                        className='p-2 object-top object.cover'
                        src={gridItem.node.featuredImage?.url}
                      />
                      <h1 className='pl-3 pt-1 text-xl font-semibold'>
                        {gridItem.node.title}
                      </h1>
                      <p className='text-ellipsis overflow-hidden pl-3 pb-1 mb-1 text-sm text-zinc-800 line-clamp-3 mr-2'>
                        {gridItem.node.excerpt}
                      </p>
                      <button className='font-light bg-gradient-to-r to-gray-600 from-black text-sm rounded ml-3 mt-2 mb-5 px-5 py-1 shadow-sm transition duration-300 transform hover:-translate-y-1 hover:shadow-md inline-block hover:opacity-4 text-white'>
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className='lg:col-span-4 col-span-1'>
            <div className='relative'>
              <PostWidget />
              <Qutote />
              <Categories />
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

export default Home;
