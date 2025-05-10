import React, { useState } from 'react'
import { useProductStore } from '../store/product';
import { ToastContainer, toast } from 'react-toastify';
  

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });
  const { createProduct } = useProductStore()
  const handleAddProduct = async() => {
    const { success, message } = await createProduct(newProduct)
    success ? toast(message) && setNewProduct({name: "", price: "", image: ""}) : toast(message);
  }
  
  return (
    <section className='flex justify-center mt-8'>
      <div className="m-auto text-center w-3xl dark:text-white bg-gray-800 p-8">
        <h1 className='text-4xl mb-8 font-extrabold'>
          Create New Product
        </h1>
        <div className="w-full flex flex-col bg-blue">
          <input className='p-3 rounded-2xl border-1 border-gray-200 mb-2' type="text" name="name" value={newProduct.name} placeholder='Product name' onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>
          <input className='p-3 rounded-2xl border-1 border-gray-200 mb-2' type="text" name="name" value={newProduct.price} placeholder='Price' onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}/>
          <input className='p-3 rounded-2xl border-1 border-gray-200 mb-2' type="text" name="name" value={newProduct.image} placeholder='Image URL' onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}/>
          <button className="p-3 rounded-2xl border-1 border-gray-200 bg-blue-300 cursor-pointer text-blue-800 font-bold" onClick={handleAddProduct}>Add Product</button>
        </div>
        <ToastContainer/>
      </div>
    </section >
  )
}

export default CreatePage