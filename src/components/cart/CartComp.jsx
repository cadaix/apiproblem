import React from 'react'

const CartComp = ({cart}) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4">
      <img className="h-16 w-16 object-cover rounded-lg shadow-md" src={cart?.image} alt="" />
      <div className="ml-4">
        <div className="text-xl font-semibold text-gray-800">{cart?.title}</div>
        <div className="text-md text-gray-600 mt-2">{cart?.description}</div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-gray-500 text-md">{cart?.prices} $ ({cart?.count})</div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-semibold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => console.log('Ürün silindi.')}>Ürünü Sil</button>
      </div>
    </div>
  )
}

export default CartComp
