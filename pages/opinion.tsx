import React from "react";
import Qutote from "../components/Qutote";
import { getPosts } from "../services";
import WideCard from "../components/WideCard";
import { HiOutlineChat } from "react-icons/hi";

const news = ({ posts }: { posts: any }) => {
  return (
    <div className='container mx-auto mb-8'>
      <div className='mt-12 flex flex-row'>
        <HiOutlineChat
          style={{
            color: "black",
            marginTop: "3px",
            fontSize: "2rem",
            marginRight: "5px",
          }}
        />
        <h1 className='font-bold text-3xl text-gray font-inter mb-5'>
          Opinion
        </h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          <div>
            {posts.map((post: any) => (
              <WideCard post={post} />
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

export default news;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}