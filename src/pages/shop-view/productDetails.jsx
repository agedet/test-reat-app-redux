import React from 'react'
import {Link, useParams} from 'react-router-dom';
import products from '../../utils/data'

function productDetails() {
    const {productId} = useParams();

    const product = products.find((product) => (product.id === productId));

    
  return (
    <div>
        <img src={product.image} alt={product.name} />
        <h4>{product.name}</h4>

        <Link to='/products'>Back to products</Link>
    </div>
  )
}

export default productDetails