import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export type Data = {
  title: string;
  createdAt: string;
  slug: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
};

let count = 0;
let slideInterval: NodeJS.Timeout | undefined;
const Slider = ({ posts }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef: any = useRef();

  const removeAnimation = () => {
    sliderRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    sliderRef.current.addEventListener("animationend", removeAnimation);
    sliderRef.current.addEventListener("mouseenter", pauseSlider);
    sliderRef.current.addEventListener("mouseleave", startSlider);
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % posts.length;
    setCurrentIndex(count);
    sliderRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const dataLength = posts.length;
    sliderRef.current.classList.add("fade-anim");
    count = (currentIndex + dataLength - 1) % dataLength;
    setCurrentIndex(count);
  };

  return (
    <div ref={sliderRef} className='w-full'>
      <p>Hello</p>
      <div>
        <img
          className='w-full'
          src={posts[currentIndex].node?.featuredImage.url}
          alt={posts[0].title}
        />
      </div>
      <div className='w-full flex justify-between items-center px-3'>
        <button
          className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'
          onClick={handleOnPrevClick}>
          <MdKeyboardArrowLeft size={20} />
        </button>
        <button
          className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'
          onClick={handleOnNextClick}>
          <MdKeyboardArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
