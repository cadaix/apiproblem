import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {

  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`products/${product?.id}`)} className='flex flex-col bg-gray-50 mb-5 mx-5 items-center justify-between w-[290px]  border rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 cursor-pointer'>
        <div className='flex-1'>
            <img className='w-full h-[200px] object-contain mb-4 m-2' src={product?.image} alt={product?.title} />
            <div className='text-center mb-2 font-semibold text-lg m-2'>{product?.title}</div>
            
        </div>
        <div className='flex items-center justify-between w-full'>
            <div className='text-lg font-bold text-gray-700 m-4  text-black '>{product?.price} $</div>
            <button className='py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md m-2'>Sepete Ekle</button>
        </div>
    </div>
  );
};

export default Product;
