import React from 'react'

function ProductCard(props) {
  const { product } = props
  return (
    // ปรับเป็น border-2 border-red-400 ตามรูปโจทย์
    <div className='border-2 border-red-400 p-4 rounded-md flex gap-6 bg-white shadow-sm'>
      {/* ส่วนของรูปภาพสินค้า */}
      <div className="w-32 h-32 flex-shrink-0 bg-white">
        <img className='w-full h-full object-contain' src={product.image} alt={product.title} />
      </div>
      
      {/* ส่วนของรายละเอียดสินค้า */}
      <div className="flex flex-col justify-center">
        <h3 className='font-bold text-lg'>Title : {product.title}</h3>
        <p className='text-gray-600 text-sm my-1'>Description : {product.description}</p>
        <p className='text-xl font-semibold mt-2 text-indigo-700'>Price : {product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard