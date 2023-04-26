import React, { useEffect } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { AiTwotoneHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';


const NavbarRight = () => {
  const dispatch = useDispatch();
  const {itemCount} = useSelector(state => state.carts)
  const navigate = useNavigate()
  

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, itemCount]);
  
  return (
    <div className="flex items-center justify-end w-full">
      <div className="relative w-48">
        <label htmlFor="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <BiSearchAlt size={24} />
        </label>
        <input 
          type="text" 
          id="search" 
          placeholder="Arama Yapınız..." 
          className="w-full pl-10 pr-3 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50"
        />
      </div>
      <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 mx-4 focus:outline-none">
        <AiTwotoneHeart size={28} />
      </button>
      <button onClick={() => navigate("cart")} className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 focus:outline-none">
        <div className="relative">
          <FaShoppingCart size={28} />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
            {itemCount}
          </div>
        </div>
      </button>
    </div>
  )
}

export default NavbarRight;
