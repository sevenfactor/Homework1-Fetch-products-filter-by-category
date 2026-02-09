import ProductContainer from "./ProductContainer"

function App() {
  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <h1 className="text-4xl text-amber-500 bg-violet-100 text-center py-4 font-bold rounded-lg shadow-sm">
        Products Fetch & Filter
      </h1>
      <hr className="border-gray-300 my-4" />
      
      {/* ตัว Container จะรวบรวมทั้งปุ่ม Filter และรายการสินค้าไว้ด้วยกัน */}
      <ProductContainer />
    </div>
  )
}

export default App