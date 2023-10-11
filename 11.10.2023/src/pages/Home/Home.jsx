import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import './index.css'

const Home = () => {
  const [products, setProducts] = useState([]);

  // делаем запрос и получаем продукты
  const getProduct = async () => {
    await fetch("https://fakestoreapi.com/products").then(async res => {
      const data = await res.json();
      setProducts(() => {
        return [...data]
      })
    })
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className='home'>
    {/* итеративно проходимся по массиву продуктов и показывем его в компоненте ProductCard */}
      {products.map((product, idx) => {
        return <ProductCard {...product} key={idx} />
      })}
    </div>
  )
}

export default Home