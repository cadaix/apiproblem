import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarLeft = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/')} className='flex items-center cursor-pointer'>
      <img src={"https://i.imgyukle.com/2023/04/25/Q93TAv.png"} alt='Marketron Logo' className='h-12 w-12 mr-2' />
      <div className='text-2xl font-bold text-gray-800'>Marketron</div>
    </div>
  );
}

export default NavbarLeft;
