import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts, getProducts } from '../../redux/productSlice'
import Product from './Product'
import Loading from '../Loading'

import ReactPaginate from 'react-paginate';

const Products = ({category, sort}) => {
  const  dispatch = useDispatch()
  const {products, productsStatus } = useSelector(state => state.products)
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  

  console.log(sort, "sort");

  useEffect(() => {
      if(category) {
        dispatch(getCategoryProducts(category))
      }
      else {
        dispatch(getProducts())
      }
      dispatch(getProducts())
  }, [dispatch,category])

  
  return (
    <div>
      {
        productsStatus === "LOADING" ? <Loading /> :
        <>
        <div className='flex flex-wrap'>
          {
            currentItems?.sort((a,b) => sort === "inc" ? a.price - b.price : sort === "dec" ?  b.price - a.price : null )?.map((product,i) => (
              <Product key={i} product={product} />
            ))
          }
        </div>
        <ReactPaginate
  previousLabel={<i className="fas fa-angle-left"></i>}
  nextLabel={<i className="fas fa-angle-right"></i>}
  breakLabel={'...'}
  pageCount={pageCount}
  marginPagesDisplayed={1}
  pageRangeDisplayed={2}
  onPageChange={handlePageClick}
  containerClassName={'flex justify-center  mb-10'}
  pageClassName={'mx-1 w-8 h-8 rounded-md text-center flex items-center justify-center'}
  activeClassName={'bg-gray-200 text-black font-bold'}
  activeLinkClassName={'bg-gray-200 text-black font-bold'}
  previousClassName={'w-8 h-8 mx-1 rounded-md text-center flex items-center justify-center'}
  nextClassName={'w-8 h-8 mx-1 rounded-md text-center flex items-center justify-center'}
  breakClassName={'w-8 h-8 mx-1 rounded-md text-center flex items-center justify-center'}
/>


        </>
      }

    </div>
  )
}

export default Products