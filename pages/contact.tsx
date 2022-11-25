import React, { useState } from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";
import Newsletter from "../components/Newsletter";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SubmitContact } from "../services/index";

const contact = () => {
  const [confirmation, setConfirmation] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    // Validate Form
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      name: Yup.string().required("Name is required"),
      message: Yup.string().required("Please enter a message"),
    }),

    onSubmit: (values) => {
      SubmitContact(values);
      setConfirmation(true);
    },
  });

  return (
    <>
      <div className='container mx-auto mb-12 flex flex-row'>
        <div className='mt-4 w-1/3 flex flex-col'>
          <h1 className='font-bold text-4xl text-gray font-inter mb-1'>
            Contact us
          </h1>
          <p className='mt-1 text-lg'>
            Get in touch using the contact details below <br />
            or the request a quote form.
          </p>
          <div className='flex flex-row mt-5'>
            <FiMail
              style={{
                color: "black",
                marginTop: "5px",
                fontSize: "1.4rem",
                marginRight: "10px",
              }}
            />
            <p className='text-2xl'>info@truthseekers.com</p>
          </div>

          <div className='flex flex-row mt-5'>
            <FaInstagram
              style={{
                color: "black",
                marginTop: "5px",
                fontSize: "1.5rem",
                marginRight: "10px",
              }}
            />
            <p className='text-2xl'>truthseekerstv</p>
          </div>
          <div className='flex flex-row mt-5'>
            <FaTwitter
              style={{
                color: "black",
                marginTop: "5px",
                fontSize: "1.5rem",
                marginRight: "10px",
              }}
            />
            <p className='text-2xl'>truthseekerstv_</p>
          </div>
          <div className='flex flex-row mt-5'>
            <MdOndemandVideo
              style={{
                color: "black",
                marginTop: "5px",
                fontSize: "1.5rem",
                marginRight: "10px",
              }}
            />
            <p className='text-2xl'>Truth Seekers</p>
          </div>
        </div>
        <div className='w-2/3 mt-4 flex flex-col'>
          {confirmation ? (
            <div className='flex h-full justify-center items-center'>
              <p className='text-2xl font-med'>Thanks you for feedback!</p>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit} className='flex flex-col'>
              <input
                placeholder='Name'
                id='name'
                name='name'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                className='shadow-sm mb-4 block p-2.5 w-2/3 text-md text-gray-900 rounded-sm border-none focus:ring-blue-500 focus:border-blue-500'
              />
              {formik.touched.name && formik.errors.name ? (
                <p className='mb-4 text-red-400 text-sm -mt-4'>
                  *{formik.errors.name}
                </p>
              ) : null}
              <input
                placeholder='Email address'
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                className='shadow-sm mb-4 block p-2.5 w-2/3 text-md text-gray-900 rounded-sm border-none focus:ring-blue-500 focus:border-blue-500'
              />
              {formik.touched.email && formik.errors.email ? (
                <p className='mb-4 text-red-400 text-sm -mt-4'>
                  *{formik.errors.email}
                </p>
              ) : null}
              <textarea
                id='message'
                name='message'
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur}
                rows={7}
                className='shadow-sm block p-2.5 w-full text-md text-gray-900 rounded-sm border-transparent focus:ring-blue-600 focus:border-blue-600'
                placeholder='Write your thoughts here...'></textarea>
              {formik.touched.message && formik.errors.message ? (
                <p className='mb-4 text-red-400 text-sm'>
                  *{formik.errors.message}
                </p>
              ) : null}
              <button
                type='submit'
                className='cursor-pointer font-light tracking-wide text-md rounded-md mt-5 px-6 py-2 w-32 shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:opacity-4 text-white bg-gradient-to-r to-gray-600 from-black'>
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default contact;
