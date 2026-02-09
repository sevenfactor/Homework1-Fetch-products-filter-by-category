import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

function ProductContainer() {
  const [products, setProducts] = useState([]) // ข้อมูลต้นฉบับจาก API
  const [displayProducts, setDisplayProducts] = useState([]) // ข้อมูลที่กรองแล้วเพื่อเอาไป map
  const [categories, setCategories] = useState([]) // รายชื่อหมวดหมู่
  const [currentCat, setCurrentCat] = useState('All') // เก็บว่าตอนนี้เลือกหมวดอะไรอยู่

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setDisplayProducts(data)
        
        // บรรทัดนี้สำคัญ: สร้างหมวดหมู่จากข้อมูลสินค้า ไม่ให้ซ้ำกัน
        const uniqueCats = ['All', ...new Set(data.map(item => item.category))]
        setCategories(uniqueCats)
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  // ฟังก์ชันสำหรับ Filter เมื่อมีการคลิกปุ่ม
  const handleFilter = (cat) => {
    setCurrentCat(cat)
    if (cat === 'All') {
      setDisplayProducts(products)
    } else {
      const result = products.filter(item => item.category === cat)
      setDisplayProducts(result)
    }
  }

  if (loading) return <p className='text-4xl text-red-400'>Loading...</p>
  if (error) return <p className="text-red-800">{error.message}</p>

  return (
    <div>
      {/* แสดงหมวดหมู่ที่เลือกและจำนวนสินค้า */}
      <div className="my-2 p-2 bg-gray-50 border border-dashed border-gray-400">
        <p>Current Category : <span className="font-bold text-blue-600">{currentCat}</span> , Amount: <span className="font-bold">{displayProducts.length}</span></p>
      </div>

      {/* ส่วนปุ่ม Filter */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`border px-4 py-1 rounded shadow-sm transition-all
              ${currentCat === cat ? 'bg-amber-400 text-white' : 'bg-white hover:bg-gray-100'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ส่วนแสดงรายการสินค้า */}
      <div className="flex flex-col gap-4">
        {displayProducts.map(el => (
          <ProductCard key={el.id} product={el} />
        ))}
      </div>
    </div>
  )
}

export default ProductContainer