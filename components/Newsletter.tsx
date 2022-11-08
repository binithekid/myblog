import React, { useState } from "react";
import { GrSend } from "react-icons/gr";
import { useFormik } from "formik";
import * as Yup from "yup";

const Newsletter = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  //Formik Logic
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    //Validate Form
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("email is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      setSuccessMessage(true);
    },
  });

  return (
    <div className='flex flexrow w-full bg-slate-200'>
      <div className='w-1/2 p-10'>
        <h1 className='ml-4 text-3xl text-gray font-inter mb-2'>
          Subscribe to our newsletter!
        </h1>
        <p className='ml-4'>
          Newsletter Subcribe Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur
          obcaecati possimus nisi ea iste! Newsletter Subcribe Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at
          quae omnis pariatur obcaecati possimus nisi ea iste
        </p>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <form className='w-1/2' onSubmit={formik.handleSubmit}>
          <input
            className='w-4/5 shadow-sm text-md rounded-sm p-2 focus:border-teal-500 focus:ring-teal-500 border-slate-400'
            name='email'
            type='email'
            placeholder='Enter your email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <button
            type='submit'
            className='ml-1 rounded-sm h-10 px-3 shadow-sm bg-white hover:opacity-60 ease-in-out duration-300'>
            <GrSend style={{ fontSize: "0.8rem" }} />
          </button>
        </form>
        {}
      </div>
    </div>
  );
};

export default Newsletter;
