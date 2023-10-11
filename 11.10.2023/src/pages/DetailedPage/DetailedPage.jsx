import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';

const DetailedPage = () => {
    // с помощю хука useParams беру динамичный id из ссыли(url) продукта для дальнейшего запроса для получения онформации о нем
    const { vazgenId } = useParams();
    const [product, setProduct] = useState({})

    // делаю запрос для получения конкрентого продукта
    const getCurrrentProduct = async () => {
        await fetch(`https://fakestoreapi.com/products/${vazgenId}`).then(async res => {
            const data = await res.json()
            setProduct(() => ({ ...data }))
        })
    }

    useEffect(() => {
        getCurrrentProduct()
    }, []);

    return (
        <div>
            <ProductCard {...product} />
        </div>
    )
}

export default DetailedPage