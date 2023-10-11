import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const ProductCard = ({ id, title, price, image, description }) => {
  // при клике на карточку товара нас будет перебрасывать на страницу детального показа продукта
  return (
    <Link to={`/product/${id}`} className='product'>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price} $</p>
    </Link>
  )
}
export default ProductCard
