import React from 'react';
import Skeleton from '../skeleton/Skeleton';
import './Product.css';
import ProductWrapper from '../product-wrapper/ProductWrapper';
import {PRODUCTS} from '../../static'
function Product() {
  return (
    <div className='container'>

    <ProductWrapper data={PRODUCTS}/>
    <Skeleton/>
    </div>

  );
}

export default Product;
