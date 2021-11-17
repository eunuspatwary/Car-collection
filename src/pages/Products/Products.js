import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, serProducts] = useState([])
    useEffect(() => {
        fetch('https://powerful-chamber-23197.herokuapp.com/products')
            .then(res => res.json())
            .then(data => serProducts(data))
    }, [])
    return (
        <Container>
            <h2 className='text-info text-center py-5'>All Explore Item </h2>
            <div className='row'>
                {
                    products.map(product => <Product
                        product={product}
                        key={Product.key}
                    ></Product>)
                }
            </div>
        </Container>



    );
};

export default Products;