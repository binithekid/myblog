import type { NextPage } from "next";
import Head from "next/head";
import { PostCard, PostWidget, Socials } from "../components";
import { getCategoryPost, getPosts, getMostRecentPost } from "../services";
import HomePageFeature from "../components/HomePageFeature";
import { useEffect, useState } from "react";
import Newsletter from "../components/Newsletter";
import Qutote from "../components/Qutote";
import Opinion from "../components/OpinionWidget";
import Link from "next/link";

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
              <PostCard post={post.node} key={post.node.title} />
            ))}
            <div className='flex flex-row flex-wrap'>
              {gridItems &&
                gridItems?.map((gridItem: any, i: number) => (
                  <div className='lg:w-1/2' key={gridItem.node.title}>
                    <div
                      className={`lg:mx-0 mx-4 lg:mb-5 lg:mr-3 shadow-sm lg:mt-0 rounded-b-sm bg-white ${
                        gridItems.length - 1 === i ? "mb-0" : "mb-10"
                      }`}>
                      <img
                        className='lg:p-2 mb-3 lg:mb-0 object-top object.cover'
                        src={gridItem.node.featuredImage?.url}
                      />
                      <div className='ml-3'>
                        <span className='text-xs uppercase mb-1 text-slate-600 lg:hidden'>
                          {gridItem.node.categories[0].name}
                        </span>
                      </div>
                      <Link href={`/post/${gridItem.node.slug}`}>
                        <h1 className='pl-3 text-xl font-semibold cursor-pointer hover:opacity-60 transition ease-in-out duration-300'>
                          {gridItem.node.title}
                        </h1>
                      </Link>
                      <p className='text-ellipsis overflow-hidden pl-3 text-sm text-zinc-800 line-clamp-3 mr-2'>
                        {gridItem.node.excerpt}
                      </p>
                      <p className='text-xs ml-3 pb-3 pt-2 text-slate-600'>
                        {gridItem.node.read} MIN READ
                      </p>
                      {/* <button className='font-light bg-gradient-to-r from-amber-200 via-red-400 to-red-500 text-sm rounded-sm ml-3 mt-2 mb-5 px-5 py-1 shadow-sm transition duration-300 transform hover:-translate-y-1 hover:shadow-md inline-block hover:opacity-4 text-white'>
                        Read More
                      </button> */}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className='lg:col-span-4 col-span-1'>
            <div className='relative'>
              <PostWidget />
              <Qutote />
              <Opinion />
              <Socials />
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
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
