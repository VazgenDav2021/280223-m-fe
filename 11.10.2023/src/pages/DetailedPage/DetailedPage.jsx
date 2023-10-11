import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const DetailedPage = () => {
    // с помощю хука useParams беру динамичный id продукта для дальнейшего запроса для получения онформации о нем
    const { vazgenId } = useParams();
    const [product, setProduct] = useState({})

    // делаю запрос для получения конкрентого продукта
    const getCurrrentProduct = async () => {
        await fetch(`https://fakestoreapi.com/products/${vazgenId}`).then(async res => {
            const data = await res.json()
            setProduct(() => ({ ...data }))
        })
    }

    console.log({ product });
    useEffect(() => {
        getCurrrentProduct()
    }, [])

    return (
        <div>DetailedPage</div>
    )
}

export default DetailedPage