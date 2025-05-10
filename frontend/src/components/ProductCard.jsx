import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useProductStore } from "../store/product";
import { ToastContainer, toast } from "react-toastify";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'



export default function ProductCard ({product}) {
  const [ updatedProduct, setUpdatedProduct] = useState(product)
  let [isOpen, setIsOpen] = useState(false)
  const { deleteProduct, updateProduct } = useProductStore();
   
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid)
    if(!success){
      console.log(message);
      
      toast.error(message)
    } else {
      console.log(message);
      toast("Product deleted")
    }
  }

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const {success, message} = await updateProduct(pid, updatedProduct);
    setIsOpen(false)
    if(!success) {
      toast.error(message)
    } else {
      toast("Product updated successfully")
    }
  }

  return (
    <div class="max-w-sm max-h-96 rounded overflow-hidden shadow-lg">
        <img class="w-full object-cover h-30" src={product.image} alt="Sunset in the mountains"/>
        <div class="px-6 py-4 text-left  text-white">
          <p class="font-bold text-xl mb-2">{product.name}</p>
          <p class="text-base">
              ${product.price}
          </p>
          <div className="flex flex-row mt-2 gap-2 text-gray-700 ">
            <div className="bg-blue-300 p-2 rounded-sm">
              <FaRegEdit onClick={() => setIsOpen(true)} />
            </div>
            <div className="bg-red-300 p-2 rounded-sm">
              <MdDeleteOutline onClick={() => handleDeleteProduct(product._id)} />
            </div>
          </div>
        </div>
        <ToastContainer />
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} transition className="relative z-50 transition duration-300 ease-out data-closed:opacity-0">
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className=" flex flex-col min-w-md max-w-3xl space-y-4 bg-gray-600 text-white p-12 rounded-md">
              <DialogTitle className="font-bold">Update Product</DialogTitle>
              <input className='p-3 rounded-xl border-1 border-gray-200 mb-2' type="text" name="name" id="" value={updatedProduct.name}
                onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
              />
              <input className='p-3 rounded-xl border-1 border-gray-200 mb-2' type="text" name="price" id="" value={updatedProduct.price}
                onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
              />
              <input className='p-3 rounded-xl border-1 border-gray-200 mb-2' type="text" name="image" id="" value={updatedProduct.image}
                onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
              />
              <div className="flex gap-4">
                <button className="bg-blue-300 p-2 rounded-sm text-gray-700" onClick={() => handleUpdateProduct(product._id, updatedProduct )}>Update</button>
                <button onClick={() => setIsOpen(false)}>Cancel</button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
    </div>
  )
}
