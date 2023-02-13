import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  type Category = {
    name: string;
    slug: string;
  };

  return (
    <div className='bg-white shadow-md mb-8 rounded-sm'>
      <h3 className='text-lg mb-5 font-light border-b p-2 rounded-t-sm text-white bg-gradient-to-r to-gray-600 from-black'>
        Categories
      </h3>
      {/* {categories.map((category: Category, i) => (
        <div
          key={category.slug}
          className={`flex items-center w-full pl-3 ${
            categories.length - 1 == i ? "pb-7" : "pb-5"
          }`}>
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className='cursor-pointer block text-lg -mb-1 hover:opacity-80'>
              {category.name}
            </span>
          </Link>
        </div>
      ))} */}
    </div>
  );
};

export default Categories;
