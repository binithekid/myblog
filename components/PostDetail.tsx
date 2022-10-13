import React from "react";
import moment from "moment";

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
          <p key={index} className='mb-8'>
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
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-sm mb-6'></div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center mb-8 w-full'>
          <div className='flex items-center justify center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              className='align-middle rounded-full'
              height='30px'
              width='30px'
            />
            <p className='inline align-middle text-gray-700 ml-2 text-lg'>
              {post.author.name}
            </p>
          </div>
          <div className='font-medium text-gray-700  '>
            <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
        <h1 className='mb-8 text-3xl font-semibold tracking-normal'>
          {post.title}
        </h1>
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
