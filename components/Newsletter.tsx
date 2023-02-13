import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Newsletter = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required!"),
    }),

    onSubmit: async (values) => {
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 5000);
        formik.resetForm();
      });
    },
  });

  return (
    <div className='flex flex-col lg:mx-auto shadow rounded bg-gradient-to-r from-black via-gray-700 to-gray-500 mb-8 mx-4'>
      <h1 className='p-4 text-xl text-white font-inter'>
        Subscribe to our newsletter!
      </h1>
      <p className='ml-4 text-white font-light text-sm'>
        Sign up and we will email you daily with the best of our political and
        news coverage while also giving you a taste of our most-popular
        lifestyle, opinion and personal blogs.
      </p>
      <div className='flex flex-row pl-4 pt-6 pb-2'>
        <form onSubmit={formik.handleSubmit}>
          <input
            className='shadow-sm text-sm h-8 rounded-sm focus:border-teal-500 focus:ring-teal-500 border-slate-400'
            name='email'
            type='email'
            placeholder='Enter your email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <button
            type='submit'
            className='ml-3 h-8 px-3 shadow-sm rounded-sm bg-white text-gray-500 text-sm hover:opacity-60 ease-in-out duration-300'>
            {/* <GrSend style={{ fontSize: "0.8rem" }} /> */}
            Submit
          </button>
        </form>
      </div>
      {successMessage && (
        <span className='mb-4 text-sm ml-4 mt-2 text-green-500'>
          Your email has been submitted!
        </span>
      )}
      {formik.errors && (
        <span className='mb-4 text-sm ml-4 mt-2 text-red-400'>
          {formik.errors.email}
        </span>
      )}
    </div>
  );
};

export default Newsletter;
