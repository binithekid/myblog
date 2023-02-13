import React, { useState, useEffect, useRef } from "react";

import { submitComment } from "../services";

const CommentsForm = ({ slug }: { slug: string }) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl: React.MutableRefObject<any> = useRef();
  const nameEl: React.MutableRefObject<any> = useRef();
  const emailEl: React.MutableRefObject<any> = useRef();
  const storeDataEl: any = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleButtonSubmit = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className='bg-white shadow-sm rounded-sm p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Leave a reply
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
          ref={commentEl}
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Comment'
          name='comment'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input
          ref={nameEl}
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Name'
          name='name'
        />
        <input
          ref={emailEl}
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Email'
          name='email'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input
            type='checkbox'
            ref={storeDataEl}
            id='storeData'
            name='storeData'
            value='true'
          />
          <label
            className='text-gray-500 cursor-pointer ml-2 font-sm'
            htmlFor='storeData'>
            Save name and email for next comment
          </label>
        </div>
      </div>

      {error && (
        <p className='text-xs text-red-500'>* All fields are required </p>
      )}
      <div className='mt-8'>
        <button
          type='button'
          onClick={handleButtonSubmit}
          className='lg:font-light bg-gradient-to-r to-gray-600 from-black text-xs lg:text-sm rounded mt-3 px-4 lg:px-6 py-2 shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block hover:opacity-4 text-white'>
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className='text-xl float-right font-semibold mt-3 text-green-500'>
            Comment submitted{" "}
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
