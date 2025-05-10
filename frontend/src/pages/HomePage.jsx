import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <section className='max-w-7xl flex flex-col m-auto justify-center text-center mt-20'>
      <div className="text-4xl font-extrabold text-white">
        Current Products
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        { products.map(product => {
            return <ProductCard key={product._id} product={product}/>
          })
        }
      </div>
      {products.lenght === 0 || products === '' && (
        <div className="text-gray-300">
          <p>No products found <Link to={"/create"}><span className='text-blue-400 font-bold'>Create a product</span></Link></p>
        </div>
      )}
    </section>
  )
}

export default HomePage