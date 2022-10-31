import type { NextPage } from "next";
import Head from "next/head";
import { PostCard, Categories, PostWidget, Socials } from "../components";
import { getCategoryPost, getPosts, getMostRecentPost } from "../services";
import HomePageFeature from "../components/HomePageFeature";
import { useEffect, useState } from "react";
import Slider from "../components/Slider";

const Home: NextPage = ({ posts }: any) => {
  const [gridItems, setGridItems] = useState([]);

  useEffect(() => {
    getCategoryPost("thoughts").then((result) => setGridItems(result));
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='container mx-auto  mb-8'>
        <Head>
          <title>Blog</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {/* <FeaturedPosts /> */}
        <HomePageFeature />
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
            {posts.map((post: any) => (
              <PostCard post={post.node} key={post.title} />
            ))}

            <div className='flex flex-row flex-wrap'>
              {gridItems &&
                gridItems?.map((gridItem) => (
                  <div className='w-1/2'>
                    <div className='m-3 shadow-sm rounded-b-lg bg-white'>
                      <img
                        className='p-2 object-top object.cover'
                        src={gridItem.node.featuredImage?.url}
                      />
                      <h1 className='pl-2 pt-3 text-xl font-medium'>
                        {gridItem.node.title}
                      </h1>
                      <p className='text-ellipsis overflow-hidden line-clamp-3 pl-2 pb-1 my-2 mb-4 font-light'>
                        {gridItem.node.excerpt}
                      </p>
                      <button className='pl-2  mb-4'>Read More</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className='lg:col-span-4 col-span-1'>
            <div className='relative'>
              <PostWidget />
              <Categories />
              <Socials />
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
