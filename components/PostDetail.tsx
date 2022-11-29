import React, { useEffect } from "react";
import moment from "moment";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  EmailIcon,
} from "react-share";

const PostDetail = ({ post }: any) => {
  const getContentFragment = (index: any, text: any, obj: any, type: any) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className='text-xl font-semibold mb-4'>
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p
            key={index}
            className='text-md text-zinc-800 leading-normal mb-3 px-6'>
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className='text-md font-semibold mb-4'>
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            className='px-6 py-6'
            key={index}
            alt={obj.title}
            height={obj.height}
            width={"100%"}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        type: "spring",
        stiffness: 50,
        delay: 0.2,
      },
    },
    hidden: { y: 20, opacity: 0 },
  };

  const shareUrl = post.slug;

  return (
    <motion.div
      variants={boxVariant}
      initial='hidden'
      ref={ref}
      animate={control}
      className='bg-white shadow-sm rounded-sm pb-12 mb-8 mt-8 lg:mt-0'>
      <div className='px-0 lg:px-0 pt-5'>
        <p className='px-6 uppercase text-xs mb-1'>{post.categories[0].name}</p>
        <h1 className='px-6 text-2xl lg:text-3xl text-gray font-semibold mb-2 tracking-normal font-inter'>
          {post.title}
        </h1>
        <p className='px-6 text-zinc-800'>{post.excerpt}</p>
        <div className='px-6 pt-3 flex flex-row'>
          <div className='font-medium mb-1'>
            <span className='text-sm mb-10 text-zinc-800'>
              Published: {moment(post.createdAt).format("MMM DD YYYY")}
            </span>{" "}
          </div>
          <div className='px-3'>
            <p className='font-light'>|</p>
          </div>
          <div>
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon
                size={27}
                round={false}
                iconFillColor='black'
                bgStyle={{ fill: "none" }}
              />
            </TwitterShareButton>

            <FacebookShareButton url={shareUrl}>
              <FacebookIcon
                size={27}
                round={false}
                iconFillColor='black'
                bgStyle={{ fill: "none" }}
              />
            </FacebookShareButton>

            <EmailShareButton url={shareUrl}>
              <EmailIcon
                size={27}
                round={false}
                iconFillColor='black'
                bgStyle={{ fill: "none" }}
              />
            </EmailShareButton>
          </div>
        </div>
        <div className='relative overflow-hidden shadow-sm mt-3 mb-1'>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className='object-top h-full w-full'
          />
        </div>
        <p className='px-6 text-xs text-zinc-800 mb-1 ml-1'>
          Image caption for the image above goes here{" "}
        </p>
        <div className='px-6 mb-3'>
          <hr style={{ backgroundColor: "black" }} />
        </div>

        {post.content.raw.children.map((typeObj: any, index: any) => {
          const children = typeObj.children.map((item: any, itemIndex: any) =>
            getContentFragment(itemIndex, item.text, item, item.type)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </motion.div>
  );
};

export default PostDetail;
