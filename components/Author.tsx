import React from "react";
import Image from "next/image";

type AuthorType = {
  author: {
    photo: {
      url: string;
    };
    name: string;
    bio: string;
  };
};

const Author = ({ author }: AuthorType) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-sm bg-black'>
      <div className='absolute left-0 right-0 -top-14'></div>
      <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  );
};

export default Author;
