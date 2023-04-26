import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.categories)

  console.log(categories, "categories")

  useEffect(() => {
    dispatch(getCategories())
  },[dispatch])
  return (
    <div className="w-1/4 py-6 px-8 bg-gray-200 rounded-md shadow-md max-h-screen">
      <h2 className="text-2xl font-bold mb-4">KATEGORİLER</h2>
      <div className="space-y-2">
        {categories?.map((category, i) => (
          <a
            onClick={() => setCategory(category)}
            href={`#${category}`}
            className="block py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-300"
            key={i}
          >
            {category}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Category;