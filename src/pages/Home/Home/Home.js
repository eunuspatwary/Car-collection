import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import CardCar from '../CardCar/CardCar';
import HomeProduct from '../HomeProduct/HomeProduct';
import ReviewGet from '../ReviewGet/ReviewGet';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://powerful-chamber-23197.herokuapp.com/products')
            // fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Container>
                <div className='row'>
                    <h3 className='text-center text-danger py-5'> Our Best Explore </h3>
                    {
                        products.slice(0, 6).map(product => <HomeProduct
                            product={product}
                            key={product._id}

                        ></HomeProduct>)
                    }
                </div>
            </Container>
            <Container>
                <ReviewGet></ReviewGet>
            </Container>

            <CardCar></CardCar>

        </div>
    );
};

export default Home;