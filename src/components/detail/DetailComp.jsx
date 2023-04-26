import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const handleCount = (type) => {
    if (type === 'increment') {
      if(count < productDetail?.rating?.count)
      setCount(count + 1);
    } else if (type === 'decrement' && count > 0) {
      setCount(count - 1);
    }
  };

  const addBasket = () => {
    dispatch(addToCart({id: productDetail?.id,title : productDetail?.title,image : productDetail?.image,price : productDetail?.price, count : count}))
  }

  if (!productDetail) {
    return null;
  }


  return (
    <div className="min-h-screen bg-gray-100 py-12 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="bg-white overflow-hidden shadow rounded-lg max-w-7xl w-full">
        <div className="sm:flex sm:items-center sm:justify-between px-6 py-4">
          <div className="flex-shrink-0">
            <img
              className="h-80vh w-full object-cover rounded-lg hover:scale-125 transition-all duration-500 ease-in-out"
              src={productDetail?.image}
              alt="Product"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{productDetail?.title}</h2>
            <p className="text-gray-600 my-2">{productDetail?.description}</p>
            <h3 className="text-3xl font-bold text-gray-800 my-2">${productDetail?.price}</h3>
            <div className="flex items-center justify-center m-5 my-2">
              <span className="text-lg font-bold text-gray-800 ">{productDetail?.rating?.rate}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500 mx-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 15.042l4.472 2.722a1 1 0 001.555-1.023l-1.07-5.902 4.513-4.142a1 1 0 00-.567-1.706l-5.898-.807L10 1.942 7.55 6.185l-5.898.807a1 1 0 00-.566 1.706l4.513 4.142-1.07 5.902a1 1 0 001.555 1.023L10 15.042z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg font-bold text-gray-800 m-5">{productDetail?.rating?.count} Adet Stok</span>
            </div>
            <div className="flex items-center justify-center my-2">
              <button className="bg-gray-200 rounded-lg px-4 py-2" onClick={() => handleCount('decrement')}>
                -
              </button>
              <span className="mx-4 font-bold">{count}</span>
              <button className="bg-gray-200 rounded-lg px-4 py-2" onClick={() => handleCount('increment')}>
                +
              </button>
            </div>
            <button onClick={addBasket} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4">
              Sepete Ekle ({count})
            </button>
            </div>
            </div>
          </div>
          </div>
          );
        };
        
        export default DetailComp;          