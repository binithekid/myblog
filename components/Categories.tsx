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
    <div className='bg-white shadow-sm rounded-sm mb-8'>
      <h3 className='text-lg mb-5 font-light border-b p-2 text-white  bg-gradient-to-r to-sky-500 from-blue-500'>
        Categories
      </h3>
      {categories.map((category: Category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3 hover:opacity-80 p-2'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
