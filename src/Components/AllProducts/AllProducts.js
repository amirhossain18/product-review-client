import React, { useEffect, useState } from 'react';
import ProductsList from '../ProductsList/ProductsList';

const AllProducts = () => {
        const [products, setProducts]= useState([]);
        useEffect( ()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))

        }, [])



    return (
        <div>
            <h2>al products {products.length}</h2>

            {
                products.map(product => <ProductsList
                product={product}
                ></ProductsList>)
            }
        </div>
    );
};

export default AllProducts;