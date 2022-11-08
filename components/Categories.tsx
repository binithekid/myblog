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
    <div className='bg-white shadow-sm rounded-sm p-4 mb-8'>
      <h3 className='text-xl mb-5 font-medium border-b pb-2'>Categories</h3>
      {categories.map((category: Category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3 hover:opacity-80'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
