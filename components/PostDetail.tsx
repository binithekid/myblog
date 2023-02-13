import React from "react";
import moment from "moment";
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
      case "code-block":
        return (
          <pre key={index}>
            <code className='language-javascript'>
              {modifiedText.map((item: any, i: any) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </code>
          </pre>
        );
      case "paragraph":
        return (
          <p
            key={index}
            className='text-md text-zinc-800 leading-normal mb-5 px-6'>
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
          <div className='flex justify-center align-center border-slate-500'>
            <img
              className='border-solid border mb-6 mt-4 border-slate-100'
              key={index}
              alt={obj.title}
              height={obj.height}
              src={obj.src}
            />
          </div>
        );
      case "link":
        return (
          <a
            key={index}
            href={obj.href}
            className='text-md text-blue-600 hover:text-blue-400'>
            <React.Fragment>{obj.title}</React.Fragment>
          </a>
        );
      default:
        return modifiedText;
    }
  };

  const shareUrl = post.slug;

  return (
    <div className='bg-white shadow-sm rounded-sm pb-12 mb-8 mt-8 lg:mt-0'>
      <div className='px-0 lg:px-0'>
        <div className='relative overflow-hidden shadow-sm mt-1 mb-6'>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className='object-top h-full w-full'
          />
        </div>
        <p className='px-6 uppercase text-xs mb-1'>{post.categories[0].name}</p>
        <h1 className='px-6 text-2xl lg:text-3xl text-gray font-semibold mb-2 tracking-normal font-inter'>
          {post.title}
        </h1>
        <p className='px-6 text-zinc-800 text-sm'>{post.excerpt}</p>
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

        <hr className='mb-3 mx-6' />

        {post.content.raw.children.map((typeObj: any, index: any) => {
          const children = typeObj.children.map((item: any, itemIndex: any) =>
            getContentFragment(itemIndex, item.text, item, item.type)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
